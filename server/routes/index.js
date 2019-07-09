// routes/index.js

const router = require('express').Router();
const path = require('path');

const clientRoutes = require('./client');
const editRoutes = require('./edits');

// all queries from unauthenticated users are through the API
router.use('/api/client', clientRoutes);
router.use('/api/edits', editRoutes);

// Serve React app if no API routes are hit
// router.use((req, res) => {
//     res.sendFile(path.join(__dirname, '../../client/build/index.html'));
// });

module.exports = router;
