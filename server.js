const express = require('express');
const app = express();

require('dotenv').config({ path: './config/.env' })

app.get('/', (req, res) => {
    res.sendFile(__dirname + `/index.html`)
})

app.listen(process.env.PORT, () => {
    console.log(`Running on port ${process.env.PORT}`)
})