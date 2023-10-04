const mongoose = require('mongoose');
const { CommentModel } = require('./Comment.model');

const BlogSchema = mongoose.Schema({
    user: String,
    title: String,
    content: String,
    image: String,
    comments: [CommentModel.schema],
    BlogPostDate: {
        type: Date,
        default: Date.now, 
    }
}, {
    versionKey: false
});

const BlogModel = mongoose.model('blogs', BlogSchema);

module.exports = {
    BlogModel
};
