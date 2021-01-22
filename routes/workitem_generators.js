
const express = require('express');

const router = express.Router();

const WorkitemGenerator = require('../models/workitem_generator')


// Get all workitem generators
router.get('/', async (req, res) => {
    try {
        const workitemGenerators = await WorkitemGenerator.find()
        res.json(workitemGenerators)
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
});

// Get one workitem generator
router.get('/:id', (req, res) => {

});

// Create one workitem generator
router.post('/', async (req, res) => {
    const workitemGenerator = new WorkitemGenerator({
        name: req.body.name,
        startDate: req.body.startDate,
        betweenType: req.body.betweenType,
        numBetween: req.body.numBetween
    })

    try {
        const newWorkitemGenerator = await workitemGenerator.save()
        res.status(201).json(newWorkitemGenerator)
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
});

// Update one workitem generator
router.patch('/:id', (req, res) => {

});

// Delete one workitem generator
router.delete('/:id', (req, res) => {

});

module.exports = router;
