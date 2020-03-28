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

// @route   POST api/albums
// @desc    Create An Album
// @access  Public
router.post('/', (req, res) => {
  const newAlbum = new Album({
    artist: req.body.artist,
    title: req.body.title,
    posterURL: req.body.posterURL,
    tracks: req.body.tracks
  })

  newAlbum.save().then(album => res.json(album));
})

// @route   GET api/albums/:artist/:title
// @desc    Get An Album By Id
// @access  Public
router.get('/:id', (req, res) => {
  Album.find({ _id: req.params.id })
    .then(albums => res.json(albums[0]))
})

module.exports = router;
