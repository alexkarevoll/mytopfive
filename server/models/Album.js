const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Album = new Schema({
  title: String,
  artist: String,
  img: String
})

module.exports = mongoose.model('Album', Album)
