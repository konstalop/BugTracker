const router = require('express').Router()
const verify = require('../middleware/verify')

let Project = require('../models/project')
let User = require('../models/user')

//Get all projects
router.get('/', verify, async (req, res) => {
    Project.find({user: req.user.user.id})
        .then(projects => res.json(projects))
        .catch(err => res.status(400).json(err))
});

//Add a project
router.post('/add', verify, async (req, res) =>  {
    
    const user = await User.findById(req.user.user.id)

    console.log(user)
    
    const name = req.body.name
    const desc = req.body.desc
    const author = user.firstName
    const date = new Date()

    const newProject = new Project({
        user: user._id,
        name,
        desc,
        author,
        date,
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