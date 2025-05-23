from fastapi import APIRouter, Depends, HTTPException, status, UploadFile, File, Form
from typing import List, Optional
from sqlalchemy.orm import Session
import logging

from fastapi.encoders import jsonable_encoder
from middleware import(
    get_db, 
    authenticate_admin, 
    hash_password, 
    creat_access_token, 
    get_current_admin,
    get_s3_uploader,
    S3ImageUploader
)
from mailing import send_email_notification
from fastapi.security import OAuth2PasswordRequestForm
from uuid import UUID
from model import (
    Review, 
    Admin,
    Project,
    Message

)
from uuid import uuid4
from datetime import datetime
from schema import(
    ReviewCreate,
    ReviewOut,
    AdminCreate,
    ReviewCreate,
    ReviewOut,
    ProjectBase,
    ProjectOut,
    MessageRequest
)
from s3 import S3ImageUploader


admin_router = APIRouter()
review_router = APIRouter()
project_router = APIRouter()
message_router = APIRouter()
auth_router = APIRouter()

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Admin routes
@admin_router.post("/register")
def create_admins(admin:AdminCreate, db: Session = Depends(get_db)):
    db_admin = db.query(Admin).filter(Admin.email ==  admin.email).first()
    if db_admin:
        raise HTTPException(status_code=400, detail="admin already exist")
    pwd_hash = hash_password(admin.password)
    new_admin = Admin(
        id=uuid4(),username=admin.username, 
        hashed_password = pwd_hash, admin_id = admin.admin_id,
        email = admin.email, profile_picture = admin.profile_picture
    )
    db.add(new_admin)   
    db.commit()
    db.refresh(new_admin)
    return {"message": "admin user created successfully"}

@auth_router.post("/token")
def login_admin(form_data: OAuth2PasswordRequestForm = Depends(),db: Session = Depends(get_db)):
    admin = authenticate_admin(db, form_data.username, form_data.password)
    if not admin:
        raise HTTPException(status_code=400, detail="Invalid Credentials")
    acces_token = creat_access_token( data={"sub":admin.email})
    return{
        "access_token":acces_token,
        "token_type": "bearer"
    }

@admin_router.get("/me")    
def read_admin_me(current_admin: Admin = Depends(get_current_admin)):
    return {"username": current_admin.username}


# Review routes
@review_router.post( "/",  response_model=ReviewOut, status_code=status.HTTP_201_CREATED)
def create_review(review_in: ReviewCreate, db: Session = Depends(get_db), current_admin: Admin = Depends(get_current_admin)):
    review = Review(**review_in.model_dump())
    db.add(review)
    db.commit()
    db.refresh(review)
    return review

@review_router.get("/", response_model=list[ReviewOut], status_code=status.HTTP_200_OK)
def get_reviews(db: Session = Depends(get_db)):
    reviews = db.querry(Review).all()
    if not reviews:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,  detail="No reviews found") 
    return reviews

@review_router.get("/review/{project_id}", response_model=ReviewOut)
def get_review_by_project( project_id: UUID,  db: Session = Depends(get_db)):
    review = (
    )
    if not review:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, 
            detail="No review found for that project"
        )
    return review

#Project Route
@project_router.post("/", response_model=ProjectOut, status_code=status.HTTP_200_OK )
async def create_project(
    name: str = Form(...),
    description: str = Form(...),
    owner_name: str = Form(...),
    location: str = Form(...),
    specs: Optional[str] = Form(None),
    gallery: Optional[List[UploadFile]] = File(None),
    before_after_images: Optional[List[UploadFile]] = File(None),
    db: Session = Depends(get_db),
    current_admin: Admin = Depends(get_current_admin),
    s3_uploader: S3ImageUploader = Depends(get_s3_uploader) 
):
       # Handle gallery uploads
    gallery_urls = []
    if gallery:
        gallery_result = s3_uploader.upload_multiple_images(
            files=gallery, 
            folder="gallery", 
            metadata={"description": description}
        )
        # Extract URLs from successful uploads
        gallery_urls = [upload["url"] for upload in gallery_result["successful_uploads"]]

    # Handle before/after uploads
    before_after_urls = []
    if before_after_images:
        before_after_result = s3_uploader.upload_multiple_images(
            files=before_after_images, 
            folder="before_after", 
            metadata={"description": description}
        )
        # Extract URLs from successful uploads
        before_after_urls = [upload["url"] for upload in before_after_result["successful_uploads"]]

    project = Project(
        id=str(uuid4()),
        name=name,
        description=description,
        image_url=gallery_urls[0] if gallery_urls else None,
        owner_name=owner_name,
        location=location,
        specs=specs,
        gallery=gallery_urls,
        before_after_images=before_after_urls
    )
    db.add(project)
    db.commit()
    db.refresh(project)
    return project


@project_router.get("/", response_model=list[ProjectOut], status_code=status.HTTP_200_OK)
def get_all_projects(db: Session = Depends(get_db)):
    projects = db.query(Project).all()
    if not projects:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No projects found")
    return projects


@project_router.get("/{project_id}", response_model=ProjectOut, status_code=status.HTTP_200_OK)
def get_project_by_id(project_id: UUID, db: Session = Depends(get_db)):
    project = db.query(Project).filter(Project.id == project_id).first()
    if not project:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Project not found")
    return project

@project_router.put("/{project_id}", response_model=ProjectOut, status_code=status.HTTP_200_OK)
def update_project(
    project_id: UUID,  
    project_schema: ProjectBase,
    project_files: List[UploadFile] = File(default=[]),
    db: Session = Depends(get_db), current_admin: Admin = Depends(get_current_admin)
    ):
    
    project = db.query(Project).filter(Project.id == project_id).first()
    if not project:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Project not found")
    image_urls = S3ImageUploader.upload_multiple_images(
        files=project_files,
        folder="projects",
        metadata={"description": project_schema.description}
    )
    project.name = project_schema.name
    project.description = project_schema.description
    project.owner_name = project_schema.owner_name
    project.location = project_schema.location
    project.specs = project_schema.specs
    project.updated_at = datetime.utcnow()
    for key, value in project_schema.model_dump().items():
        setattr(project, key, value)
    
    db.commit()
    db.refresh(project)
    return project


@project_router.delete("/{project_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_project(project_id: UUID, db: Session = Depends(get_db), current_admin: Admin = Depends(get_current_admin)):
    project = db.query(Project).filter(Project.id == project_id).first()
    if not project:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Project not found")
    
    db.delete(project)
    db.commit()
    return {"message": "Project deleted successfully"}

#message routes
@message_router.post("/", status_code=201)
def create_message(message: MessageRequest, db: Session = Depends(get_db)):
    db_message = Message(
        sender_name=message.sender_name,
        sender_email=message.sender_email,
        message=message.message,
        sender_phone = message.sender_phone,
        sender_whattsapp = message.sender_whatsapp 
    )
    
    try:
        db.add(db_message)
        db.commit()
        db.refresh(db_message)
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")
    email_status = send_email_notification(message)
    
    return {
        "message_id": db_message.id,
        "status": "success",
        "email_notification": "sent" if email_status else "failed",
    }

@message_router.get("/", response_model=list[MessageRequest], status_code=200)
def get_all_messages(db: Session = Depends(get_db), current_admin: Admin = Depends(get_current_admin)):
    messages = db.query(Message).all()
    if not messages:
        raise HTTPException(status_code=404, detail="No messages found")
    return messages



@project_router.post("/test-s3-upload")
async def test_s3_upload(
    file: UploadFile = File(...),
    current_admin: Admin = Depends(get_current_admin)
):
    """Test endpoint to verify S3 upload functionality"""
    logger.info(f"Testing S3 upload with file: {file.filename}")
    logger.info(f"File size: {file.size}")
    logger.info(f"Content type: {file.content_type}")
    
    try:
        # Test single file upload
        result = get_s3_uploader().upload_image(
            file=file,
            folder="test",
            metadata={"test": "true"}
        )
        logger.info(f"Upload successful: {result}")
        return {
            "status": "success",
            "message": "File uploaded successfully",
            "result": result
        }
    except Exception as e:
        logger.error(f"Upload failed: {str(e)}")
        return {
            "status": "error",
            "message": f"Upload failed: {str(e)}"
        }
