from pydantic import BaseModel, EmailStr, Field, conint, HttpUrl
from uuid import UUID
from typing import Optional, List
from datetime import datetime

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: str | None = None

class AdminCreate(BaseModel):
    username:str
    profile_picture: str
    email: EmailStr
    admin_id: int
    password: str

class ReviewCreate(BaseModel):
    review_id: UUID
    owner_id:   UUID
    title:      str = Field(..., max_length=100)
    content:    str
    rating:     conint(ge=1, le=5)

class ReviewOut(BaseModel):
    id:         UUID
    project_id: UUID
    owner_id:   UUID
    title:      str
    content:    str
    rating:     int
    created_at: datetime

    class Config:
        from_attributes = True

class ProjectBase(BaseModel):
    name: str = Field(..., max_length=100)
    description: str = Field(..., max_length=255)
    image_url: Optional[str] 
    owner_name: str = Field(..., max_length=100)
    location: str = Field(..., max_length=100)
    specs: Optional[str] = Field(None, max_length=255)

class ProjectOut(ProjectBase):
    id: UUID
    gallery: Optional[List[str]]
    before_after_images: Optional[List[str]]

class MessageRequest(BaseModel):
    sender_name: str
    sender_email: EmailStr
    sender_phone: str
    sender_whatsapp: str
    message: str
