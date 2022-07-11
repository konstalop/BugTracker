const mongoose = require('mongoose')

const TicketSchema = mongoose.Schema({
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projects'
    },
    ticketId: {
        type: String,
        required: true,
        unique: true
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
        type: Date,
        default: Date.now
    },
    author: {
        type: String,
        default: "konsta"
    }
})

module.exports = mongoose.model('ticket', TicketSchema)