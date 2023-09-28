const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
}, {
    versionKey: false
});

const BookModel = mongoose.model('Book', bookSchema);

module.exports = BookModel;
