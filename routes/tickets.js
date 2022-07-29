const router = require('express').Router()
const { check, validationResult } = require('express-validator')

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
router.get('/project/:id', verify, (req, res) => {
    Ticket.find({project: req.params.id})
        .then(tickets => res.json(tickets))
        .catch(err => res.status(400).json('There was an error: ' + err))
})

/**
 * Delete all tickets with a certain project id
 */
router.delete('/project/:id', verify, (req, res) => {
    Ticket.deleteMany({project: req.params.id}) 
        .then(() => res.json('All tickets from project deleted!'))
        .catch(err => res.status(400).json('error '+ err))
})

/**
 * Create a new ticket and add it to the database. Also check authorization.
 */
router.post('/add', verify, [
    check('title', 'Title of ticket is required').not().isEmpty(),
    check('desc', 'Description of ticket is required!').not().isEmpty(),
    check('time', 'Time estimate of ticket is required!').not().isEmpty()
], async (req, res) => {

    const error = validationResult(req)

    if (!error.isEmpty()) {
        return res.status(400).json({error: error.array()})
    }

    const user = await User.findById(req.user.user.id)

    const title = req.body.title
    const desc = req.body.desc
    const time = req.body.time
    const type = req.body.type
    const priority = req.body.priority
    const status = req.body.status
    const author = user.firstName
    const date = new Date().toLocaleDateString()

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

/**
 * Delete wanted ticket, verify request
 */
router.delete('/:id', verify, (req, res) => {
    Ticket.findByIdAndDelete(req.params.id)
    .then(() => res.json('Ticket has been deleted!'))
    .catch(err => res.status(400).json('There was an error while trying to delete ticket: '+ err))
})

/**
 * Edit ticket, verify request
 */
router.post('/update/:id', verify, (req, res) =>  {

    Ticket.findById(req.params.id)
    .then(ticket => {
        ticket.project = req.body.project
        ticket.user = req.body.user
        ticket.title = req.body.title
        ticket.desc = req.body.desc
        ticket.time = req.body.time
        ticket.type = req.body.type
        ticket.priority = req.body.priority
        ticket.status = req.body.status

        ticket.save()
        .then(() => res.json(ticket))
        .catch(err => res.status(400).json('There was an error while updating: ' + err))
    })
    .catch(err => res.status(400).json('There was an error: ' + err))
})


module.exports = router