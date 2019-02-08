const mongoose = require('mongoose').set('debug', true)

if (process.env.NODE_ENV !== 'production') require('../../secrets')

mongoose.connect(
  process.env.DB_URL,
  {useNewUrlParser: true}
)

mongoose.Promise = global.Promise

const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

module.exports = db
