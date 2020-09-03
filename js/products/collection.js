$(document).ready(function () {
    let cart = new Cart(0,[],0)
    albums.forEach(function (value, key) {
        let album = new Album(key);
        let card = album.generateHTMLCard();
        $("#collection > .row").append(card);
    })

    $(".addCart").click(function () {
        let idCard = $(this).parent(".card-body").parent(".card").attr("id");
        let album = new Album(idCard);
        cart.addAlbum(album);
        $("#cart-body .list-group").append(cart.generateContent(album));
    })
})