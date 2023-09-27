const express = require('express');
const router = express.Router();
const AdmissionForm = require('../models/admissionForm.model');

router.post('/', async (req, res) => {
    try {
        const { username, email, address } = req.body;
        const newForm = new AdmissionForm({ username, email, address });
        await newForm.save();
        res.status(201).json(newForm);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
router.get('/', async (req, res) => {
    try {
        const forms = await AdmissionForm.find();
        res.status(200).json(forms);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { username, email, address } = req.body;
        const updatedForm = await AdmissionForm.findByIdAndUpdate(
            id,
            { username, email, address },
            { new: true }
        );
        if (!updatedForm) {
            return res.status(404).json({ message: 'Form not found' });
        }
        res.status(200).json(updatedForm);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
