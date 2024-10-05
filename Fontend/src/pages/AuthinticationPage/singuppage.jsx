import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Reusing the LoginPage CSS for the signup form styling
import svg from './LoginPagesvg.png'; // Same SVG for consistency

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    fetch('http://localhost:7000/app/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        password: formData.password,
      }),
    })
      .then((response) => {
        if (response.status === 201) {
          alert('Your account is created successfully!');
          navigate('/login');
        } else {
          return response.json(); // Returning response data for further handling
        }
      })
      .then((data) => {
        if (data) {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center login-container">
      <div className="row login-wrapper">
       
        <div className="col-lg-6 welcome-section text-center">
          <img src={svg} alt="Welcome Image" className="img-fluid" />
          <h2>Welcome to Book Manager</h2>
          <p>Learn more about Books, get assistance, and explore exciting features that enhance your experience.</p>
        </div>

        <div className="col-lg-6 form-section">
          <h3>Create Your Account</h3>

          <form className="form-group" onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                required
                type="text"
                className="form-control"
                id="unique-firstname"
                name="firstname"
                placeholder="Enter Firstname"
                value={formData.firstname}
                onChange={handleChange}
              />
              <label htmlFor="unique-firstname">Firstname</label>
            </div>

            <div className="form-floating mb-3">
              <input
                required
                type="text"
                className="form-control"
                id="unique-lastname"
                name="lastname"
                placeholder="Enter Lastname"
                value={formData.lastname}
                onChange={handleChange}
              />
              <label htmlFor="unique-lastname">Lastname</label>
            </div>

            <div className="form-floating mb-3">
              <input
                required
                type="email"
                className="form-control"
                id="unique-email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="unique-email">Email</label>
            </div>

            <div className="form-floating mb-3">
              <input
                required
                type="password"
                className="form-control"
                id="unique-password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
              />
              <label htmlFor="unique-password">Password</label>
            </div>

            <div className="form-floating mb-3">
              <input
                required
                type="password"
                className="form-control"
                id="unique-confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <label htmlFor="unique-confirmPassword">Confirm Password</label>
            </div>

            <button type="submit" className="btn btn-primary w-100">Sign Up</button>

            <p className="mt-3 text-center">
              Already have an account? &nbsp;
              <span className="signup-link">
                <Link to="/login">Login</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
