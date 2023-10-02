const express = require('express');
const notificationRouter = express.Router();
const notificationModel = require('../models/Notification.model');

// Create a notification
notificationRouter.get('/', (req, res) => {
    const greetingMessage = 'Hello, welcome to our website!'; // Define your greeting message here
    res.json({ message: greetingMessage });
});

module.exports = notificationRouter;
