$(document).ready(function () {
    albums.forEach(function (value, key) {
        let album = new Album(value, key)
        let card = album.generateHTMLCard();
        $("#collection > .row").append(card);
    })

    $(".addCart").click(function () {
        let card = $(this).parent(".card-body").parent(".card");
        console.log(card);
    })
})