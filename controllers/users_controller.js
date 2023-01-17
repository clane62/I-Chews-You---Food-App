const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

// models
const User = require('../models/user')



// routes
router.post('/', (req, res) => {
    const { first_name, last_name, username, email, password } = req.body
  
    const passwordDigest = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
  
    User
      .create(first_name, last_name, username, email, passwordDigest)
      .then(userName => res.json(userName))
})

module.exports = router