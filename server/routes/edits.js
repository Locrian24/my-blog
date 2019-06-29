const router = require('express').Router();
const apiController = require('../controllers/apiController');

const checkJwt = require('../config/checkJwt');

// Securing edit routes with check of JWT
router.use('/', checkJwt);

router
    .route('/')
    .post(apiController.create);

router
    .route('/:id')

    .put(apiController.update)
    .delete(apiController.remove);

module.exports = router;

