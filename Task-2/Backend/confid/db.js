const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb+srv://saikhmirsat:saikhmirsat@cluster0.56eq4k2.mongodb.net/tesk2?retryWrites=true&w=majority')

module.exports = {
    connection
}