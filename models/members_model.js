const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    place: {
        type: String
    },
    state: {
        type: String
    },
    country: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    mobile: {
        type: String
    },
    role: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true 
    },

});

const mamber = mongoose.model('members', memberSchema);
module.exports = mamber;
