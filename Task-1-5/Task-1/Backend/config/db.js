const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb+srv://numetry:numetry@cluster0.2ba9eik.mongodb.net/numetry_task1?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // Add other options here as needed
})

module.exports = {
    connection
}