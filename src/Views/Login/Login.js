import { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const NavButton = ({text, path}) => {
  const navigate = useNavigate()
  return(
      <button className='nav-button-login' onClick={() => navigate(path)}>
          {text}
      </button>
  )
}
const Login = () => {
  // State to store form data for email and password
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // State to store form validation errors
  const [errors, setErrors] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Event handler to update formData as user types in the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {}; // Collect validation errors

    if (!formData.email.trim()) {
      //if email field is left blank then give an error message
      validationErrors.email = "Email is required";
      //email feild should contain '@' and a '.', if not an error message is given to the user 
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }

    if (!formData.password.trim()) { 
      // if  password field is left blank then give an error message  
      validationErrors.password = "Password is required";
      // the passowrd input field should be equal to or above 8 charcaters
    } else if (formData.password.length <= 8) {
      validationErrors.password = "Password should be at least 8 characters";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        // send email and password to the backend 
        const dataToSend = {
          email: formData.email,
          password: formData.password
        };

        const response = await axios.post(
          //the local backends local hosts address
          "http://localhost:8000/users/login",
          dataToSend
        );

        // store user data in local storage
        localStorage.setItem("userData", JSON.stringify(response.data));
        navigate("/"); //if successful the user will be navigated to the homepage
      } catch (err) {
        console.error(err);
        let errorMessage;
        if (err.response && err.response.status === 422) {
          // Handle some error messages from the backend
          errorMessage =
            err.response.data.detail &&
            typeof err.response.data.detail === "object"
              ? JSON.stringify(err.response.data.detail)
              : err.response.data.detail || "An error occurred during login";
        } else {
          errorMessage = "User isn't found";
        }
        setError(errorMessage);
      }
    }
  };

  return (
    <div className="login-container">
      <Header/>
      {/* The login form */}
      <div className="form-container">
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="login-label">Email</label>
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
            <label htmlFor="password" className="login-label">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <button type="submit" className="submit-login">Login</button>
          <p>Not Registered yet? Click the button below </p><NavButton  text="Register" path={"/Register"}/>
        </form>
        <br/>
        <Footer/>
      </div>
    </div>
  );
};

export default Login;

