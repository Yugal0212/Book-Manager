const Book = require('../models/book');

// Get all books
exports.getAllBooks = async (req, res) => {
    const books = await Book.find();
    res.json(books);
};

exports.getBookById = async (req, res) => {
    const bookId = parseInt(req.params.id); 
    const book = await Book.findOne({ id: bookId });
    if (book) {
        res.json(book);
    } else {
        res.json({ message: 'Book not found' });
    }
};

// Create a new book
exports.createBook = async (req, res) => {
    const book = new Book(req.body);
    const savedBook = await book.save();
    res.json(savedBook); 
};


exports.deleteBook = async (req, res) => {
    const bookId = parseInt(req.params.id); 
    const deletedBook = await Book.findOne({ id: bookId });
    if (deletedBook) {
        res.json(deletedBook);  
    } else {
        res.status(404).json('Book not found');
    }
};

exports.updateBook = async (req, res) => {
    const bookId = parseInt(req.params.id); 
    const updatedBook = await Book.findOneAndUpdate({ id: bookId }, req.body, { new: true });
    if (updatedBook) {
        res.json(updatedBook); 
    } else {
        res.json('Book not found');
    }
};
