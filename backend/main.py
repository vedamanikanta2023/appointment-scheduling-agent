from fastapi import FastAPI
from api import calendly_integration
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Mock Calendly API")

# Enable CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # use specific domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routes
app.include_router(calendly_integration.router)

@app.get("/")
def root():
    return {"message": "Calendly Mock API running"}