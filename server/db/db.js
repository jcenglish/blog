const mongoose = require('mongoose')

if (process.env.NODE_ENV !== 'production') require('../../secrets')

mongoose.connect(
  process.env.DB_URL,
  {useNewUrlParser: true}
)

const db = mongoose.connection

module.exports = db
