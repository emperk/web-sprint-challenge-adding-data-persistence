// build your `Task` model here
const db = require('../../data/dbConfig');

const getAllTasks = () => {
  return db('tasks')
}

module.exports = {
  getAllTasks
}