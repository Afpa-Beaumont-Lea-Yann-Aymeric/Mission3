let database = new Database(albums, authors, series);
console.log(database);

let collection = new Collection(albums);

let cart = new Cart(0, [], 0);
// sort  the albums by name;
albums = new Map(Array.from(albums).sort(dynamicSort("nom")));
// sort the authors by name;
authors = new Map(Array.from(authors).sort(dynamicSort("nom")));
// sort the series by name
series = new Map(Array.from(series).sort(dynamicSort("nom")));

let pagination = new Pagination(albums.size, 12);
let search = new Search();

$("#search").keyup(function(e){
console.log(e.code);
})

throw 'stop';
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
                search.showSuggest();
                search.generateSuggest();
        }
    })

    $(window).resize(function () {
        search._nbRowMax = Math.floor((window.innerHeight - 200) / 33);
        search.generateSuggest();
    })
})