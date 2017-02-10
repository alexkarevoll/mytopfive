const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const Album = require('../models/Album.js')

router.get('/albums', function(req, res) {
  Album.find({}, function(err, albums) {
    if(err) return console.log(err)
    res.json(albums)
  })
})

router.get('/albums/:id', function(req,res) {
  Album.findById(req.params.id, function(err,album) {
    if(err) return console.log(err)
    res.json(album)
  })
})

router.post('/albums', function(req,res) {
  Album.create(req.body, function(err, album) {
    if(err) return console.log(err)
    res.json({success: true, message: 'album created', album: album})
  })
})

module.exports = router;
