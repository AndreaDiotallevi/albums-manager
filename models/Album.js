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
  posterURL: {
    type: String,
    required: true
  },
  tracks: {
    type: Array,
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

module.exports = mongoose.model('album', Album);
