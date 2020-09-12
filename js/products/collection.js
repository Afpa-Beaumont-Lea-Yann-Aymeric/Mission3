let database = new Database(albums, series, authors);

let search = new Search();

let collection = new Collection(database.albums);

let pagination = new Pagination(collection.albumsToShow, 12);

let cart = new Cart(0, [], 0);


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
    collection.showAlbums();
    pagination.generateHtml();

    $("#search").keydown(function (e) {
        let value;
        switch (e.key) {
            case "ArrowDown":
                e.preventDefault();
                search.down();
                break;
            case "ArrowUp":
                e.preventDefault();
                search.up();
                break;
            case "Escape":
                break;
            case "Enter":
                e.preventDefault();
                search.selectSuggest();
                break;
            case "Backspace":
                value = $(this).val().slice(0, -1);
            default:
                if (e.key.length === 1) value = $(this).val() + e.key;
                search.query = value;
                console.log(search.query);
                search.showSuggest();
                search.generateSuggest();
        }
    })

    $(window).resize(function () {
        search._nbRowMax = Math.floor((window.innerHeight - 200) / 33);
        search.generateSuggest();
    })
})