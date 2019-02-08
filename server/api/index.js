const router = require('express').Router()
const blog = require('./blog')

router.use('/blog', blog)

router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router
