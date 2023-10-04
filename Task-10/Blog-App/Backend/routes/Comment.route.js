const express = require('express');
const CommentRouter = express.Router();
const { BlogModel } = require('../models/Blog.model');
const { CommentModel } = require('../models/Comment.model');
CommentRouter.post('/add/:blogId', async (req, res) => {
    try {
        const blogId = req.params.blogId;
        const { comment, user } = req.body;
        const blog = await BlogModel.findById(blogId);

        if (!blog) {
            return res.status(404).json({ message: 'Blog post not found.' });
        }
        const newComment = new CommentModel({
            comment,
            user,
        });
        blog.comments.push(newComment);

        const updatedBlog = await blog.save();

        res.status(201).json(updatedBlog);
    } catch (error) {
        console.error('Error adding comment:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});
CommentRouter.delete('/delete/:blogId/:commentId', async (req, res) => {
    try {
        const blogId = req.params.blogId;
        const commentId = req.params.commentId;


        const blog = await BlogModel.findById(blogId);

        if (!blog) {
            return res.status(404).json({ message: 'Blog post not found.' });
        }


        const comment = blog.comments.find(comment => comment._id.toString() === commentId);

        if (!comment) {
            return res.status(404).json({ message: 'Comment not found.' });
        }
        const loggedInUserId = req.body.user;
        if (comment.user === loggedInUserId || blog.user === loggedInUserId) {
            blog.comments = blog.comments.filter(c => c._id.toString() !== commentId);

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
