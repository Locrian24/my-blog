// router/client.js
// Contains all routes available to the client
// All routes are accessible by UNAUTHENTICATED users

const router = require('express').Router();

router
    // All blog entries
    .route('/')
    .get((req, res) => {
        res.status(200).json('Ahoy');
    });

router
    // Specific blog entry
    .route('/:id')
    .get((req, res) => {
        let id = req.params.id;
        res.status(200).json(id);
    })


module.exports = router;