const express = require('express')
const { ResumeModel } = require('../Model/Resume.model.js'); // Corrected path


const ResumeRouter = express.Router()

ResumeRouter.get('/', async (req, res) => {
    try {
        const data = await ResumeModel.find()
        res.send(data)
        console.log(data)

    } catch (err) {
        console.log(err)
    }
})


ResumeRouter.post('/post', async (req, res) => {
    try {
        const newResume = new ResumeModel(req.body);
        await newResume.save();
        res.status(201).json({ "msg": "Resume Data posted successfull", status: true, newResume });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: false, error: 'Failed to create a resume' });
    }
});




ResumeRouter.get('/:id', async (req, res) => {
    try {
        const resume = await ResumeModel.findById(req.params.id);
        if (!resume) {
            return res.status(404).json({ error: 'Resume not found' });
        }
        res.json(resume);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve the resume' });
    }
});


ResumeRouter.patch('/:id', async (req, res) => {
    try {
        const resume = await ResumeModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!resume) {
            return res.status(404).json({ error: 'Resume not found' });
        }
        res.json(resume);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update the resume' });
    }
});





ResumeRouter.delete('/:id', async (req, res) => {
    try {
        const resume = await ResumeModel.findByIdAndRemove(req.params.id);
        if (!resume) {
            return res.status(404).json({ error: 'Resume not found' });
        }
        res.json({ message: 'Resume deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete the resume' });
    }
});

module.exports = {
    ResumeRouter
}