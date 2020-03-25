const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const Album = new Schema({
  artist: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  loanedTo: {
    type: String,
    default: null
  },
  loanedDate: {
    type: Date,
    default: null
  }
});

module.exports = Album = mongoose.model('album', Album);
