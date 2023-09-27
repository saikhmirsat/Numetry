const express = require('express');
const { DataModel } = require('./Data.model');

const DataRoute = express.Router();

DataRoute.get('/', async (req, res) => {
    try {
        const data = await DataModel.find();
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

DataRoute.get('/:id', async (req, res) => {
    try {
        const data = await DataModel.findById(req.params.id);
        if (!data) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

DataRoute.post('/post', async (req, res) => {
    try {
        const newData = new DataModel(req.body);
        const savedData = await newData.save();
        res.status(201).json({ message: 'Data post successful', savedData });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

DataRoute.put('/:id', async (req, res) => {
    try {
        const updatedData = await DataModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedData) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.json({ message: 'Data updated successfully', updatedData });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

DataRoute.delete('/:id', async (req, res) => {
    try {
        const deletedData = await DataModel.findByIdAndDelete(req.params.id);
        if (!deletedData) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.json({ message: 'Data deleted successfully', deletedData });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = {
    DataRoute
};
