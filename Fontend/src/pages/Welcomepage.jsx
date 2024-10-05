import React from 'react';
import './WelcomePage.css'; // Import the CSS file

const WelcomePage = () => {
  return (
    <div className="container-fluid welcome-container">
      <div className="row justify-content-center">
        <div className="col-10 col-md-6 welcome-content">
          <h1 className="welcome-title">Welcome to Book Manager</h1>
          <p className="welcome-subtitle">Manage your collection with ease</p>

          <div className="button-group">
            <a href="/login" className="btn btn-primary sign-in-button">
              Sign In
            </a>
            <a href="/signup" className="btn btn-secondary sign-up-button">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
