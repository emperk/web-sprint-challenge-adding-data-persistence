const db = require('../../data/dbConfig');
const Resource = require('./model');

const checkResourceId = async (req, res, next) => {
  try {
    const existingResource = await db('resources')
      .where('resource_id', req.params.resource_id)
      .first()
    if (!existingResource) {
      next({
        status: 404,
        message: `resource with id: ${req.params.resource_id} was not found!`
      })
    } else {
      next()
    }
  } catch (err) {
    next(err)
  }
}

const validateResource = (req, res, next) => {
  const { resource_name } = req.body
  if (
    resource_name === undefined ||
    typeof resource_name !== 'string' ||
    !resource_name.trim()
  ) {
    next({
      status: 400,
      message: 'invalid resource name! sorry!'
    })
  } else {
    next()
  }
}

const checkResourceNameUnique = async (req, res, next) => {
  try {
    const existingResourceName = await Resource.getResourceByName(req.body.resource_name)
    const nameExists = existingResourceName?.resource_name

    if (nameExists) {
      next({
        status: 400,
        message: `resource name: ${nameExists} already exists, sorry!`
      })
    } else {
      next()
    }
  } catch (err) {
    next(err)
  }
}

module.exports = {
  checkResourceId,
  validateResource,
  checkResourceNameUnique
}