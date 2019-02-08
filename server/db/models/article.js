const mongoose = require('mongoose')
const {imageSchema} = require('./image')
const {tagSchema} = require('./tag')

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    body: String,
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
  },
  {collection: 'Article'}
)

articleSchema.query.byTag = function(tagId) {
  return this.where({})
}

articleSchema.query.isPublished = function() {
  return this.where({datePublished: {$ne: null}})
}

const Article = mongoose.model('Article', articleSchema)

module.exports = Article
