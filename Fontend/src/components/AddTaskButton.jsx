import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AddTaskButton = () => {
  return (
    <div className="add-task-btn">
      <Link to={'/addbooks'} className="btn btn-danger" >
        <FaPlus /> Add Book
      </Link>
    </div>
  );
};

export default AddTaskButton;
