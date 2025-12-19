function AdvancedSearchModal({ show, onClose, searchData }) {
  if (!show) return null;

  return (
    <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Available Flights</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body">
            <p>
              <strong>{searchData?.from}</strong> → <strong>{searchData?.to}</strong>  
              <br />Date: {searchData?.date}
            </p>

            {/* Flight Option */}
            <div className="card p-3 mb-3">
              <h6>IndiGo Airlines</h6>
              <p>Economy | 2h 10m</p>
              <h5 className="text-primary">₹4,200</h5>
              <button className="btn btn-success">
                Book This Flight
              </button>
            </div>

            <div className="card p-3">
              <h6>Air India</h6>
              <p>Business | 2h 05m</p>
              <h5 className="text-primary">₹6,800</h5>
              <button className="btn btn-success">
                Book This Flight
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvancedSearchModal;
