const express = require('express');
const app = express();
app.use(express.json());
const { DataRoute } = require('./Data.route')
const { connection } = require('./confid/db')

app.use('/data', DataRoute)
const port = 8080;
app.listen(port, async () => {
    try {
        await connection
        console.log("DB is connected")
    } catch (err) {
        console.log("DB is not connected")
    }
    console.log(`Server is running on port ${port}`);
});
