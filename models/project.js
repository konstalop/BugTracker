const mongoose = require('mongoose')

const ProjectSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        requried: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    tickets: {
        type: Array,
        default: []
    }
})

console.log(ProjectSchema)



module.exports = mongoose.model('project', ProjectSchema)