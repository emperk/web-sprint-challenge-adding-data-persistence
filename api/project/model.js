// build your `Project` model here
const db = require('../../data/dbConfig');

const getAllProjects = () => {
  return db('projects')
}

// const getAllProjects = async () => {
//   const projects = await db('projects as p')
//   return projects
// }

// const getProjectId = (project_id) => {
//   return db('projects').where('project_id', project_id).first()
// }

const getProjectId = async (project_id) => {
  const projectRows = await db('projects as p')
    .where('project_id', project_id)
  return projectRows
}

// const addProject = (project) => {
//   return db('projects').insert(project)
//     .then(([project_id]) => {
//       return db('projects').where('project_id', project_id).first()
//     })
// }

// const addProject = (project) => {
//   return db('projects')
//     .insert(project) 
//     .then(([id]) => getAllProjects(id))
// }

const addProject = async (project) => {
  const [project_id] = await db('projects').insert(project)
  return getProjectId(project_id)
}

module.exports = {
  getAllProjects,
  getProjectId,
  addProject,
}