This project is a simplified implementation of the Calendly Integration module from the Medical Appointment Scheduling Agent assessment.
It demonstrates how to:

Fetch available time slots

Book new appointments

Display booked slots

Connect a FastAPI backend with a React + TypeScript frontend

The backend simulates Calendly functionality using mock APIs and stores appointments in memory (or optionally in a JSON file).

Component       	Technology

Frontend        	Next.js (React + TypeScript)
Backend	            FastAPI (Python 3.10+)
HTTP                Client	Axios
Styling	            Tailwind CSS
Data Storage (mock)	Python list / JSON file


🚀 Setup Instructions
🐍 Backend Setup (FastAPI)

1️⃣ Navigate to the backend folder:

python -m venv venv
cd backend
source venv/bin/activate     # (Windows: venv\Scripts\activate)
pip install fastapi uvicorn pydantic


2️⃣ Run the server:

uvicorn backend.main:app --reload


3️⃣ API will be available at:

http://localhost:8000


Frontend Setup (React.js + TypeScript + Vite)

1️⃣ Navigate to the frontend folder(open in new terminal):

cd frontend
npm install
npm install axios @types/axios


2️⃣ Run the frontend app:

npm run dev


3️⃣ Open browser:

http://localhost:5173 


🧠 Features Implemented
✅ 1. Fetch Available Slots

Endpoint:

GET /api/calendly/availability?date=YYYY-MM-DD


Response:

[
  { "start_time": "09:00", "end_time": "09:30", "available": true },
  { "start_time": "09:30", "end_time": "10:00", "available": false }
]

✅ 2. Book Appointment

Endpoint:

POST /api/calendly/book


Request Body:

{
  "appointment_type": "consultation",
  "date": "2025-10-31",
  "start_time": "10:00",
  "patient_name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "reason": "Routine check-up"
}


Response:

{
  "booking_id": "APPT-001",
  "status": "confirmed",
  "confirmation_code": "ABC123",
  "details": {
    "date": "2025-10-31",
    "start_time": "10:00",
    "appointment_type": "consultation"
  }
}

🖥️ Frontend (Chat Interface)

Enter a date

Fetch available slots

Click a slot to book

Display confirmation with booking ID and code

File: ChatInterface.tsx
Written in TypeScript, using Axios for API calls and styled with Tailwind CSS.

🖥️ Frontend (Chat Interface)

Enter a date

Fetch available slots

Click a slot to book

Display confirmation with booking ID and code

File: ChatInterface.tsx
Written in TypeScript, using Axios for API calls and styled with Tailwind CSS.