const express = require('express');
const router = express.Router();

// Album Model
const Album = require('../../models/Album');

// @route   GET api/albums
// @desc    Get All Albums
// @access  Public
router.get('/', (req, res) => {
  Album.find()
    .then(albums => res.json(albums))
})

module.exports = router;
