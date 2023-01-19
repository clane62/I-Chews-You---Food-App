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
    const { recipeId, ratings, comment } = req.body

    const userId = req.session.userId
    // need to pass in recipe_id, username
    if (!userId) {
        res.status(400).json({ error: 'need to be logged in to comment' })
    } else {
        Comment
            .create(userId, recipeId, ratings, comment)
            .then(userName => res.json(userName))
    }
})

router.delete('/:id', (req, res) => {
    const reviewId = req.params.id

    Comment
        .delete(reviewId)
        .then(() => res.json({ message: 'deleted successfully' }))
})

router.put('/', (req, res) => {
    const { reviewId, ratings, comment } = req.body


    Comment
        .edit(reviewId, ratings, comment)
        .then(() => res.json({ message: 'edited successfully' }))

})

module.exports = router