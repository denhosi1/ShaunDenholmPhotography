$(document).ready(function(){
    $.getJSON("/api/galleryImages")
    .then(addGalleryImages)

    $('#createButton').click(function(event) {
        createNewGalleryImage();
    })

    $('.list').on("click", "span",function() {
        deleteGalleryImage($(this).parent());
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
    newGalleryImage.data('id', galleryImage._id);
    if(newGalleryImage.complete) {
        newGalleryImage.addClass("done");
    }
    $('.list').append(newGalleryImage);
}

function deleteGalleryImage(item) {
    var clickedItemId = item.data('id');
    var deleteUrl = "/api/galleryImages/" + clickedItemId;
    $.ajax({
        method: 'DELETE',
        url: deleteUrl
    })
    .then(function(data) {
        item.remove();
    });
}