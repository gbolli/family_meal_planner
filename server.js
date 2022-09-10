const express = require('express');
const app = express();
const connectDB = require('./config/database')
const logger = require('morgan')

// Use dotenv file from config folder
require('dotenv').config({ path: './config/.env' })

// Connect to database
connectDB()

// Static folder
app.use(express.static('public'))

// Body Parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Logging
app.use(logger('dev'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + `/index.html`)
})

// Run server
app.listen(process.env.PORT, () => {
    console.log(`Running on port ${process.env.PORT}`)
})