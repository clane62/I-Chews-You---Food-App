const express = require('express')
const router = express.Router()

// models
const Comment = require('../models/comment')

// routes
router.post('/', (req, res) => {
    const { rating, comment } = req.body

    // need to pass in recipe_id, username

    User
        .create(recipe_id, username, rating, comment)
        .then(userName => res.json(userName))
})