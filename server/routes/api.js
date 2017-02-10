const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const seed = require('../seed.js')

const Album = require('../models/Album.js')

// INDEX
router.get('/albums', function(req, res) {
  Album.find({}, function(err, albums) {
    if(err) return console.log(err)
    res.json(albums)
  })
})

// POST
router.post('/albums', function(req,res) {
  Album.create(req.body, function(err, album) {
    if(err) return console.log(err)
    res.json({success: true, message: 'album created', album: album})
  })
})

// SHOW
router.get('/albums/:id', function(req,res) {
  Album.findById(req.params.id, function(err,album) {
    if(err) return console.log(err)
    res.json(album)
  })
})

// UPDATE
router.patch('/albums/:id', function(req,res) {
  Album.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, album) {
    if(err) return console.log(err)
    res.json({success: true, message: "album updated", album: album})
  })
})

// DESTORY
router.delete('/albums/:id', function(req, res) {
  Album.findByIdAndRemove(req.params,id, function(err) {
    if(err) return console.log(err)
    res.json({success: true, message: "album deleted"})
  })
})

// SEED DB
router.get('/seed', function(req,res) {
  Album.remove({}, function(err) {
    if(err) return console.log(err)
    Album.insertMany(seed, function(err, albums) {
      if(err) return console.log(err)
      res.json({success: true, message: "database seeded", albums:albums})
    })
  })
})

module.exports = router;
