const express = require('express');

const router = express.Router();

const WorkitemGenRule = require('../models/workitem_genrule')

// Generator workitems for one generator rule
router.post('/', async (req, res) => {
    console.log('workitem_generators: get(): Start')
    try {
        // const workitemGenRules = await WorkitemGenRule.find({})
        // console.log(workitemGenRules)
        // // https://stackoverflow.com/questions/41743924/how-can-run-mongoose-query-in-foreach-loop
        // workitemGenRules.forEach(function(err, doc) {
        //     console.log(doc.name)
        //     console.log('Looping: ' + doc)
        // })

        const cursor = await WorkitemGenRule.find().cursor()

        for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {
            console.log(doc.name + ',' + doc.startDate)
        }

        //  Didn't work
        // WorkitemGenRule.find({}, 
        //     '_id name',
        //     function(err, workitemGenRule) {
        //         if (!err) {
        //             if (workitemGenRule) {
        //                 console.log(workitemGenRule.name)
        //             }
        //         }
        //     }
        // )

        WorkitemGenRule.findOne({'name': 'Name2'}, 
        '_id name',
        function(err, workitemGenRule) {
            if (!err) {
                if (workitemGenRule) {
                    console.log(workitemGenRule.name)
                }
            }
        })

        res.json({message: 'Done'})
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
    // res.json('Stub func')
})

module.exports = router;
