// controllers/apiController.js
// Makes available all API-based operations

const EntryModel = require('../models/Entry');

module.exports = {
    getAll: (req, res) => {
        EntryModel.find(req.query)
            .then(entries => res.status(202).json(entries.reverse()))
            .catch(err => res.status(422).json(err));
    },
    getById: (req,res) => {
        EntryModel.findById( req.params.id )
            .then(entry => res.status(202).json(entry))
            .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
        EntryModel.create(req.body)
            .then(newEntry => res.status(201).json(newEntry))
            .catch(err => res.status(401).json(err))
    },
    update: (req, res) => {
        EntryModel.findByIdAndUpdate(req.params.id, req.body)
            .then(updatedEntry => res.status(202).json(updatedEntry))
            .catch(err => res.status(422).json(err))
    },
    remove: (req, res) => {
        EntryModel.findByIdAndRemove( req.params.id)
            .then(removed => res.status(202).json(removed))
            .catch(err => res.status(422).json(err))
    }
}