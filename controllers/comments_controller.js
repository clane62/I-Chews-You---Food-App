const express = require('express')
const router = express.Router()

// models
const Comment = require('../models/comment')

// routes
router.get('/:id', (req, res) => {
    const recipeId = req.params.id

    Comment
        .findByRecipeId(recipeId)
        .then(comments => res.json(comments))
})

router.post('/', (req, res) => {
    const { recipeId, rating, comment } = req.body

    const userId = req.session.userId
    // need to pass in recipe_id, username
    if (!userId) {
        res.status(400).json({ error: 'need to be logged in to comment' })
    } else {
        Comment
            .create(recipeId, userId, rating, comment)
            .then(userName => res.json(userName))
    }
})

module.exports = router