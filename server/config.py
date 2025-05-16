import os
from dotenv import load_dotenv
load_dotenv()
# Load environment variables from .env file
# Database configuration


class settings:
    SECRET_KEY = os.getenv("SECRET_KEY")
    ALGORITHM = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES = 30