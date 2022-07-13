const router = require('express').Router()
const ticket = require('../models/ticket')
let Ticket = require('../models/ticket')


//Get all tickets
router.route('/').get((req, res) => {
    Ticket.find()
        .then(tickets => res.json(tickets))
        .catch(err => res.status(400).json('There was an error while trying to get all tickets: '+ err))
})

//Add a ticket
router.route('/add').post((req, res) => {
    const title = req.body.title
    const desc = req.body.desc
    const time = req.body.time
    const type = req.body.type
    const priority = req.body.priority
    const status = req.body.status
    const author = req.body.author
    const date = new Date()

    const newTicket = new Ticket({
        title,
        desc,
        time,
        type,
        priority,
        status,
        author,
        date
    })
    newTicket.save()
    .then(() => res.send(req.body))
    .catch(err => res.status(400).json('There was an error while adding a new ticket: '+ err))
})

//Get ticket by an id
router.route('/:id').get((req, res) => {
    Ticket.findById(req.params.id)
    .then(ticket => res.json(ticket))
    .catch(err => res.status(400).json('There was an error while getting ticket '+ err))
})

//Delete wanted ticket
router.route('/:id').delete((req, res) => {
    Ticket.findByIdAndDelete(req.params.id)
    .then(() => res.json('Ticket has been deleted!'))
    .catch(err => res.status(400).json('There was an error while trying to delete ticket: '+ err))
})

//Edit ticket
router.route('/update/:id').post((req, res) =>  {
    Ticket.findById(req.params.id)
    .then(ticket => {
        ticket.title = req.body.title
        ticket.desc = req.body.desc
        ticket.time = req.body.time
        ticket.type = req.body.type
        ticket.priority = req.body.priority
        ticket.status = req.body.status
        ticket.author = req.body.author

        ticket.save()
        .then(() => res.json('Ticket has been updated!'))
        .catch(err => res.status(400).json('There was an error while updating: ' + err))
    })
    .catch(err => res.status(400).json('There was an error: ' + err))
})


module.exports = router