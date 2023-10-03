const mongoose = require('mongoose');
;

const commentScema = mongoose.Schema({
    comment: String,
    user: String,
    commentDate: {
        type: Date,
        default: Date.now,
    }
});

const CommentModel = mongoose.model('comments', commentScema);

module.exports = {
    CommentModel
}
