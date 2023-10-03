const express = require('express');
const CommentRouter = express.Router();
const { BlogModel } = require('../models/Blog.model');
const { CommentModel } = require('../models/Comment.model');

// POST route to add a comment to a specific blog post
CommentRouter.post('/add/:blogId', async (req, res) => {
    try {
        const blogId = req.params.blogId;
        const { comment, user } = req.body;

        // Find the blog post by ID
        const blog = await BlogModel.findById(blogId);

        if (!blog) {
            return res.status(404).json({ message: 'Blog post not found.' });
        }

        // Create a new comment
        const newComment = new CommentModel({
            comment,
            user,
        });

        // Add the comment to the blog's 'comments' array
        blog.comments.push(newComment);

        // Save the updated blog post with the new comment
        const updatedBlog = await blog.save();

        res.status(201).json(updatedBlog);
    } catch (error) {
        console.error('Error adding comment:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// DELETE route to delete a comment from a specific blog post
CommentRouter.delete('/delete/:blogId/:commentId', async (req, res) => {
    try {
        const blogId = req.params.blogId;
        const commentId = req.params.commentId;

        // Find the blog post by ID
        const blog = await BlogModel.findById(blogId);

        if (!blog) {
            return res.status(404).json({ message: 'Blog post not found.' });
        }

        // Find the comment within the blog's 'comments' array
        const comment = blog.comments.find(comment => comment._id.toString() === commentId);

        if (!comment) {
            return res.status(404).json({ message: 'Comment not found.' });
        }

        // Check if the logged-in user's ID matches the comment's user ID or the blog author's ID
        const loggedInUserId = req.body.user; // Assuming you store the user's ID in the request body

        if (comment.user === loggedInUserId || blog.user === loggedInUserId) {
            // Remove the comment from the 'comments' array
            blog.comments = blog.comments.filter(c => c._id.toString() !== commentId);

            // Save the updated blog post without the deleted comment
            const updatedBlog = await blog.save();

            res.status(200).json(updatedBlog);
        } else {
            return res.status(403).json({ message: 'Unauthorized to delete this comment.' });
        }
    } catch (error) {
        console.error('Error deleting comment:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});


module.exports = { CommentRouter };
