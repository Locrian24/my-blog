// config/index.js
// Connects to MongoDB database

const mongoose = require('mongoose');
const config = require('./config');

const URI = process.env.MONGODB_URI || config.mongo.uri;

mongoose.connect(URI, { useNewUrlParser: true });

// Success
mongoose.connection.on('connected', () => {
    console.log('Successfully connected to MongoDB database');
});

mongoose.connection.on('error', err => {
    console.log('MongoDB Connection Error: ' + err);
});
