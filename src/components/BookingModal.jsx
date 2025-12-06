// src/components/BookingModal.jsx
function BookingModal() {
  return (
    <div
      className="modal fade"
      id="bookingModal"
      tabIndex="-1"
      aria-labelledby="bookingModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="bookingModalLabel">
              Flight Booking
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label className="form-label">From</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Departure city"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">To</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Destination city"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Date</label>
                <input type="date" className="form-control" />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" className="btn btn-primary">
              Search Flights
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingModal;
