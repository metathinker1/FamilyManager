
const express = require('express');

const router = express.Router();

const WorkitemGenRule = require('../models/workitem_genrule')


// Get all workitem generators
router.get('/', async (req, res) => {
    try {
        const workitemGenRules = await WorkitemGenRule.find()
        res.json(workitemGenRules)
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
});

// Get one workitem generator rule
router.get('/:id', (req, res) => {

});

// Create one workitem generator rule
router.post('/', async (req, res) => {
    const workitemGenRule = new WorkitemGenRule({
        name: req.body.name,
        description: req.body.description,
        startDate: req.body.startDate,
        betweenType: req.body.betweenType,
        numBetween: req.body.numBetween
    })

    try {
        const newWorkitemGenRule = await workitemGenRule.save()
        res.status(201).json(newWorkitemGenRule)
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
});

// Update one workitem generator rule
router.patch('/:id', (req, res) => {

});

// Delete one workitem generator rule
router.delete('/:id', (req, res) => {

});

module.exports = router;
