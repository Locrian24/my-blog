// controllers/apiController.js
// Makes available all API-based operations (i.e. only GET)
// No POST, PUT or DELETE in this controller

module.exports = {
    getAll: (req, res) => {
        res.status(200).json(`Here are all the entries`);
    },
    getById: (req,res) => {
        res.status(200).json(`Here is the one entry for ${req.params.id}`);
    }
}