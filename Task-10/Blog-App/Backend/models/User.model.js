const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    mobile: Number,
    gender: String
}, {
    versionKey: false
})

const UserModel = mongoose.model('users', UserSchema)

module.exports = {
    UserModel
}