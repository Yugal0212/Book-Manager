const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  id : String,
  title: String,
  author: String,
  status: String,
  publicationDate: String,
  description: String,
});

module.exports = mongoose.model('bookitems', bookSchema);
