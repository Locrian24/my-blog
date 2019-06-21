// controllers/apiController.js
// Makes available all API-based operations (i.e. only GET)
// No POST, PUT or DELETE in this controller

const EntryModel = require('../models/Entry');

module.exports = {
    getAll: (req, res) => {
        EntryModel.find(req.query)
            .then(entries => res.status(200).json(entries))
            .catch(err => res.status(422).json(err));
    },
    getById: (req,res) => {
        EntryModel.findById( req.params.id )
            .then(entry => res.status(200).json(entry))
            .catch(err => res.status(422).json(err));
    }
}