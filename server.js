const express = require('express')

// middlewares
const logger = require('./middlewares/logger')
const sessions = require('./middlewares/sessions')

// controllers


const app = express()
const port = 8080


// start web server
app.listen(port, () => console.log(`listening on port ${port}`))

// middleware functions passed into app.use
app.use(logger)
app.use(express.static('client'))
app.use(express.json())
app.use(sessions)

// middleware for controller routes