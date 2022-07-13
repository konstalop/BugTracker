const router = require('express').Router()

let Project = require('../models/project')

//Get all projects
router.route('/').get((req, res) => {
    Project.find()
        .then(projects => res.json(projects))
        .catch(err => res.status(400).json(err))
});

//Add a project
router.route('/add').post((req, res) =>  {
    const name = req.body.name
    const desc = req.body.desc
    const author = req.body.author
    const date = new Date()
    const tickets = []


    const newProject = new Project({
        name,
        desc,
        author,
        date,
        tickets
    })
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