import { Link, NavLink } from "react-router-dom";
import BookingModal from "./BookingModal";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-sm">
          <Link className="navbar-brand" to="/">
            <strong>Flight Booking</strong>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink end className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-warning ms-2"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#bookingModal"
                >
                  Book Here
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Render modal component */}
      <BookingModal />
    </>
  );
}

export default Navbar;
