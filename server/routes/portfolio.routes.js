const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Work = require('../models/work.model')

router.get('/getAllWorks', (req, res) => {

    Work
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get('/getOneWork/:work_id', (req, res) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.work_id)) {
        res.status(404).json({ message: 'Invalid ID' })
        return
    }

    Work
        .findById(req.params.work_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post('/newWork', (req, res) => {
    
    Work
        .create(req.body.work)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put('/editWork/:work_id', (req, res) => {

    Work
        .findByIdAndUpdate(req.params.work_id, req.body.work)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.delete('/deleteWork/:work_id', (req, res) => {
    
    Work
        .findByIdAndRemove(req.params.work_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router