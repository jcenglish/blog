const express = require('express')
const router = express.Router()
const {Article} = require('../db')

router.get('/articles/published', async (req, res, next) => {
  await Article.find()
    .isPublished()
    .sort({datePublished: 'desc'})
    .then(articles => {
      res.send(articles)
    })
    .catch(err => {
      next(err)
    })
})

// router.get('/:studentId', async (req, res, next) => {
//   try {
//     const student = await Student.findById(req.params.studentId, {
//       include: [{model: Campus}]
//     })
//     res.json(student)
//   } catch (err) {
//     next(err)
//   }
// })

// router.post('/', async (req, res, next) => {
//   try {
//     const student = await Student.create(req.body)
//     res.json(student)
//   } catch (err) {
//     next(err)
//   }
// })

// router.delete('/:studentId', async (req, res, next) => {
//   try {
//     const id = req.params.studentId
//     await Student.destroy({
//       where: {id}
//     })
//     res.status(204).end()
//   } catch (err) {
//     next(err)
//   }
// })

// router.put('/:studentId', async (req, res, next) => {
//   try {
//     const id = req.params.studentId
//     const student = await Student.update(req.body, {
//       where: {id}
//     })
//     res.json(student[1])
//   } catch (err) {
//     next(err)
//   }
// })

module.exports = router
