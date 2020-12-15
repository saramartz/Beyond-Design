const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Board = require('../models/board.model')

router.get('/getAllBoards', (req, res) => {

    Board
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get('/getOneBoard/:board_id', (req, res) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.board_id)) {
        res.status(404).json({ message: 'Invalid ID' })
        return
    }

    Board
        .findById(req.params.board_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post('/newBoard', (req, res) => {
    
    Board
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put('/editBoard/:board_id', (req, res) => {

    // {$push: {"images": req.body.board}}

    Board
        .findByIdAndUpdate(req.params.board_id, {$push: {"images": req.body.image}})
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.delete('/deleteBoard/:board_id', (req, res) => {
    
    Board
        .findByIdAndRemove(req.params.board_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router