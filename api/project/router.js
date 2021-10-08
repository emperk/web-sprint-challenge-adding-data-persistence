// build your `/api/projects` router here
const express = require('express');
// const { checkProjectId, checkProject } = require('./middleware');
const Project = require('./model');
const router = express.Router();

// router.get('/', (req, res, next) => {
//   Projects.getAllProjects()
//     .then(projects => {
//       res.json(projects)
//     })
//     .catch(next)
// })

router.get('/', async (req, res, next) => {
  try {
    const allProjects = await Project.getAllProjects()
    res.json(allProjects)
  } catch (err) {
    next(err)
  }
});




// router.post('/', checkProject, async (req, res, next) => {
//   const project = req.body
//   Projects.addProject(project)
//     .then(project => {
//       res.status(201).json(project)
//     })
//     .catch(next)
// })

// router.post('/', async (req, res, next) => {
//   const project = await Project.
// })

router.post('/', async (req, res, next) => {
  try {
    const newProject = await Project.addProject(req.body)
    res.status(201).json(newProject)
  } catch (err) {
    next(err)
  }
});

module.exports = router;