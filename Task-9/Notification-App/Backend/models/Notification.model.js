const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    title: String,
    message: String,
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

const notificationModel = mongoose.model('Notification', notificationSchema)

module.exports = notificationModel;
