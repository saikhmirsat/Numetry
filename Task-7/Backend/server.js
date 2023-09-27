
const express = require('express');
const admissionFormRoutes = require('./routes/admissionForm.route');
const { connection } = require("./Config/db")


const app = express();
const port = 8080;

app.use(express.json())

app.use('/admissionform', admissionFormRoutes);

app.listen(port, async () => {
    try {
        console.log("Server is connected")
        await connection
    } catch (err) {
        console.log(`Server is not connect`)
    }
    console.log(`Server is running on port ${port}`);
});
