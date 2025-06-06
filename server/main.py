from db import engine
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.params import Body
from model import *
from router import(
    admin_router, 
    review_router, 
    project_router, 
    message_router,
    auth_router
)

app = FastAPI()
Base.metadata.create_all(bind=engine)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
app.include_router(admin_router, prefix="/admin", tags=["admin"])
app.include_router(review_router, prefix="/review", tags=["review"])
app.include_router(project_router, prefix="/project", tags=["project"])
app.include_router(message_router, prefix="/message", tags=["message"])
app.include_router(auth_router, prefix="", tags=["auth"])

app.get("/")
def root():
    return {"message": "This is the backend for kizushconstructions.com"}


if __name__ == "__main__":
    import uvicorn

    port = int(os.environ.get("PORT", 8000))  # fallback to 8000 locally
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=True)