const express = require('express');
const BookRouter = express.Router();
const BookModel = require('../models/bookModel');


BookRouter.get('/api/book', async (req, res) => {
    try {
        const books = await BookModel.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


BookRouter.get('/api/book/:bookId', async (req, res) => {
    const bookId = req.params.bookId;
    try {
        const book = await BookModel.findById(bookId);
        if (!book) {
            res.status(404).json({ message: 'Book not found' });
        } else {
            res.json(book);
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


BookRouter.post('/api/book', async (req, res) => {
    const { title, author } = req.body;
    try {
        const newBook = new BookModel({ title, author });
        await newBook.save();
        res.status(201).json({ message: 'Book created successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


BookRouter.put('/api/book/:bookId', async (req, res) => {
    const bookId = req.params.bookId;
    const { title, author } = req.body;
    try {
        const book = await BookModel.findByIdAndUpdate(bookId, { title, author }, { new: true });
        if (!book) {
            res.status(404).json({ message: 'Book not found' });
        } else {
            res.json({ message: 'Book updated successfully' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


BookRouter.delete('/api/book/:bookId', async (req, res) => {
    const bookId = req.params.bookId;
    try {
        const book = await BookModel.findByIdAndRemove(bookId);
        if (!book) {
            res.status(404).json({ message: 'Book not found' });
        } else {
            res.json({ message: 'Book deleted successfully' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = BookRouter;
