const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const albums = require('./routes/api/albums')

const app = express();
app.use(express.json());

// Connect to Mongo
mongoose
  .connect(process.env.MONGODB_URL || 'mongodb://127.0.0.1/albums-manager', { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/albums', albums);

// Setup for Production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

module.exports = app
