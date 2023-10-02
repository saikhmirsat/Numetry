// app.js
const express = require('express');
const dotenv = require('dotenv');
const connection = require('./config/db')
const cors = require('cors')
dotenv.config();
const notificationRouter = require('./routes/Notification.route');

const app = express();
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 3000;



app.use('/api/notifications', notificationRouter);


app.listen(port, async () => {
    try {
        await connection
        console.log('db connect')
    } catch (err) {
        console.log('db is not connect')
    }
    console.log(`Server is running on port ${port}`);
});
