from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from contextlib import asynccontextmanager
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    yield
    # Shutdown
    try:
        client.close()
        logger.info("MongoDB connection closed")
    except Exception as e:
        logger.error(f"Error closing MongoDB connection: {e}")


app = FastAPI(title="Association Fête du 15 août — Bramans", lifespan=lifespan)
api_router = APIRouter(prefix="/api")


# ---------- Models ----------
class ContactCreate(BaseModel):
    nom: str = Field(..., min_length=1, max_length=120)
    email: EmailStr
    telephone: Optional[str] = Field(default=None, max_length=40)
    sujet: str = Field(..., min_length=1, max_length=200)
    message: str = Field(..., min_length=1, max_length=4000)
    benevole: bool = False  # True = inscription bénévole

class Contact(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    nom: str
    email: str
    telephone: Optional[str] = None
    sujet: str
    message: str
    benevole: bool = False
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Bienvenue à la Fête du 15 août à Bramans"}


@api_router.post("/contact", response_model=Contact)
async def create_contact(payload: ContactCreate):
    try:
        doc = {
            **payload.model_dump(),
            "id": str(uuid.uuid4()),
            "created_at": datetime.now(timezone.utc).isoformat()
        }
        await db.contacts.insert_one(doc)
        return doc
    except Exception as e:
        logger.error(f"Error creating contact: {e}")
        raise HTTPException(status_code=500, detail="Failed to create contact")


@api_router.get("/contacts", response_model=List[Contact])
async def list_contacts(limit: int = 100):
    """List all contacts (SECURITY: Consider adding authentication)"""
    try:
        items = await db.contacts.find({}, {"_id": 0}).sort("created_at", -1).to_list(limit)
        return items
    except Exception as e:
        logger.error(f"Error fetching contacts: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch contacts")


@api_router.get("/health")
async def health():
    return {"status": "ok", "ts": datetime.now(timezone.utc).isoformat()}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)