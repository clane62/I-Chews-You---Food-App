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
                res.json(user.username)
            } else {
                res.json(null)
            }
        })
})

// user log in
router.post('/', (req, res) => {
    const { email, password } = req.body

    User
        .findByEmail(email)
        .then(user => {
            if (email === '' || password === '') {
                res.status(400).json({ error: 'email and/or password cannot be blank' })
            } else {
                const isValidPassword = bcrypt.compareSync(password, user.password_digest)
                if (user && isValidPassword) {
                    req.sessionStore.userId = user.id
                    res.json(user.username)
                }
            }
        })
})

module.exports = router