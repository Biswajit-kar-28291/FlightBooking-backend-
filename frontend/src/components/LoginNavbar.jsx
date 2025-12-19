import { Link } from "react-router-dom";

function LoginNavbar() {
  return (
    <nav className="navbar navbar-light bg-light shadow-sm">
      <div className="container-sm">
        <Link className="navbar-brand fw-bold" to="/">
          Flight Booking
        </Link>
      </div>
    </nav>
  );
}

export default LoginNavbar;
