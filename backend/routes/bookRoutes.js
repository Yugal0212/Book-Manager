const express = require('express');
const {
  getAllBooks,
  getBookById,
  createBook,
  deleteBook,
  updateBook,
} = require('../controllers/bookController');
const router = express.Router();

router.get('/book', getAllBooks);
router.get('/book/:id', getBookById);
router.post('/book', createBook);
router.delete('/book/:id', deleteBook);
router.patch('/book/:id', updateBook);

module.exports = router;
