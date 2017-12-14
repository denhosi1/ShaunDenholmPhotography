const mongoose = require('mongoose');

var galleryImageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'Title cannot be blank.'
    },
    filePath: {
        type: String,
        required: 'FilePath cannot be blank.'
    },
    location: {
        type: String,
        required: 'Location cannot be blank.'
    },
    categories: {
        type: String,
        required: 'Categories cannot be blank.'
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

const GalleryImage = module.exports = mongoose.model('GalleryImage', galleryImageSchema);