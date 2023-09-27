
const mongoose = require('mongoose');

const admissionFormSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('AdmissionForm', admissionFormSchema);
