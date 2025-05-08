from pydantic import BaseModel, EmailStr
from typing import Optional
class User(BaseModel):
    name: str
    email: EmailStr
    password: str
    


class Message(BaseModel):
    user_id: str
    name: str
    email: EmailStr
    title: str
    description: Optional[str]
    phone: Optional[int]
    