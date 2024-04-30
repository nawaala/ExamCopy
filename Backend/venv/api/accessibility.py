from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import json

router = APIRouter()

# Pydantic model for the accessibility options
class AccessibilityOptions(BaseModel):
    options: str  

@router.post("/accessibility")
async def save_accessibility_options(options: AccessibilityOptions):
    # Save the accessibility options to the database
    with open(r"C:\Users\CAT0249\exam\Backend\venv\db\users.json", 'w') as f:
        # write to file
        json.dump(options.dict(), f)
    return {"message": "Options saved successfully", "options": options.dict()}
