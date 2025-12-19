import { useEffect, useState } from "react";
import API from "../services/api";
import { jsPDF } from "jspdf";

function Details() {
  const [bookings, setBookings] = useState([]);

  // Fetch all bookings for logged-in user
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await API.get("/bookings");

        // Latest booking first
        setBookings(res.data.reverse());
      } catch (err) {
        console.error("Failed to fetch bookings");
      }
    };

    fetchBookings();
  }, []);

  // Download ticket as PDF
  const downloadPDF = (ticket) => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("✈ Flight Ticket", 20, 20);
    doc.setFontSize(12);
    doc.text(`From: ${ticket.fromCity}`, 20, 40);
    doc.text(`To: ${ticket.toCity}`, 20, 50);
    doc.text(`Date: ${ticket.travelDate}`, 20, 60);
    doc.text(`Seat: ${ticket.seatNumber}`, 20, 70);
    doc.text(`Status: Confirmed`, 20, 80);
    doc.save(`Ticket-${ticket.id}.pdf`);
  };

  return (
    <div className="modal fade" id="details" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">My Tickets</h5>
            <button
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          {/* Scrollable area */}
          <div
            className="modal-body"
            style={{ maxHeight: "400px", overflowY: "auto" }}
          >
            {bookings.length === 0 ? (
              <p className="text-center text-muted">No tickets booked yet</p>
            ) : (
              bookings.map((ticket, index) => (
                <div
                  key={ticket.id}
                  className="border rounded p-3 mb-3 shadow-sm"
                >
                  <h6 className="text-primary">
                    ✈ Ticket #{bookings.length - index} (Seat {ticket.seatNumber})
                  </h6>

                  <p><strong>From:</strong> {ticket.fromCity}</p>
                  <p><strong>To:</strong> {ticket.toCity}</p>
                  <p><strong>Date:</strong> {ticket.travelDate}</p>
                  <p>
                    <strong>Status:</strong>{" "}
                    <span className="text-success">Confirmed</span>
                  </p>

                  <div className="d-flex justify-content-end">
                    {/* Delete Ticket */}
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={async () => {
                        if (window.confirm("Delete this ticket?")) {
                          await API.delete(`/bookings/${ticket.id}`);
                          setBookings(bookings.filter(b => b.id !== ticket.id));
                        }
                      }}
                    >
                      Delete
                    </button>

                    {/* Download PDF */}
                    <button
                      className="btn btn-sm btn-info ms-2"
                      onClick={() => downloadPDF(ticket)}
                    >
                      Download PDF
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Details;
