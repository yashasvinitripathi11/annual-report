import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    alert("Sign Up Successful!");
  };

  return (
    <div className="signup-container">
      <h1 className="logo">KEDBOG</h1>
      <div className="form-container">
        <div className="toggle-buttons">
          <button className="toggle-btn login-btn" onClick={handleLoginRedirect}>
            Login
          </button>
          <button className="toggle-btn signup-btn active">Sign Up</button>
        </div>
        <form className="signup-form" onSubmit={handleSignUpSubmit}>
          <label>Email or Username</label>
          <input
            type="text"
            placeholder="Enter your email or username"
            required
          />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />

          <label>Education Institute</label>
          <input
            type="text"
            placeholder="Enter your institute name"
            required
          />

          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
