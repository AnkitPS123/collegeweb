const mongoose = require("mongoose");

const dburl = "mongodb://localhost:27017/xenon";

mongoose.connect(dburl);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
});