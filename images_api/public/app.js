$(document).ready(function(){
    $.getJSON("/api/galleryImages")
    .then(addGalleryImages)

    $('#createButton').click(function(event) {
        createNewGalleryImage();
    })
});

function addGalleryImages(galleryImages) {
    galleryImages.forEach(function(galleryImage){
        addGalleryImage(galleryImage);
    });
}

function createNewGalleryImage() {
    var newGalleryImageTitle = $('#galleryImageTitle').val();
    var newGalleryImageFilePath = $('#galleryImageFilePath').val();
    var newGalleryImageLocation = $('#galleryImageLocation').val();
    var newGalleryImageCategories = $('#galleryImageCategories').val();

    $.post('/api/galleryImages', {title: newGalleryImageTitle, filePath: newGalleryImageFilePath, location: newGalleryImageLocation, categories: newGalleryImageCategories})
    .then(function(newGalleryImage) {
        if(newGalleryImageTitle != "" && newGalleryImageFilePath != "" && newGalleryImageLocation != "" && newGalleryImageCategories != ""){
            addGalleryImage(newGalleryImage);
            $('#galleryImageTitle').val('');
            $('#galleryImageFilePath').val('');
            $('#galleryImageLocation').val('');
            $('#galleryImageCategories').val('');
        }
    })
    .catch(function(err){
        console.log(err);
    })
}

function addGalleryImage(galleryImage){
    var newGalleryImage = $('<li class="task">' +  galleryImage.title + '<span>X</span></li>');
    if(newGalleryImage.complete) {
        newGalleryImage.addClass("done");
    }
    $('.list').append(newGalleryImage);
}