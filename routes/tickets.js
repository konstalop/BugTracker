const router = require('express').Router()

let Ticket = require('../models/ticket')
let verify = require('../middleware/verify')
let User = require('../models/user')
//let Project = require('../models/project')

/**
 * Get all tickets from user and check authorization.
 */
router.get('/', verify, (req, res) => {
    Ticket.find({user: req.user.user.id})
        .then(tickets => res.json(tickets))
        .catch(err => res.status(400).json('There was an error while trying to get all tickets: '+ err))
})

/**
 * Get all tickets from wanted project.
 */
router.get('/project', verify, (req, res) => {
    Ticket.find({project: req.body.id})
        .then(tickets => res.json(tickets))
        .catch(err => res.status(400).json('There was an error: ' + err))
})

/**
 * Create a new ticket and add it to the database. Also check authorization.
 */
router.post('/add', verify, async (req, res) => {

    const user = await User.findById(req.user.user.id)

    const title = req.body.title
    const desc = req.body.desc
    const time = req.body.time
    const type = req.body.type
    const priority = req.body.priority
    const status = req.body.status
    const author = user.firstName
    const date = new Date()

    const newTicket = new Ticket({
        project: req.body.id,
        user: user._id,
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
    .then(() => res.send(newTicket))
    .catch(err => res.status(400).json('There was an error while adding a new ticket: '+ err))
})

/**
 * Find wanted ticket by id, check authorization.
 */
router.get('/:id', verify, (req, res) => {
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
    console.log(req.params.id)

    Ticket.findById(req.params.id)
    .then(ticket => {
        ticket.title = req.body.title
        ticket.desc = req.body.desc
        ticket.time = req.body.time
        ticket.type = req.body.type
        ticket.priority = req.body.priority
        ticket.status = req.body.status

        ticket.save()
        .then(() => res.json('Ticket has been updated!'))
        .catch(err => res.status(400).json('There was an error while updating: ' + err))
    })
    .catch(err => res.status(400).json('There was an error: ' + err))
})


module.exports = router