import { useState, useEffect, useRef } from "react";
import API from "../services/api";

function BookingModal({ onBooked }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);

  const modalRef = useRef(null);

  // Initialize Bootstrap modal
  useEffect(() => {
    if (modalRef.current) {
      window.bootstrap.Modal.getOrCreateInstance(modalRef.current);
    }
  }, []);

  const handleBooking = async () => {
    if (!from || !to || !date) {
      alert("Please fill all fields ❌");
      return;
    }

    if (loading) return;

    setLoading(true);

    try {
      const res = await API.post("/bookings", {
        from,
        to,
        date,
      });

      // ✅ SUCCESS CHECK (FIXED)
      if (res.status === 200 || res.status === 201) {
        // Notify parent if needed
        if (onBooked) {
          onBooked(res.data);
        }

        // Clear inputs
        setFrom("");
        setTo("");
        setDate("");

        // Hide modal
        const modal = window.bootstrap.Modal.getInstance(modalRef.current);
        modal?.hide();

        alert("Booking successful ✅");
      } else {
        alert("Booking failed ❌");
      }
    } catch (error) {
      console.error("Booking error:", error);
      alert("Booking failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="modal fade"
      id="bookingModal"
      tabIndex="-1"
      ref={modalRef}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Flight Booking</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div className="modal-body">
            <input
              className="form-control mb-2"
              placeholder="From"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />

            <input
              className="form-control mb-2"
              placeholder="To"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />

            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="modal-footer">
            <button
              className="btn btn-primary w-100"
              onClick={handleBooking}
              disabled={loading}
            >
              {loading ? "Booking..." : "Book Flight"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingModal;
