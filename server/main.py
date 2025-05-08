from fastapi import FastAPI, Request, HTTPException, status
from fastapi.params import Body
from .schema import Message

app = FastAPI()
@app.get("/")    
async def create_user(payload:dict = Body(...)):
    print(payload)
    return {"message": "welcome to the api what informations would like to know"}




@app.post("/messages", status_code=status.HTTP_201_CREATED)
def add_message(message: Message):
    return "message"