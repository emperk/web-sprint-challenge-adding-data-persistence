// build your `/api/tasks` router here
const express = require('express');
const Tasks = require('./model');
const router = express.Router();

router.get('/', (req, res, next) => {
  Tasks.getAllTasks()
    .then(tasks => {
      res.json(tasks)
    })
    .catch(next)
})

module.exports = router;