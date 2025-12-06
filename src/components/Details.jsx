import { useEffect } from "react";

function Details() {
  useEffect(() => {
    // Destroy existing popovers before creating new ones (avoid auto-open bug)
    document
      .querySelectorAll(".popover")
      .forEach((popover) => popover.remove());

    // Initialize Popovers
    const popoverTriggerList = document.querySelectorAll(
      '[data-bs-toggle="popover"]'
    );

    popoverTriggerList.forEach((el) => {
      new window.bootstrap.Popover(el, {
        trigger: "click",     // IMPORTANT: only show on click
        html: true,
      });
    });

    // Initialize Tooltips
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );

    tooltipTriggerList.forEach((el) => {
      new window.bootstrap.Tooltip(el);
    });
  }, []); // runs only once

  return (
    <div className="modal fade" id="details" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">Flight Details</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div className="modal-body">
            <div className="d-flex justify-content-between">
                <div className="d-flex gap-2">
                <p>
                <button
                    className="btn btn-secondary"
                    data-bs-toggle="popover"
                    title="Seat Info"
                    data-bs-content="this place blank"
                >
                    01
                </button>
                </p>

                <p>
                <button
                    className="btn btn-secondary"
                    data-bs-toggle="popover"
                    title="Seat info"
                    data-bs-content="this place blank"
                >
                    02
                </button>
                </p>
                <p>
                <button
                    className="btn btn-secondary"
                    data-bs-toggle="popover"
                    title="Seat info"
                    data-bs-content="this place blank"
                >
                    03
                </button>
                </p>
                </div>
                <div className="d-flex gap-2 ">
                <p>
                <button
                    className="btn btn-secondary"
                    data-bs-toggle="popover"
                    title="Seat Info"
                    data-bs-content="this place blank"
                >
                    04
                </button>
                </p>

                <p>
                <button
                    className="btn btn-secondary"
                    data-bs-toggle="popover"
                    title="Seat info"
                    data-bs-content="this place blank"
                >
                    05
                </button>
                </p>
                <p>
                <button
                    className="btn btn-secondary"
                    data-bs-toggle="popover"
                    title="Seat info"
                    data-bs-content="this place blank"
                >
                    06
                </button>
                </p>
                </div>
            </div>
            <div className="d-flex justify-content-between">
                <div className="d-flex gap-2">
                <p>
                <button
                    className="btn btn-secondary"
                    data-bs-toggle="popover"
                    title="Seat Info"
                    data-bs-content="this place blank"
                >
                    07
                </button>
                </p>

                <p>
                <button
                    className="btn btn-secondary"
                    data-bs-toggle="popover"
                    title="Seat info"
                    data-bs-content="this place blank"
                >
                    08
                </button>
                </p>
                <p>
                <button
                    className="btn btn-warning"
                    data-bs-toggle="popover"
                    title="Seat info"
                    data-bs-content="Biswajit Kar is going mumbai to goa"
                >
                    09
                </button>
                </p>
                </div>
                <div className="d-flex gap-2 ">
                <p>
                <button
                    className="btn btn-secondary"
                    data-bs-toggle="popover"
                    title="Seat Info"
                    data-bs-content="this place blank"
                >
                    10
                </button>
                </p>

                <p>
                <button
                    className="btn btn-warning"
                    data-bs-toggle="popover"
                    title="Seat info"
                    data-bs-content="abcd is going x to z"
                >
                    11
                </button>
                </p>
                <p>
                <button
                    className="btn btn-secondary"
                    data-bs-toggle="popover"
                    title="Seat info"
                    data-bs-content="this place blank"
                >
                    12
                </button>
                </p>
                </div>
            </div>
            <div className="d-flex justify-content-between">
                <div className="d-flex gap-2">
                <p>
                <button
                    className="btn btn-warning"
                    data-bs-toggle="popover"
                    title="Seat info"
                    data-bs-content="Biswajit Kar is going mumbai to goa"
                >
                    13
                </button>
                </p>

                <p>
                <button
                    className="btn btn-secondary"
                    data-bs-toggle="popover"
                    title="Seat info"
                    data-bs-content="this place blank"
                >
                    14
                </button>
                </p>
                <p>
                <button
                    className="btn btn-secondary"
                    data-bs-toggle="popover"
                    title="Seat info"
                    data-bs-content="this place blank"
                >
                    15
                </button>
                </p>
                </div>
                <div className="d-flex gap-2 ">
                <p>
                <button
                    className="btn btn-warning"
                    data-bs-toggle="popover"
                    title="Seat info"
                    data-bs-content="Biswajit Kar is going mumbai to goa"
                >
                    16
                </button>
                </p>

                <p>
                <button
                    className="btn btn-secondary"
                    data-bs-toggle="popover"
                    title="Seat info"
                    data-bs-content="this place blank"
                >
                    17
                </button>
                </p>
                <p>
                <button
                  className="btn btn-warning"
                    data-bs-toggle="popover"
                    title="Seat info"
                    data-bs-content="Biswajit Kar is going mumbai to goa"
                >
                    18
                </button>
                </p>
                </div>
            </div>
            <div className="d-flex justify-content-between">
                <div className="d-flex gap-2">
                <p>
                <button
                    className="btn btn-secondary"
                    data-bs-toggle="popover"
                    title="Seat Info"
                    data-bs-content="this place blank"
                >
                    19
                </button>
                </p>

                <p>
                <button
                    className="btn btn-secondary"
                    data-bs-toggle="popover"
                    title="Seat info"
                    data-bs-content="this place blank"
                >
                    20
                </button>
                </p>
                <p>
                <button
                   className="btn btn-warning"
                    data-bs-toggle="popover"
                    title="Seat info"
                    data-bs-content="Biswajit Kar is going mumbai to goa"
                >
                    21
                </button>
                </p>
                </div>
                <div className="d-flex gap-2 ">
                <p>
                <button
                    className="btn btn-secondary"
                    data-bs-toggle="popover"
                    title="Seat Info"
                    data-bs-content="this place blank"
                >
                    22
                </button>
                </p>

                <p>
                <button
                    className="btn btn-warning"
                    data-bs-toggle="popover"
                    title="Seat info"
                    data-bs-content="Biswajit Kar is going mumbai to goa"
                >
                    23
                </button>
                </p>
                <p>
                <button
                    className="btn btn-secondary"
                    data-bs-toggle="popover"
                    title="Seat info"
                    data-bs-content="this place blank"
                >
                    24
                </button>
                </p>
                </div>
            </div>
            <div className="d-flex justify-content-between">
                <div className="d-flex gap-2">
                <p>
                <button
                    className="btn btn-secondary"
                    data-bs-toggle="popover"
                    title="Seat Info"
                    data-bs-content="this place blank"
                >
                    25
                </button>
                </p>

                <p>
                <button
                    className="btn btn-secondary"
                    data-bs-toggle="popover"
                    title="Seat info"
                    data-bs-content="this place blank"
                >
                    26
                </button>
                </p>
                <p>
                <button
                    className="btn btn-secondary"
                    data-bs-toggle="popover"
                    title="Seat info"
                    data-bs-content="this place blank"
                >
                    27
                </button>
                </p>
                </div>
                <div className="d-flex gap-2 ">
                <p>
                <button
                    className="btn btn-secondary"
                    data-bs-toggle="popover"
                    title="Seat Info"
                    data-bs-content="this place blank"
                >
                    28
                </button>
                </p>

                <p>
                <button
                    className="btn btn-secondary"
                    data-bs-toggle="popover"
                    title="Seat info"
                    data-bs-content="this place blank"
                >
                    29
                </button>
                </p>
                <p>
                <button
                    className="btn btn-secondary"
                    data-bs-toggle="popover"
                    title="Seat info"
                    data-bs-content="this place blank"
                >
                    30
                </button>
                </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
