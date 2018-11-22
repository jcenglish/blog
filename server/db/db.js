const mongoose = require('mongoose')
mongoose.connect(process.env.DB_LOCATION)

const tagSchema = new mongoose.Schema({
  name: String
})

const imageSchema = new mongoose.Schema({
  url: String,
  description: String
})

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
const Tag = mongoose.model('Tag', tagSchema)
const Image = mongoose.model('Image', imageSchema)

const db = mongoose.connection
module.exports = {db}
