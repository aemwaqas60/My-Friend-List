const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../models/user');

const UserScheam = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    created_date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("User", UserScheam);