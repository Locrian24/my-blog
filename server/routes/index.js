// routes/index.js

const router = require('express').Router();

const clientRoutes = require('./client');

// all queries from unauthenticated users are through the API
router.use('/api/', clientRoutes);

module.exports = router;