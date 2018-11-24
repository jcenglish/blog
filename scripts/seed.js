const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')
const Article = require('../server/db/models')
const articles = require('./articles.js')

const kitty = new Cat({name: 'Zildjian'})
kitty.save().then(() => console.log('meow'))

const articleSchema = new mongoose.Schema({
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
})
