const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  entry: String,
  headerImage: imageSchema,
  images: [imageSchema],
  tags: [tagSchema],
  datePublished: Date,
  dateCreated: {
    type: Date,
    default: Date.now,
    required: true
  },
  dateUpdated: Date,
  dateDeleted: Date
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article
