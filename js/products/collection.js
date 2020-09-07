let cart = new Cart(0, [], 0);
// sort  the albums by name;
albums = new Map(Array.from(albums).sort(dynamicSort("nom")));
// sort the authors by name;
authors = new Map(Array.from(authors).sort(dynamicSort("nom")));
// sort the series by name
series = new Map(Array.from(series).sort(dynamicSort("nom")));
let pagination = new Pagination(albums.size, 12);
let collection = new Collection(albums);
let filters = new Filters(authors, series);
let search = new Search();

/**
 * Sort an array of Object by the property<br>
 * If there is "-" before the property, array sort by order descendant, otherwise array sort by order ascendant
 * @param {string} property
 * @return {function(*, *): number}
 */
function dynamicSort(property) {
    let sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        let result = (a[1][property] < b[1][property]) ? -1 : (a[1][property] > b[1][property]) ? 1 : 0;
        return result * sortOrder;
    }
}

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
    $( window ).resize(function(){
        search._nbRowMax = Math.floor((window.innerHeight - 200) / 33);
        search.generateSuggest();
    })
})