var express = require('express');
var router = express.Router();
var db = require("../models");
var helpers = require('../helpers/galleryImages');

//Get or create all images
router.route('/')
.get(helpers.getGalleryImages)
.post(helpers.createGalleryImage);

//Get, update or delete a single image
router.route('/:galleryImageId')
.get(helpers.getGalleryImage)
.put(helpers.updateGalleryImage)
.delete(helpers.deleteGalleryImage);

module.exports = router;