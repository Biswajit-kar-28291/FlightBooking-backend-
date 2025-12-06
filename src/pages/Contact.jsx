
function Contact() {
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
  return (
    <div className="container-sm my-5 bg-body-secondary p-4 rounded text-center">
    
    

        {/* Heading */}
        <h1 className="fw-bold">
          Get In <span style={{ color: "#f7c843" }}>Touch</span>
        </h1>

        <p className="mb-5 fs-5">
          We’re here to help! Contact us for any questions or support.
        </p>

        {/* Buttons */}
        <div className="d-flex justify-content-center gap-4 mb-5 flex-wrap">
          <button type="button" class="btn btn-outline-primary rounded-pill px-5 py-3" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="+91 7029270731  this is our whatssApp number.">
            Send Message
          </button>

          <button type="button" class="btn btn-outline-primary rounded-pill px-5 py-3" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="bkar28291@gmail.com  this is our Eamil Address.">
            Email Us
          </button>
        </div>

        {/* Rating */}
        <div className="text-center">
          <i
            className="bi bi-star-fill"
            style={{ color: "#f7c843", fontSize: "40px" }}
          ></i>
          <p className="mt-2 mb-0 fs-3 fw-semibold">4.8</p>
          <p className="text-muted">Customer Satisfaction Score</p>
        </div>

        


        </div>

        
        

      
  );
}

export default Contact;
