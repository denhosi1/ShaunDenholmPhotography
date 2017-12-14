var express = require('express');
var router = express.Router();
var db = require("../models");

//Get all images
router.get('/', function(req, res) {
    db.GalleryImage.find()
    .then(function(galleryImages){
        res.json(galleryImages);
    })
    .catch(function(err){
        res.send(err);
    })
});

//Get image by id
router.get('/:galleryImageId', function(req, res){
    db.GalleryImage.findById(req.params.galleryImageId)
    .then(function(galleryImage){
        res.json(galleryImage)
    })
    .catch(function(err){
        res.send(err);
    })
});

//Create new image
router.post('/', function(req, res){
    db.GalleryImage.create(req.body)
    .then(function(newGalleryImage){
        res.status(201).json(newGalleryImage);
    })
    .catch(function(err){
        res.send(err);
    })
});

//Update an image
router.put('/:galleryImageId', function(req, res){
    db.GalleryImage.findOneAndUpdate({ _id: req.params.galleryImageId }, req.body, { new: true })
    .then(function(galleryImage){
        res.json({galleryImage});
    })
    .catch(function(err){
        res.send(err);
    })
});

//Delete an image
router.delete('/:galleryImageId', function(req, res){
    db.GalleryImage.remove({ _id: req.params.galleryImageId })
    .then(function(){
        res.json({ message: 'Image deleted!' });
    })
    .catch(function(err){
        res.send(err);
    })
});

module.exports = router;