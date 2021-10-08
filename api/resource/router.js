// build your `/api/resources` router here
const router = require('express').Router()
const { checkResourceNameUnique } = require('./middleware');
const Resource = require('./model');

// router.get('/', (req, res, next) => {
//   Resources.getAllResources()
//     .then(resources => {
//       res.json(resources)
//     })
//     .catch(next)
// })



router.get('/', async (req, res, next) => {
  try {
    const resources = await Resource.getAllResources()
    res.json(resources)
  } catch (err) {
    next(err)
  }
})

// router.post('/', checkResourceNameUnique, (req, res, next) => {
//   const resource = req.body
//   Resource.addResource(resource)
//     .then(resource => {
//       res.status(201).json(resource)
//     })
//     .catch(next)
// })

router.post('/', checkResourceNameUnique, async (req, res, next) => {
  try {
    const resource = await Resource.addResource(req.body)
    res.json(resource)
  } catch (err) {
    next(err)
  }
})

router.use((err, req, res, next) => { //eslint-disable-line
  res.status(500).json({
    customMessage: 'there is an error inside the resource router',
    message: err.message,
    stack: err.stack,
  })
})

module.exports = router;