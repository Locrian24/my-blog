// models/Entry.js
// Defines the Entry Schema that stores blog entries

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
    // Blog Entry title
    title: {
        type: String,
        required: true
    },
    // Entry summary for preview purposes
    summary: {
        type: String,
        required: true
    },
    // Main body text
    body: {
        type: String,
        required: true
    },
    // Date submitted
    date: {
        type: String,
        required: true
    }
});

const Entry = mongoose.model('Entry', EntrySchema, 'entries');

module.exports = Entry;