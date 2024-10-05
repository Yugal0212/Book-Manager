import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header d-flex justify-content-between align-items-center p-3">
      {/* Search bar */}
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search Books..."
        />
      </div>

      {/* User dropdown */}
      <div className="dropdown">
        <button
          className="btn btn-light dropdown-toggle"
          type="button"
          id="userDropdown"
          data-bs-toggle="dropdown" // Use data-bs-toggle for Bootstrap 5
          aria-expanded="false"
        >
          <FaUser /> {/* FontAwesome user icon */}
        </button>
        <div className="dropdown-menu" aria-labelledby="userDropdown" style={{ padding: '10px' }}> {/* Add padding here */}
          <a className="dropdown-item" href="#/profile">Profile</a>
          <Link className="dropdown-item" to='/login'>Logout</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
