const express = require('express');
const app = express();
const connectDB = require('./config/database')

require('dotenv').config({ path: './config/.env' })

connectDB()

app.get('/', (req, res) => {
    res.sendFile(__dirname + `/index.html`)
})

app.listen(process.env.PORT, () => {
    console.log(`Running on port ${process.env.PORT}`)
})