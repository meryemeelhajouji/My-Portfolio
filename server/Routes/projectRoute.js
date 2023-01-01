
const express = require('express')
const router = express.Router()

const {addProject, getAllProjectes} = require('../Controllers/ProjectController')

router.post('/addProject',addProject)
router.get('/projects',getAllProjectes)


module.exports = router