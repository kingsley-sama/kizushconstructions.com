import os
from dotenv import load_dotenv
load_dotenv()
# Load environment variables from .env file
# Database configuration


class settings:
    SECRET_KEY = os.getenv("SECRET_KEY")
    ALGORITHM = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES = 30
    SMTP_SERVER = os.getenv("SMTP_SERVER")
    SMTP_PORT = os.getenv("SMTP_PORT")
    SMTP_USERNAME = os.getenv("SMTP_USERNAME")
    SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")
    NOTIFICATION_EMAIL = os.getenv("NOTIFICATION_EMAIL")
    AWS_SECRET_KEY = os.getenv("AWS_SECRET_KEY")
    AWS_ACCESS_KEY = os.getenv("AWS_ACCESS_KEY")
    AWS_REGION = os.getenv("AWS_REGION")
    AWS_BUCKET_NAME = os.getenv("AWS_BUCKET_NAME")
    AWS_BUCKET_URL = os.getenv("AWS_BUCKET_URL")
    AWS_S3_BUCKET_NAME= os.getenv("AWS_S3_BUCKET_NAME")