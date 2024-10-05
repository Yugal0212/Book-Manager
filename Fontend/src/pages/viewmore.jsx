import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Viewmore = () => {
  const [data, setData] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:7000/app/book/' + params.id)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [params.id]);

  return (
    <div className="container">
      <style>
        {`
          .book-card {
            border-radius: 15px;
            background-color: #f8f9fa;
            padding: 20px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          }
          .card-title {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 15px;
            color: #343a40;
          }
          .card-subtitle {
            font-size: 1.2rem;
            margin-bottom: 10px;
          }
          .card-text {
            font-size: 1rem;
            line-height: 1.5;
            color: #495057;
          }
          .container {
            padding-top: 50px;
          }
          .row {
            margin-top: 20px;
          }
          .book-card .card-body {
            padding: 25px;
          }
        `}
      </style>

      <div className="btn btn-danger" onClick={() => navigate('/home')}>
        <FontAwesomeIcon icon={faArrowLeft} /> Back to Home
      </div>        
      <h1 className="text-center my-5">Book Details</h1>
      
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card book-card shadow-sm">
            <div className="card-body">
              <h2 className="card-title">{data.title}</h2>
              <h5 className="card-subtitle mb-2 text-muted">Author: {data.author}</h5>
              <p className="card-text"><b>Discription</b> <br></br>{data.description}</p>
              <p className="card-text"><strong>Publication Year:</strong> {data.publicationDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewmore;
