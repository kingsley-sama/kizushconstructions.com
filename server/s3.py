import os
import uuid
from datetime import datetime
from typing import Optional, Dict, Any, List, BinaryIO
import asyncio
import boto3
from botocore.exceptions import ClientError
from fastapi import UploadFile, HTTPException, BackgroundTasks
from sqlalchemy.orm import Session


class  S3ImageUploader:
    """
    Utility class for uploading images to AWS S3 and saving metadata to database.
    """
    
    def __init__(
        self,
        bucket_name: str,
        aws_access_key_id: Optional[str] = None,
        aws_secret_access_key: Optional[str] = None,
        aws_region: str = "us-east-1",
        bucket_url: str = None,
        allowed_extensions: List[str] = None,
        max_size_mb: int = 2,
    ):
        """
        Initialize the S3 uploader with credentials and configuration.
        
        If aws_access_key_id and aws_secret_access_key are not provided, 
        boto3 will use the credentials from environment variables or IAM role.
        """
        self.bucket_name = bucket_name
        self.s3_client = boto3.client(
            's3',
            aws_access_key_id=aws_access_key_id,
            aws_secret_access_key=aws_secret_access_key,
            region_name=aws_region
        )
        self.allowed_extensions = allowed_extensions or ['jpg', 'jpeg', 'png', 'gif', 'webp']
        self.max_size_bytes = max_size_mb * 1024 * 1024  # Convert MB to bytes
        
        # Generate the base URL for accessing objects (can be customized based on region)
        self.base_url = bucket_url
    
    def _validate_image(self, file: UploadFile) -> None:
        """Validate the uploaded file."""
        # Check file extension
        extension = file.filename.split('.')[-1].lower() if file.filename else ""
        if extension not in self.allowed_extensions:
            raise HTTPException(
                status_code=400,
                detail=f"File extension not allowed. Allowed types: {', '.join(self.allowed_extensions)}"
            )
        
        # Check file size (this requires reading the file, so we need to reset the file pointer after)
        file_content = file.file.read()
        if len(file_content) > self.max_size_bytes:
            raise HTTPException(
                status_code=400,
                detail=f"File too large. Maximum size allowed is {self.max_size_bytes // (1024 * 1024)}MB"
            )
        
        # Reset file pointer for subsequent operations
        file.file.seek(0)
    
    def _generate_unique_filename(self, original_filename: str) -> str:
        """Generate a unique filename to avoid collisions in S3."""
        # Extract the file extension
        extension = original_filename.split('.')[-1].lower() if original_filename else "jpg"
        initial_filename = original_filename.split('.')[0].lower() if original_filename else "untitled"  # Fixed syntax error
        # Create a unique filename using UUID and current timestamp
        unique_id = str(uuid.uuid4())
        timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
        
        return f"uploads/projects/{timestamp}_{unique_id}.{extension}"
    
    async def upload_image(self, file: UploadFile, folder: str = None, metadata: Dict[str, Any] = None) -> Dict[str, Any]:
        """
        Uploads single image and returns an object with the detail
        """
        self._validate_image(file)
        base_filename = self._generate_unique_filename(file.filename)
        if folder:
            folder = folder.strip('/')
            s3_key = f"{folder}/{base_filename}"
        else:
            s3_key = base_filename
        try:
            self.s3_client.upload_fileobj(
                file.file,
                self.bucket_name,
                s3_key,
                ExtraArgs={
                    'ContentType': file.content_type,
                    'ACL': 'public-read',
                    'Metadata': {k: str(v) for k, v in (metadata or {}).items()}
                }
            )
            image_url = f"{self.base_url}/{s3_key}"
            image_data = {
                "filename": file.filename,
                "s3_key": s3_key,
                "url": image_url,
                "content_type": file.content_type,
                "created_at": datetime.now(),
                **(metadata or {})
            }
            return image_data    
        except ClientError as e:
            error_code = e.response.get('Error', {}).get('Code', 'Unknown')
            error_message = e.response.get('Error', {}).get('Message', str(e))
            raise HTTPException(
                status_code=500,
                detail=f"S3 upload failed: {error_code} - {error_message}"
            )
        except Exception as e:
            raise HTTPException(
                status_code=500,
                detail=f"Upload failed: {str(e)}"
            )
    
    def delete_image(self, image_id: int) -> Dict[str, Any]:
        """
        Delete image from S3
        """
        try:
            self.s3_client.delete_object(
                Bucket=self.bucket_name,
                Key=image_id
            )
            return {
                "status": "success",
                "message": f"Image {image_id} deleted successfully",
                "deleted_at": datetime.now().isoformat()
            }
            
        except ClientError as e:
            # Handle AWS-specific errors
            error_code = e.response.get('Error', {}).get('Code', 'Unknown')
            error_message = e.response.get('Error', {}).get('Message', str(e))
            raise HTTPException(
                status_code=500,
                detail=f"S3 deletion failed: {error_code} - {error_message}"
            )
        except Exception as e:
            raise HTTPException(
                status_code=500,
                detail=f"Deletion failed: {str(e)}"
            )

    async def upload_multiple_images(self, files: List[UploadFile], back_ground_task=BackgroundTasks, folder: str = None, metadata: Dict[str, Any] = None) -> Dict[str, Any]:
        """
        Call the image upload function multiple times
        """
        results = []
        errors = []
        
        for file in files:
            try:
                result = back_ground_task.add_task(self.upload_image, file=file, folder=folder, metadata=metadata)
                results.append(result)
            except HTTPException as e:
                errors.append({"filename": file.filename, "error": e.detail, "status_code": e.status_code})
        
        return {
            "successful_uploads": results,
            "failed_uploads": errors,
            "total_uploaded": len(results),
            "total_failed": len(errors)
        }
    
    def delete_multiple_images(self, image_ids: List[int]) -> Dict[str, Any]:
        """
        Call the image delete function multiple times
        """
        results = []
        errors = []
        
        for image_id in image_ids:
            try:
                result = self.delete_image(image_id=image_id)
                results.append(result)
            except HTTPException as e:
                errors.append({"image_id": image_id, "error": e.detail, "status_code": e.status_code})
        
        return {
            "successful_deletions": results,
            "failed_deletions": errors,
            "total_deleted": len(results),
            "total_failed": len(errors)
        }