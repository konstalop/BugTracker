const router = require('express').Router()
const { json } = require('express');
let Project = require('../models/project')

//Get all projects
router.route('/').get((req, res) => {
    Project.find()
        .then(projects => res.json(projects))
        .catch(err => res.status(400).json(err))
});

//Add a project
router.route('/add').post((req, res) =>  {
    console.log('Request')
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

//Get project by id
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

//Edit project
router.route('/update/:id').post((req, res) =>  {
    Project.findById(req.params.id)
    .then(project => {
        project.name = req.body.name
        project.desc = req.body.desc
        project.author = req.body.author
        project.date = new Date()

        project.save()
        .then(() => res.json('Project has been updated!'))
        .catch(err => res.status(400).json('There was an error while updating: ' + err))
    })
    .catch(err => res.status(400).json('There was an error: ' + err))
})

module.exports = router;