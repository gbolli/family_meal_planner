const express = require('express')
const app = express()

const mongoose = require("mongoose")
const passport = require("passport")
const session = require("express-session")
const MongoStore = require("connect-mongo")
const methodOverride = require("method-override")
const flash = require("express-flash")

const connectDB = require('./config/database')
const logger = require('morgan')

const mainRoutes = require('./routes/main')

// Use dotenv file from config folder
require('dotenv').config({ path: './config/.env' })

// Passport config
require("./config/passport")(passport)

// Connect to database
connectDB()

// Use EJS for views
app.set('view engine', 'ejs')

// Static folder
app.use(express.static('public'))

// Body Parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Logging
app.use(logger('dev'))

//Use forms for put / delete
app.use(methodOverride("_method"))

// Setup Sessions - stored in MongoDB
app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({ mongoUrl: process.env.DB_URL })
    })
)
  
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

//Use flash messages for errors, info, ect...
app.use(flash())

// Routes
app.use('/', mainRoutes)

// Run server
app.listen(process.env.PORT, () => {
    console.log(`Running on port ${process.env.PORT}`)
})

// TODO: create models for DB
// TOOD: create views / partials for main view (this week?), history, recipe, recipe list?, etc