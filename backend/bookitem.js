const moongoose = require('mongoose');

const schema = new moongoose.Schema({
    id: Number,
    title: String,
    author: String,
    status: String,
    publicationDate: String,
    description: String
});


module.exports = moongoose.model('bookitems', schema);
