const mongoose = require('mongoose')

const ResumeSchema = mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    image: String,
    address: String, // Corrected field name
    github: String,
    qualification: String, // Corrected field name
    skills: String,
    softskills: String,
    hobies: String, // Corrected field name
    language: String,
    summary: String,
    projects: String,
    experience: String,
},
    {
        versionKey: false
    });


const ResumeModel = mongoose.model('resumes', ResumeSchema)

module.exports = {
    ResumeModel
}

