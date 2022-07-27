const mongoose = require('mongoose')

/**
 * Mongoose schema for ticket objects.
 */
const TicketSchema = mongoose.Schema({
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projects'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('ticket', TicketSchema)