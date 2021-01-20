
const express = require('express');

const router = express.Router();


// Get all workitem generators
router.get('/', (req, res) => {
    res.send('Hello World');
});

// Get one workitem generator
router.get('/:id', (req, res) => {

});

// Create one workitem generator
router.post('/', (req, res) => {

});

// Update one workitem generator
router.patch('/:id', (req, res) => {

});

// Delete one workitem generator
router.delete('/:id', (req, res) => {

});

module.exports = router;
