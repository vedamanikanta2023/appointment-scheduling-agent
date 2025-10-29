from fastapi import APIRouter, HTTPException, Query
from datetime import datetime, timedelta
from pydantic import BaseModel
from typing import List

router = APIRouter()

# --- Mock data ---
appointments = []  # store booked appointments in memory

class TimeSlot(BaseModel):
    start_time: str
    end_time: str
    available: bool

class Booking(BaseModel):
    appointment_type: str
    date: str
    start_time: str
    patient_name: str
    email: str
    phone: str
    reason: str

# GET /api/calendly/availability
@router.get("/api/calendly/availability", response_model=List[TimeSlot])
def get_availability(date: str = Query(...), appointment_type: str = Query("consultation")):
    """
    Mock availability - 30min slots from 9 AM to 5 PM, skip booked ones.
    """
    start_hour = 9
    end_hour = 17
    slots = []
    for hour in range(start_hour, end_hour):
        start = f"{hour:02d}:00"
        end = f"{hour:02d}:30"
        slot_taken = any(a['date'] == date and a['start_time'] == start for a in appointments)
        slots.append({
            "start_time": start,
            "end_time": end,
            "available": not slot_taken
        })
    return slots

# POST /api/calendly/book
@router.post("/api/calendly/book")
def book_appointment(booking: Booking):
    """
    Mock booking endpoint - simulates Calendly booking creation.
    """
    # Check if already booked
    for a in appointments:
        if a["date"] == booking.date and a["start_time"] == booking.start_time:
            raise HTTPException(status_code=400, detail="Slot already booked")
    print(appointments)
    booking_id = f"APPT-{len(appointments)+1:03d}"
    appointments.append(booking.dict())
    return {
        "booking_id": booking_id,
        "status": "confirmed",
        "confirmation_code": "ABC123",
        "details": booking
    }