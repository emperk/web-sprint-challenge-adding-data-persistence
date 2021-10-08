const db = require('../../data/dbConfig');

const checkProjectId = async (req, res, next) => {
  try {
    const existingProject = await db('projects')
      .where('project_id', req.params.project_id)
      .first()
    if (!existingProject) {
      next({
        status: 404,
        message: `project with id: ${req.params.project_id} was not found`
      })
    } else {
      next()
    }
  } catch (err) {
    next(err)
  }
}

const checkProject = (req, res, next) => {
  const { project_name } = req.body
  if (
    project_name === undefined ||
    typeof project_name !== 'string' ||
    !project_name.trim()
  ) {
    next({
      status: 400,
      message: 'invalid project name!'
    })
  } else {
    next()
  }
}

module.exports = {
  checkProjectId,
  checkProject
}