from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api import users, accessibility

app = FastAPI()


origins = [
    "http://localhost",
    "https://localhost",
    "http://localhost:3000",
    "https://localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(users.router, prefix="/users", tags=["Users"])

app.include_router(accessibility.router, prefix="/accessibility", tags=["Accessibility"])

@app.get("/")
async def main():
    return {"message": "It is working"}

