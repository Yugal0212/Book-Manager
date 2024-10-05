import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/AuthinticationPage/Loginpage.jsx';
import SignUpPage from './pages/AuthinticationPage/singuppage.jsx';
import HomePage from './pages/homepage.jsx';
import AddBook from './pages/Addbooks.jsx';
import Viewmore from './pages/viewmore.jsx';
import Updatebook from './pages/Updatebooks.jsx';
import WelcomePage from './pages/Welcomepage.jsx';
import './App.css';




function App() {
  return (
    
    <Router>
    <Routes>
      {/* Redirect "/" to "/login" */}
      <Route path="/" element={<Navigate replace to="/welcome"/>} />

      {/* Define the routes for the pages */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/welcome" element={<WelcomePage/>} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/addbooks" element={<AddBook />} />
      <Route path="/viewmore/:id" element={<Viewmore />} />
      <Route path="/updatebook/:id" element={<Updatebook />} />
      

     
    </Routes>
  </Router>

    
  );
}

export default App;

// 