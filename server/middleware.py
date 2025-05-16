from db import SessionLocal
from passlib.context import CryptContext
from datetime import datetime, timedelta
from jose import jwt
from fastapi import Depends, HTTPException, status
from jose import JWTError
from fastapi.security import OAuth2PasswordBearer
from fastapi import Depends, HTTPException, status, UploadFile
from sqlalchemy.orm import Session
from model import Admin
from config import settings


pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
# get db
def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()

# Hash password
def hash_password(password: str):
    return pwd_context.hash(password)

## Verify password
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def creat_access_token(data: dict, expires_delta: int = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=15))
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode,settings.SECRET_KEY, algorithm=settings.ALGORITHM)
    return encoded_jwt

def get_admin_by_email(db: Session, email: str = None):
    return db.query(Admin).filter(Admin.email == email).first()

def authenticate_admin(db: Session, email: str = None, password: str = None):
    admin = get_admin_by_email(db, email)
    if not admin:
        return False
    if not verify_password(password, admin.hashed_password):
        return False
    return admin

def get_current_admin(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
    admin = get_admin_by_email(db, email=email)
    if admin is None:
        raise credentials_exception
    return admin

