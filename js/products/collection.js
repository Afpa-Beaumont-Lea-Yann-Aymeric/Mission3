let cart = new Cart(0, [], 0);
let pagination = new Pagination(albums.size, 12);
let collection = new Collection(albums);
let filters = new Filters(auteurs, series);
let search = new Search();

function incrementItem(id) {
    let album = new Album(id);
    cart.addAlbum(album);
    cart.updateHtml(id);
}

function decrementItem(id) {
    let album = new Album(id);
    cart.removeAlbum(album);
    cart.updateHtml();
}

$(document).ready(function () {
    filters.generateHtml();
    collection.showAlbums();
    pagination.generateHtml();

    $("#search").keydown(function (e) {
        let value;
        if (e.key.length === 1) {
            value = $(this).val() + e.key;
        } else if (e.key === "Backspace") {
            value = $(this).val().slice(0,-1);
        } else {
            value = $(this).val();
        }
        console.log(value);
        search.query = value;
        search.showSuggest();
        search.generateSuggest();
        if (e.code === "ArrowDown") {
            e.preventDefault();
            search.down();
        } else if (e.code === "ArrowUp") {
            e.preventDefault();
            search.up();
        } else if (e.code === "Escape") {

        }
    })
})