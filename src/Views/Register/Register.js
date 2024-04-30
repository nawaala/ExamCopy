import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import './Register.css'
import Footer from "../../Components/Footer/Footer";


const NavButton = ({text, path}) => {
  const navigate = useNavigate()
  return(
      <button className='nav-button-registration' onClick={() => navigate(path)}>
          {text}
      </button>
  )
}


const Register = () => {
  // State to hold form data for email, password, and confirmPassword
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // State to hold validation errors for form fields
  const [errors, setErrors] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Update formData state with new values
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};

    

    if (!formData.email.trim()) {
      // If email field is left blank then give an error message
      validationErrors.email = "Email is required";
      //email feild should contain '@' and a '.', if not an error message is given to the user 
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }

    if (!formData.password.trim()) {
      // if  password field is left blank then give an error message
      validationErrors.password = "Password is required";
      // the passowrd input field should be equal to or above 8 charcaters
    } else if (formData.password.length < 8) {
      validationErrors.password = "Password should be at least 8 characters";
    }
      // the password field and confirm password field should match
    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const dataToSend = {
          email: formData.email,
          password: formData.password,
        };

        const response = await axios.post(
          "http://localhost:8000/users/register",
          dataToSend
        );
        //  store user data in local storage
        localStorage.setItem("userData", JSON.stringify(response.data));
        navigate("/"); 
      } catch (err) {
        console.error(err);
        setError(err.response?.data?.detail || "An unknown error occurred");
      }
    }
  }

  return (
    <div className="register-container">
      <Header/>
      {/* The registration form */}
      <div className="form-container">
        <h2>Register</h2>
        {error && <div className="error-message">{error}</div>}
        <form className="Register-form"onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="register-label">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="password" className="register-label">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword" className="register-label">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <div className="error">{errors.confirmPassword}</div>
            )}
          </div>
          <button type="submit" className="submit-registration" >Register</button>
          <p>Already have an account? Click the button below </p><NavButton  text="Login" path={"/Login"}/>
        
        </form>
        <br/>
        <br/>
        <br/>
        <br/>
        <Footer/>
      </div>
    </div>
  );
};

export default Register;