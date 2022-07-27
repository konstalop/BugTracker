const mongoose = require('mongoose');

/**
 * Mongoose schema for user objects.
 */
const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('user', UserSchema);