const mongoose = require('mongoose');
mongoose.connect(process.env.DB_LOCATION);

const Article = mongoose.model('Article', {
  title: String
});

const db = mongoose.connection;

export default db;
