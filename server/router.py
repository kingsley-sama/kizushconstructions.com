from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from middleware import get_db, get_admin_by_email, authenticate_admin, hash_password, creat_access_token, get_current_admin
from fastapi.security import OAuth2PasswordRequestForm
from uuid import UUID
from model import Review, Admin, Project
from uuid import uuid4
from datetime import datetime
from schema import AdminCreate, ReviewCreate, ReviewOut, ProjectBase, ProjectOut
from schema import(
    ReviewCreate,
    ReviewOut
)
from s3 import S3ImageUploader


admin_router = APIRouter()
review_router = APIRouter()
project_router = APIRouter()
# Admin routes
@admin_router.post("/register")
def create_admins(admin:AdminCreate, db: Session = Depends(get_db)):
    db_admin = db.query(Admin).filter(Admin.email ==  admin.email)
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

@admin_router.post("/token")
def login_admin(form_data: OAuth2PasswordRequestForm = Depends(),db: Session = Depends(get_db)):
    admin = authenticate_admin(db, form_data.email, form_data.password)
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
async def create_project(project_schema:ProjectBase,  db: Session = Depends(get_db), current_admin: Admin = Depends(get_current_admin)):
    image_urls = S3ImageUploader.upload_multiple_images(
        files=project_schema.gallery,
        folder="projects",
        metadata={"description": project_schema.description}
    )
    project = Project(
        id=uuid4(),
        name=project_schema.name,
        description=project_schema.description,
        image_url=project_schema.image_url,
        owner_name=project_schema.owner_name,
        location=project_schema.location,
        specs=project_schema.specs,
        gallery=image_urls,
        before_after_images=project_schema.before_after_images
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
def update_project(project_id: UUID, project_schema: ProjectBase, db: Session = Depends(get_db), current_admin: Admin = Depends(get_current_admin)):
    project = db.query(Project).filter(Project.id == project_id).first()
    if not project:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Project not found")
    image_urls = S3ImageUploader.upload_multiple_images(
        files=project_schema.gallery,
        folder="projects",
        metadata={"description": project_schema.description}
    )
    project.image_url = project_schema.image_url
    project.name = project_schema.name
    project.description = project_schema.description
    project.owner_name = project_schema.owner_name
    project.location = project_schema.location
    project.specs = project_schema.specs
    project.gallery = image_urls
    project.before_after_images = project_schema.before_after_images
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

@project_router.delete("/delete/{image_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_image(image_id: int, db: Session = Depends(get_db), current_admin: Admin = Depends(get_current_admin)):
    image = db.query(Project).filter(Project.id == image_id).first()
    if not image:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Image not found")
    
    db.delete(image)
    db.commit()
    return {"message": "Image deleted successfully"}