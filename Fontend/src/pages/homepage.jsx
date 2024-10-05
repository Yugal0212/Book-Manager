import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import AddTaskButton from '../components/AddTaskButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookManager from '../components/Booklist';


function Homepage() {
  return (
    
    <div className="app-container d-flex">
      <Sidebar />
      <div className="content flex-grow-1">
        <Header />
        <BookManager/>
      </div>
      <AddTaskButton />
    </div>
    
  );
}

export default Homepage;
