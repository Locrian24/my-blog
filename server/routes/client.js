// router/client.js
// Contains all routes available to the client
// All routes are accessible by UNAUTHENTICATED users

const router = require('express').Router();
const apiController = require('../controllers/apiController');

router
    // All blog entries
    .route('/')
    .get(apiController.getAll)

    // TODO: Secure with jwt
    .post(apiController.create);

router
    // Specific blog entry
    .route('/:id')
    .get(apiController.getById)

    // TODO: Secure with jwt
    .put(apiController.update)
    .delete(apiController.remove);



module.exports = router;