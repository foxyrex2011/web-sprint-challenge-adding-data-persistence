const express = require('express')

const Model = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
    Model.getAll()
    .then(post => {
        res.json(post)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    Model.insert(req.body)
    .then(task => {
        res.status(201).json(task)
    })
    .catch(next)
})

router.use((err, req, res) => {
    res.status(err.stack || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = router