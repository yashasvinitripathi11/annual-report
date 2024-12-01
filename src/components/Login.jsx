import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleSignUpRedirect = () => {
    navigate("/signup");
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful!");
  };
  const handleDashboardRedirect = () => {
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <h1 className="logo">KEDBOG</h1>
      <div className="form-container">
        <div className="toggle-buttons">
          <button className="toggle-btn login-btn active">Login</button>
          <button className="toggle-btn signup-btn" onClick={handleSignUpRedirect}>
            Sign Up
          </button>
        </div>
        <form className="login-form" onSubmit={handleLoginSubmit}>
          <label>Email or Username</label>
          <input
            type="text"
            placeholder="Enter your email or username"
            required
          />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />

          <div className="form-options">
            <div className="remember-me">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <a href="#" className="help-link">
              Need help?
            </a>
          </div>

          <button type="submit" className="submit-btn" onClick={handleDashboardRedirect}>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
