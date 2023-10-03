const express = require('express')
const cors = require('cors')
require('dotenv').config();
const { connection } = require('./Config/db')
const { UserRoute } = require('./routes/User.route')
const { authenticate } = require('./middleware/Authenticate.middleware')
const { BlogRouter } = require('./routes/Blog.route')
const { CommentRouter } = require('./routes/Comment.route')

const App = express()
App.use(cors())
App.use(express.json())

App.use('/users', UserRoute)
App.use(authenticate)
App.use('/blogs', BlogRouter)
App.use('/comments', CommentRouter)



App.listen(process.env.PORT, async (req, res) => {
    try {
        await connection
        console.log('DB is connected')
    } catch (err) {

        console.log('DB is not connected')
    }
    console.log(`DB is runnig at ${process.env.PORT}`)
})

