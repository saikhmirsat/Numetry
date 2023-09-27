const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    name: String,
    price: Number
}, {
    versionKey: false
})

const DataModel = mongoose.model('Datas', DataSchema)

module.exports = {
    DataModel
}