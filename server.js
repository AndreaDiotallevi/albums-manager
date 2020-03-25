const express = require('express');
const mongoose = require('mongoose');

const albums = require('./routes/api/albums')

const app = express();

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/albums', albums);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
