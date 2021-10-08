// build your `Resource` model here
const db = require('../../data/dbConfig');

const getAllResources = () => {
  return db('resources');
}

const getResourceById = (resource_id) => {
  return db('resources').where('resource_id', resource_id).first()
}

const getResourceByName = (resource_name) => {
  return db('resources').where('resource_name', resource_name).first()
}

const addResource = (resource) => {
  return db('resources').insert(resource)
    .then(([resource_id]) => {
      return db('resources').where('resource_id', resource_id).first()
    })
}


module.exports = {
  getAllResources,
  getResourceById,
  getResourceByName,
  addResource
}