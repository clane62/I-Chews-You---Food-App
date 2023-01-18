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
    const { rating, comment } = req.body

    const userId = req.session.userId
    // need to pass in recipe_id, username

    Comment
        .create(recipe_id, userId, rating, comment)
        .then(userName => res.json(userName))
})

module.exports = router