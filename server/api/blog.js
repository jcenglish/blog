const express = require('express')
const router = express.Router()
const {Article} = require('../db')

router.get('/articles/published', (req, res, next) => {
  Article.find()
    .isPublished()
    .sort({datePublished: 'desc'})
    .then(articles => {
      res.send(articles)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/articles', (req, res, next) => {
  Article.create(req.body)
    .then(article => {
      res.send(article)
    })
    .catch(err => {
      next(err)
    })
})

module.exports = router
