// src/pages/Home.jsx

import Details from "../components/Details";
import BookingModal from "../components/BookingModal";

function Home() {
  return (
    <div className="container-sm my-5">
      <div className="bg-body-secondary p-4 rounded">
        <h3 className="fs-1 text-center mb-4">
          Find Your <br /> Perfect <span className="text-warning">Flight</span>
        </h3>

        <p className="text-center lead mb-5">
          Book your next adventure with us. Fast, secure, and affordable flights worldwide.
        </p>

        {/* Buttons */}
        <div className="row align-items-start my-5 justify-content-center">
          <div className="col-md-8">
            <div className="btn-group btn-group-lg d-flex justify-content-center gap-3" role="group">

              {/* Book Now Button */}
              <button
                type="button"
                className="btn btn-outline-primary w-50 rounded-pill"
                data-bs-toggle="modal"
                data-bs-target="#bookingModal"
              >
                Book Now
              </button>

              {/* Show Details Button */}
              <button
                type="button"
                className="btn btn-outline-primary w-50 rounded-pill"
                data-bs-toggle="modal"
                data-bs-target="#details"
              >
                Show Details
              </button>

            </div>
          </div>
        </div>

        {/* Rating Section */}
        <div className="text-center mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-star-fill text-warning mb-2"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>

          <span className="fs-3 fw-bold text-warning">4.1</span>
          <p className="text-muted small">Rated Excellent</p>
        </div>
      </div>

      {/* Flight Cards */}
      <div className="row g-4 mt-5">

        {/* Card 1 */}
        <div className="col-lg-4 col-md-6">
          <div className="card h-100 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop"
              className="card-img-top"
              alt="Delhi to Mumbai"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Delhi → Mumbai</h5>
              <p className="card-text flex-grow-1">
                Direct flight on Dec 5, 2025. 2h 15m duration. Economy class.
              </p>

              <div className="mt-auto">
                <h4 className="text-primary mb-2">₹4500</h4>
                <a
                  className="btn btn-primary w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#bookingModal"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-lg-4 col-md-6">
          <div className="card h-100 shadow-sm">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV1FYxkvqqUW9amDf505yvmaOqezrZaZIyAA&s"
              className="card-img-top"
              alt="Mumbai to Goa"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Mumbai → Goa</h5>
              <p className="card-text flex-grow-1">
                Direct flight tomorrow. 1h 10m duration. Non-stop.
              </p>

              <div className="mt-auto">
                <h4 className="text-primary mb-2">₹2800</h4>
                <a
                  className="btn btn-primary w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#bookingModal"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-lg-4 col-md-6">
          <div className="card h-100 shadow-sm">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3uGqJ_0FaQtJw1PZqFf1ycUxTXr0X6K2FnA&s"
              className="card-img-top"
              alt="Karnataka"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Karnataka</h5>
              <p className="card-text flex-grow-1">
                Direct flight tomorrow. 1h 10m duration. Non-stop.
              </p>

              <div className="mt-auto">
                <h4 className="text-primary mb-2">₹2800</h4>
                <a
                  className="btn btn-primary w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#bookingModal"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Attach All Modals */}
      <Details />
      <BookingModal />

    </div>
  );
}

export default Home;
