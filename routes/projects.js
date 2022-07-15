const router = require('express').Router()

let Project = require('../models/project')
let User = require('../models/user')

//Get all projects
router.get('/', async (req, res) => {
    Project.find({user: req.body.id})
        .then(projects => res.json(projects))
        .catch(err => res.status(400).json(err))
});

//Add a project
router.post('/add', async (req, res) =>  {
    
    const user = await User.findOne({id: req.body.id})

    const name = req.body.name
    const desc = req.body.desc
    const author = user.firstName
    const date = new Date()
    const tickets = []

    const newProject = new Project({
        user: req.body.id,
        name,
        desc,
        author,
        date,
        tickets
    })

    //user.projects.push(newProject.id)
    newProject.save()
    .then(() => res.send(req.body))
    .catch(err => res.status(400).json('There was an error' + err))
    
});

//Get project by an id
router.route('/:id').get((req, res) => {
    Project.findById(req.params.id)
    .then(project => res.json(project))
    .catch(err => res.status(400).json('There was an error' + err))
})

//Delete project
router.route('/:id').delete((req, res) => {
    Project.findByIdAndDelete(req.params.id)
    .then(() => res.json('Project has been deleted'))
    .catch(err => res.status(400).json('There was an error while deleting project' + err))
})

module.exports = router;