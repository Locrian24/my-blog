// router/client.js
// Contains all routes available to the client
// All routes are accessible by UNAUTHENTICATED users

const router = require('express').Router();
const apiController = require('../controllers/apiController');

router
    // All blog entries
    .route('/')
    .get(apiController.getAll);
//.get(apiController.getAll)

router
    // Specific blog entry
    .route('/:id')
    .get(apiController.getById);

module.exports = router;
