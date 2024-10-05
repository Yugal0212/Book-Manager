import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';
import svg from './LoginPagesvg.png';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); 
  
    axios.post('http://localhost:7000/app/login', { email, password })
      .then((response) => {
        if (response.data.success) {
          localStorage.setItem('token', response.data.token);
          navigate('/home'); 
        } else {
          
          setErrorMessage('Invalid email or password.');
        }
      })
      .catch((error) => {
        
        setErrorMessage('An error occurred. Please try again.');
        console.error(error);
      });
  };
  

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center login-container">
      <div className="row login-wrapper">
        <div className="col-lg-6 welcome-section text-center">
          <img src={svg} alt="Welcome Image" className="img-fluid" />
          <h2>Welcome to Book Manager</h2>
          <p>Learn more about Books , get assistance, and explore exciting features that enhance your experience.</p>
        </div>

        <div className="col-lg-6 form-section">
          <h3>Login your account</h3>

          <form className="form-group" onSubmit={handleLogin}>
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
            
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="unique-email"
                name="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="unique-email">Email</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="unique-password"
                name="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="unique-password">Password</label>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <input type="checkbox" id="unique-rememberMe" />
                <label htmlFor="unique-rememberMe" className="ms-2">Remember me</label>
              </div>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-primary w-100">Sign In</button>

            <p className="mt-3 text-center">
              Don't have an account? &nbsp;
              <span className="signup-link">
                <Link to="/signup">Sign up</Link>
              </span>
            </p>

            <p className="or-text text-center">Or With</p>

            <button type="button" className="btn btn-danger w-100">
              <i className="bi bi-google"></i> Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
