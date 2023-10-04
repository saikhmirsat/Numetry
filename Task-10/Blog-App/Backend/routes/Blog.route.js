const express = require('express');
const { BlogModel } = require('../models/Blog.model');
const BlogRouter = express.Router();
BlogRouter.post('/', async (req, res) => {
    try {

        const newBlog = new BlogModel(req.body);
        const savedBlog = await newBlog.save();
        res.status(201).json({ message: "Blog Post succseccfull ", status: true, Blog: savedBlog });
    } catch (error) {
        console.error('Error creating a blog post:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});
BlogRouter.get('/', async (req, res) => {
    try {
        const blogs = await BlogModel.find();
        res.status(200).json(blogs);
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});
BlogRouter.get('/:id', async (req, res) => {
    try {
        const blog = await BlogModel.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog post not found.' });
        }
        res.status(200).json(blog);
    } catch (error) {
        console.error('Error fetching a blog post:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});
BlogRouter.put('/:id', async (req, res) => {
    try {
        const updatedBlog = await BlogModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedBlog) {
            return res.status(404).json({ message: 'Blog post not found.' });
        }
        res.status(200).json(updatedBlog);
    } catch (error) {
        console.error('Error updating a blog post:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});


BlogRouter.delete('/:id', async (req, res) => {
    try {
        const deletedBlog = await BlogModel.findByIdAndDelete(req.params.id);
        if (!deletedBlog) {
            return res.status(404).json({ message: 'Blog post not found.' });
        }
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting a blog post:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

module.exports = {
    BlogRouter
};
