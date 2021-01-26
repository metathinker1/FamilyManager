const express = require('express');

const router = express.Router();

const WorkitemGenRule = require('../models/workitem_genrule')

// Generator workitems for one generator rule
router.post('/', async (req, res) => {
    console.log('workitem_generators: get(): Start')
    try {
        const workitemGenRules = await WorkitemGenRule.find()
        
        workitemGenRules.forEach(function(err, doc) {
            console.log('Looping: ' + doc)
        })

        res.json(workitemGenRules)
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
    // res.json('Stub func')
})

module.exports = router;
