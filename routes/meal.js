const express = require('express')
const router = express.Router()
const mealController = require('../controllers/meal')
const { ensureAuth } = require('../middleware/auth')

router.get("/:id", ensureAuth, mealController.getMeal)

module.exports = router