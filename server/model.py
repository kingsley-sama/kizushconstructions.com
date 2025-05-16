from sqlalchemy.orm import declarative_base
from sqlalchemy import (Column, Integer, 
    String, ForeignKey, DateTime,
    Text, UniqueConstraint, JSON
)
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID
from db import Base
from datetime import datetime
import uuid


class Admin(Base):
    __tablename__ = 'admins'
    id = Column(Integer, primary_key=True)
    username = Column(String(50), unique=True, nullable=False)
    hashed_password = Column(String(100), nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    profile_picture = Column(String(255), nullable=True)
    admin_id = Column(Integer, nullable=True)


class Project(Base):
    __tablename__ = 'projects'
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String(100), nullable=False)
    description = Column(String(255), nullable=False)
    image_url = Column(String(255), nullable=False)
    owner_name = Column(String(100), nullable=False)
    location = Column(String(100), nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
    specs = Column(String(255), nullable=True)
    
    gallery = Column(JSON, nullable=True) 
    before_after_images = Column(JSON, nullable=True)

    review = relationship(
        "Review",
        back_populates="project",
        uselist=False,
        cascade="all, delete-orphan",
        lazy="joined"
    )

# Review model
class Review(Base):
    __tablename__ = "reviews"
    __table_args__ = (
        UniqueConstraint('project_id', name='uq_review_project'),
    )
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    project_id = Column(UUID(as_uuid=True), ForeignKey("projects.id"),unique=True, nullable=False)
    reviewer_name  = Column(String(100), nullable=False)
    title      = Column(String(100), nullable=False)
    content    = Column(Text, nullable=False)
    rating     = Column(Integer, nullable=False) 
    created_at = Column(DateTime(timezone=True), server_default=func.now())  


