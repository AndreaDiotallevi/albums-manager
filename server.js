const express = require('express');
const mongoose = require('mongoose');

const albums = require('./routes/api/albums')

const app = express();
app.use(express.json());

// DB Config
const url = require('./config/keys').mongoURI;

// Connect to Mongo
if (process.env.NODE_ENV !== 'test') {
  mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
}

// Use Routes
app.use('/api/albums', albums);

module.exports = app
