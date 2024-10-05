import React from 'react';
import { FaBook, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'; // Importing book-related icons

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Book Manager</h2>
      <ul>
        <li>
          <a href="#all-books">
            <FaBook /> All Books
          </a>
        </li>
        <li>
          <a href="#read">
            <FaCheckCircle /> Read
          </a>
        </li>
        <li>
          <a href="#unread">
            <FaTimesCircle /> Unread
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
