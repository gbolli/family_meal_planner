module.exports = {
    getIndex: (req, res) => {
        res.render(`index.ejs`)
    },
    // TEMP - login test
    getProfile: (req, res) => {
        res.render(`tempLoggedIn.ejs`)
    }
}