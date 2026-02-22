import os
import base64
from dotenv import load_dotenv
from fastapi import APIRouter, HTTPException, UploadFile, File
from pydantic import BaseModel
from google import genai

# Initialize FastAPI Router
router = APIRouter()

# Load environment variables
load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if not GEMINI_API_KEY:
    raise ValueError("GEMINI_API_KEY is not set in environment variables")

# Create Gemini client (NEW SDK)
client = genai.Client(api_key=GEMINI_API_KEY)


# ----------------------------
# Pydantic Model
# ----------------------------
class SymptomRequest(BaseModel):
    symptoms: str


# ----------------------------
# Symptom-Based Prediction
# ----------------------------
@router.post("/predict/symptoms")
async def predict_disease_from_symptoms(request: SymptomRequest):
    """
    Predicts disease based on symptoms using Gemini AI.
    """
    prompt = f"""
    You are a medical assistant.
    Given the symptoms: {request.symptoms},
    list possible diseases with a short explanation.
    """

    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt,
        )

        return {"predicted_disease": response.text}

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating response: {str(e)}")


# ----------------------------
# Image-Based Prediction
# ----------------------------
@router.post("/predict/image")
async def predict_disease_from_image(file: UploadFile = File(...)):
    """
    Predicts disease or injury based on an uploaded image using Gemini AI.
    """
    try:
        image_data = await file.read()

        response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=[
                "Identify any medical condition, disease, or injury in this image.",
                {
                    "mime_type": file.content_type,
                    "data": image_data,
                },
            ],
        )

        return {"predicted_disease": response.text}

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing image: {str(e)}")
