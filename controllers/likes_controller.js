const express = require('express')
const router = express.Router()

// models
const Likes = require('../models/likes')

// routes
router.get('/:id', (req, res) => {
    const recipeId = req.params.id
    
    Likes
        .countAll(recipeId)
        .then(likes => res.json(likes))
})

router.post('/:id', (req, res) => {
    const recipeId = req.params.id
    const userId = req.session.userId

    Likes
        .create(recipeId, userId)
})

module.exports = router