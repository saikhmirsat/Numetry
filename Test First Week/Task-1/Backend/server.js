const express = require('express');
const { connection } = require('./config/db');
const { ResumeRouter } = require('./Routes/Resume.route.js');
const cors = require('cors')
const app = express();
app.use(cors())

app.use(express.json());


app.use('/resume', ResumeRouter);

app.listen(8080, async () => {
    try {
        await connection;
        console.log("DB connected");
    } catch (err) {
        console.error(err);
        console.log("DB not connected");
    }
    console.log("Server listening on port 8080");
});
