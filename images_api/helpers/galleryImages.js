var db = require("../models");

exports.getGalleryImages = function(req, res) {
    db.GalleryImage.find()
    .then(function(galleryImages){
        res.json(galleryImages);
    })
    .catch(function(err){
        res.send(err);
    })
};

exports.getGalleryImage = function(req, res){
    db.GalleryImage.findById(req.params.galleryImageId)
    .then(function(galleryImage){
        res.json(galleryImage)
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.createGalleryImage = function(req, res){
    db.GalleryImage.create(req.body)
    .then(function(newGalleryImage){
        res.status(201).json(newGalleryImage);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.updateGalleryImage = function(req, res){
    db.GalleryImage.findOneAndUpdate({ _id: req.params.galleryImageId }, req.body, { new: true })
    .then(function(galleryImage){
        res.json({galleryImage});
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.deleteGalleryImage = function(req, res){
    db.GalleryImage.remove({ _id: req.params.galleryImageId })
    .then(function(){
        res.json({ message: 'Image deleted!' });
    })
    .catch(function(err){
        res.send(err);
    })
}

module.exports = exports;