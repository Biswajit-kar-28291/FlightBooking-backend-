import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    aadhaar: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleRegister = async () => {
    for (let key in formData) {
      if (!formData[key]) {
        alert("Please fill all fields");
        return;
      }
    }

    try {
      await API.post("/auth/register", formData);
      alert("Registration successful");
      navigate("/");
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4 my-5" style={{ width: "450px" }}>
        <h3 className="text-center mb-4">Register</h3>

        <input className="form-control mb-2" name="firstName" placeholder="First Name" onChange={handleChange} />
        <input className="form-control mb-2" name="lastName" placeholder="Last Name" onChange={handleChange} />
        <input className="form-control mb-2" type="number" name="age" placeholder="Age" onChange={handleChange} />

        <select className="form-select mb-2" name="gender" onChange={handleChange}>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <input className="form-control mb-2" name="phone" placeholder="Phone Number" onChange={handleChange} />
        <input className="form-control mb-2" type="email" name="email" placeholder="Email" onChange={handleChange} />
        <textarea className="form-control mb-2" name="address" placeholder="Address" onChange={handleChange}></textarea>
        <input className="form-control mb-2" name="aadhaar" placeholder="Aadhaar Number" onChange={handleChange} />
        <input className="form-control mb-3" type="password" name="password" placeholder="Password" onChange={handleChange} />

        <button className="btn btn-primary w-100" onClick={handleRegister}>
          Register
        </button>

        <p className="text-center mt-3">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}
