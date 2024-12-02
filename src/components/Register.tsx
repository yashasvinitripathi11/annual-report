import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const Register: FC = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = (): void => {
    navigate("/login");
  };

  const handleSignUpSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert("Sign Up Successful!");
  };

  const handleSignUpRedirect = (): void => {
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <h1 className="logo">KEDBOG</h1>
      <div className="form-container">
        <div className="toggle-buttons">
          <button
            className="toggle-btn login-btn"
            onClick={handleLoginRedirect}
          >
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

          <button
            type="submit"
            className="submit-btn"
            onClick={handleSignUpRedirect}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
