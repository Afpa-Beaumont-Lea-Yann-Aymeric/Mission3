$(document).ready(function () {
    albums.forEach(function (value) {
        let album = new Album(value)
        let card = album.generateHTMLCard();
        $("#collection > .row").append(card);
    })

    $(".addCart").click(function(){
        let card = $(this).
    })
})