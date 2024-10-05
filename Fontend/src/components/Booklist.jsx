import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash, faThumbsUp, faThumbsDown, faPlus } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

const BookManager = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:7000/app/book/") 
            .then((res) => res.json())
            .then((data) => setBooks(data))
            .catch((error) => console.error('Error fetching books:', error));
    }, []);

    const handleLike = (index, isLike) => {
        const updatedBooks = books.map((book, i) => {
            if (i === index) {
                return { ...book, like: isLike ? 'liked' : 'unliked' }; 
            }
            return book;
        });
        setBooks(updatedBooks);
    };

    const handleDelete = (id) => {
        fetch('http://localhost:7000/app/book/' + id, { method: "DELETE" })
            .then((res) => res.json())
            .then(() => {
                setBooks(books.filter((book) => book.id !== id)); 
            })
            .catch((error) => console.error('Error deleting book:', error));
    };

    return (
        <div className="container mt-5">
            <h3 className="mb-4">Books</h3>
            <div className="d-flex justify-content-end mb-3">
                <Link to={'/addbooks'} className="btn btn-danger">
                    <FontAwesomeIcon icon={faPlus} /> Add Book
                </Link>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Status</th>
                        <th>Publication Year</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => (
                        <tr key={index}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>
                                <span className={`badge ${book.status === 'Available' ? 'bg-success' : 'bg-warning'}`}>
                                    {book.status}
                                </span>
                            </td>
                            <td>{book.publicationDate}</td>
                            <td>
                                {/* View more button redirecting to detailed view */}
                                <Link to={`/viewmore/${book.id}`} className="btn btn-info me-2">
                                    <FontAwesomeIcon icon={faEye} />
                                </Link>
                                {/* Edit button with navigation to UpdateBook */}
                                <button 
                                    className="btn btn-light me-2"
                                    onClick={() => navigate(`/updatebook/${book.id}`)} 
                                >
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                                {/* Delete button */}
                                <button 
                                    className="btn btn-danger me-2" 
                                    onClick={() => handleDelete(book.id)} 
                                >
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                                <button
                                    className={`btn me-2 ${book.like === 'liked' ? 'btn-primary' : 'btn-outline-dark'}`}
                                    onClick={() => handleLike(index, true)}
                                >
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                </button>
                                <button
                                    className={`btn ${book.like === 'unliked' ? 'btn-danger' : 'btn-outline-dark'}`}
                                    onClick={() => handleLike(index, false)}
                                >
                                    <FontAwesomeIcon icon={faThumbsDown} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookManager;
