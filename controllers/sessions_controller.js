const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

// models
const User = require('../models/user')

// routes
// checking if user is logged in
router.get('/', (req, res) => {
    User
        .findById(req.session.userId)
        .then(user => {
            if (user) {
                res.json(user.email)
            } else {
                res.json(null)
            }
        })
})

// user log in
router.post('/', (req, res) => {

})