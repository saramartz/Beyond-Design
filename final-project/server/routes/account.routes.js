const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const User = require('../models/user.model')

router.get('/:user_id', (req, res) => {

    User
        .findById(req.params.user_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put('/editUser/:user_id', (req, res) => {

    User
        .findByIdAndUpdate(req.params.user_id, req.body.user)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.delete('/deleteUser/:user_id', (req, res) => {
    
    User
        .findByIdAndRemove(req.params.user_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router