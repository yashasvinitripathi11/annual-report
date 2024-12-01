import React from "react";
import "./LandingPage.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from "react-router-dom";


const LandingPage = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = () => {
    navigate("/login"); // Redirect to login page
  };
  
  const handleSignUp = () => {
    navigate("/signup"); // Redirect to sign-up page
  };
  return (
    <div className="landing-page">
      
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">KEDBOG</div>
        <nav className="nav-links">
          <a href="#how-it-works">How it Works</a>
          <a href="#faq">FAQ</a>
          <a href="#playground">Playground</a>
        </nav>
        <div className="auth-buttons">
          <button className="login-btn" onClick={handleLogin}>Login</button>
          <button className="signup-btn" onClick={handleSignUp}>Sign Up</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Transform Educational Workflows with Visual Scripting</h1>
          <p>
            Automate report generation and streamline educational processes with
            our intuitive visual scripting platform.
          </p>
          <button className="cta-button">Get Started Free</button>
        </div>
        <div className="hero-image">
          {/* Replace with your image */}
          <img
            src="diagram.jpg"
            alt="Visual Scripting Demo"
            
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works" id="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <span className="icon">📂</span>
            <h3>Import Files</h3>
            <p>
              Easily import various file formats including spreadsheets,
              documents, and databases.
            </p>
          </div>
          <div className="step">
            <span className="icon">🔗</span>
            <h3>Create Workflows</h3>
            <p>
              Design visual workflows with our intuitive drag-and-drop
              interface.
            </p>
          </div>
          <div className="step">
            <span className="icon">📊</span>
            <h3>Generate Reports</h3>
            <p>
              Automatically generate comprehensive reports and analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="interactive-demo" id="playground">
        <h2>Interactive Demo</h2>
        <div className="demo-image">
          <img
            src="diagram.jpg"
            alt="Interactive Demo"
          />
        </div>
      </section>

       {/* Supported File Formats Section */}
       <section className="section">
        <h2>Supported File Formats</h2>
        <div className="file-icons">
          <div className="file-icon">📊 Excel</div>
          <div className="file-icon">📄 CSV</div>
          <div className="file-icon">📕 PDF</div>
          <div className="file-icon">📄 Word</div>
          <div className="file-icon">🛢️ SQL</div>
          <div className="file-icon">🔧 JSON</div>
        </div>
      </section>

       {/* Key Features Section */}
       <section className="s">
        <h2>Key Features</h2>
        <div className="features-container">
          <div className="feature-box">
          
            <h3>Real-Time Collaboration</h3>
            <p>
              Work together seamlessly with your team in real-time. 
              Share workflows,collaborate on reports, and make decisions together efficiently.
            </p>
          </div>
          <div className="feature-box">
            <h3>Generative Reports</h3>
            <p>
              Create comprehensive educational reports automatically.
              Generate progress reports,attendance summaries, and performance analytics with just a few clicks.
            </p>
          </div>
        </div>
      </section>
        {/* Footer */}
        <footer className="f">
        <div>
          <h3>Ready to Transform Your Educational Workflow?</h3>
          <p>Join thousands of educational institutions already using KEDBOG</p>
          <button className="cta">Start Free Trial</button>
          
        </div>
      </footer>
      <footer className="footer">
      <div className="footer-container">
        {/* KEDBOG Section */}
        <div className="footer-column">
          <h3>KEDBOG</h3>
          <p>Transforming educational workflows through visual scripting</p>
        </div>

        {/* Product Links */}
        <div className="footer-column">
          <h4>Product</h4>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#documentation">Documentation</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </div>

        {/* Connect Section */}
        <div className="footer-column">
          <h4>Connect</h4>
          <div className="social-links">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© 2024 KEDBOG. All rights reserved.</p>
      </div>
    </footer>

     
    </div>
  );
};

export default LandingPage;
