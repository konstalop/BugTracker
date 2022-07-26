const router = require('express').Router()
const verify = require('../middleware/verify')

let Project = require('../models/project');
const user = require('../models/user');
let User = require('../models/user')

/**
 * Fetch all projects from user and verify accessToken before doing anything.
 */
router.get('/', verify, (req, res) => {
    Project.find({user: req.user.user.id})
        .then(projects => res.json(projects))
        .catch(err => res.status(400).json(err))
});

/**
 * Create a new project, also verify accessToken before doing anything.
 */
router.post('/add', verify, async (req, res) =>  {
    
    const user = await User.findById(req.user.user.id)
  
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
    .then(() => res.send(newProject))
    .catch(err => res.status(400).json('There was an error' + err))
    
});

/**
 * Find project by id and verify accessToken before doing anything.
 */
router.get('/:id', verify, async (req, res) => {    
    Project.findById(req.params.id)
    .then((project) => {
            console.log(req.user.user.id)
            console.log(project.user)
        if (req.user.user.id == project.user){
            res.json(project)
        } else {
            res.sendStatus(403)
        }
    })
    .catch(err => res.status(400).json('There was an error' + err))
})

/**
 * Delete a wanted project. Currently its not used anywhere!
 */
router.route('/:id').delete((req, res) => {
    Project.findByIdAndDelete(req.params.id)
    .then(() => res.json('Project has been deleted'))
    .catch(err => res.status(400).json('There was an error while deleting project' + err))
})

module.exports = router;