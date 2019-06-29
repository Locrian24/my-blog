// routes/index.js

const router = require('express').Router();

const clientRoutes = require('./client');
const editRoutes = require('./edits');

// all queries from unauthenticated users are through the API
router.use('/client/', clientRoutes);
router.use('/edits/', editRoutes);

module.exports = router;