// app.js
const express = require('express');
const dotenv = require('dotenv');
const BookRouter = require('./routes/bookRoutes');
const connection = require('./config/db')

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// API routes
app.use('/', BookRouter);

app.listen(port, async () => {
    try {
        await connection
        console.log('db connect')
    } catch (err) {
        console.log('db is not connect')
    }
    console.log(`Server is running on port ${port}`);
});
