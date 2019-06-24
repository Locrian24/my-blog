// config/index.js
// Connects to MongoDB database

const mongoose = require('mongoose');
const config = require('./config');

const URI = config.mongo.uri;

mongoose.connect(process.env.MONGODB_URI || URI, { useNewUrlParser: true });

// Success
mongoose.connection.on('connected', () => {
    console.log('Successfully connected to MongoDB database');
});

mongoose.connection.on('error', (err) => {
    console.log('MongoDB Connection Error: ' + err)
})