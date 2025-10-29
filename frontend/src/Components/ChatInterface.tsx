import* as React from "react";
import axios from "axios";

interface TimeSlot {
  start_time: string;
  end_time: string;
  available: boolean;
}

interface BookingResponse {
  booking_id: string;
  status: string;
  confirmation_code: string;
  details: {
    date: string;
    start_time: string;
    appointment_type: string;
    patient_name: string;
    email: string;
    phone: string;
    reason: string;
  };
}

const ChatInterface: React.FC = () => {
  const [date, setDate] = React.useState<string>("");
  const [slots, setSlots] = React.useState<TimeSlot[]>([]);
  const [selectedSlot, setSelectedSlot] = React.useState<TimeSlot | null>(null);
  const [confirmation, setConfirmation] = React.useState<BookingResponse | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const BASE_URL = "http://localhost:8000";

  const fetchSlots = async () => {
    if (!date) {
      setError("Please select a date first.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get<TimeSlot[]>(`${BASE_URL}/api/calendly/availability`, {
        params: { date },
      });
      setSlots(res.data);
    } catch (err) {
      setError("Failed to fetch availability. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const bookSlot = async (slot: TimeSlot) => {
    setSelectedSlot(slot);
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post<BookingResponse>(`${BASE_URL}/api/calendly/book`, {
        appointment_type: "consultation",
        date,
        start_time: slot.start_time,
        patient_name: "John Doe",
        email: "john@example.com",
        phone: "1234567890",
        reason: "Routine check-up",
      });
      setConfirmation(res.data);
    } catch (err) {
      setError("Booking failed. Try another slot.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto font-sans">
      <h1 className="text-xl font-bold mb-4 text-center">Book Your Appointment</h1>

      {error && <div className="text-red-500 mb-3 text-sm">{error}</div>}

      {!confirmation ? (
        <>
          <div className="mb-4" style={{marginBottom:10}}>
            <label className="block text-sm font-medium mb-1">{"Select Date :"} </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border p-2 w-full rounded-md"
            />
          </div>

          <button
            onClick={fetchSlots}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md w-full mb-4 transition-colors"
          >
            {loading ? "Loading..." : "Check Availability"}
          </button>

          {slots.length > 0 && (
            <div>
              <h2 className="font-semibold mb-2">Available Slots:</h2>
              <div className="flex flex-col gap-2">
                {slots
                  .filter((slot) => slot.available)
                  .map((slot, i) => (
                    <button
                      key={i}
                      onClick={() => bookSlot(slot)}
                      disabled={loading}
                      className={`border p-2 rounded-md transition-colors ${
                        selectedSlot?.start_time === slot.start_time
                          ? "bg-blue-100 border-blue-400"
                          : "hover:bg-blue-50"
                      }`}
                    >
                      {slot.start_time} - {slot.end_time}
                    </button>
                  ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="p-4 border rounded bg-green-100 text-center">
          <h2 className="text-lg font-semibold mb-2">✅ Booking Confirmed!</h2>
          <p>
            <strong>ID:</strong> {confirmation.booking_id}
          </p>
          <p>
            <strong>Date:</strong> {confirmation.details.date}
          </p>
          <p>
            <strong>Time:</strong> {confirmation.details.start_time}
          </p>
          <p>
            <strong>Confirmation Code:</strong> {confirmation.confirmation_code}
          </p>
        </div>
      )}
    </div>
  );
};

export default ChatInterface;