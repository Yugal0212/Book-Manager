import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function AddBook() {
    const [data, setData] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();  
        
        const apiUrl = "http://localhost:7000/app/book/";

        fetch(apiUrl, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((res) => res.json())
        .then((res) => {
            navigate('/home'); 
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    };

    return (
        <div className="container">
            <h2 className="my-4 text-center">Update  Book</h2>

            <form onSubmit={handleSubmit} className="shadow p-4 rounded">
            <div className="mb-3">
                    <label htmlFor="number" className="form-label">Book Id:</label>
                    <input type="number" id="id" name="number" className="form-control" required
                          onChange={(e) => setData({ ...data, id: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input type="text" id="title" name="title" className="form-control" required
                        value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="author" className="form-label">Author Name:</label>
                    <input type="text" id="author" name="author" className="form-control" required
                        value={data.author} onChange={(e) => setData({ ...data, author: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="status" className="form-label">Leavel:</label>
                    <select id="status" name="status" className="form-select" required
                        value={data.status} onChange={(e) => setData({ ...data, status: e.target.value })}
                    >
                        <option value="">--Select Leavel--</option>
                        <option value="Best">Best</option>
                        <option value="avrage">Avrage</option>
                        <option value="Low">Low</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="pub_date" className="form-label">Publication Year:</label>
                    <input type="date-year" id="pub_date" name="pub_date" className="form-control" required
                        value={data.publicationDate} onChange={(e) => setData({ ...data, publicationDate: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description:</label>
                    <textarea id="description" name="description" rows="4" className="form-control" required
                        value={data.description} onChange={(e) => setData({ ...data, description: e.target.value })}
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-success w-100">Add Book</button>
            </form>
        </div>
    );
}

export default AddBook;
