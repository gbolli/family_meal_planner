const Meal = require('../models/Meal')

module.exports = {
    getMeal: async (req, res) => {
        try {
            const meal = await Meal.findById(req.params.id)
            res.render(`meal.ejs`, { meal: meal })
        } catch (error) {
            console.error(error)
        }
    },
    getMeals: async (req, res) => {
        try {
            const meals = await Meal.find()
            res.render(`meals.ejs`, { meals: meals })
        } catch (error) {
            console.error(error)
        }
    }
}