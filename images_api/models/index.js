const mongoose = require('mongoose');
mongoose.set('debug', true);

//Connect mongoose to our database
mongoose.connect('mongodb://localhost:27017/shaundenholmphotography');

mongoose.Promise = Promise;

module.exports.GalleryImage = require('./galleryImage');