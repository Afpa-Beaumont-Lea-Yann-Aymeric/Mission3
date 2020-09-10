/**
 * @file This class allow to
 */

class Database {
    #albums;
    #series;
    #authors;

    /**
     * @param albumsMap
     */
    constructor(albumsMap) {
        let albums = [];
        let authors = [];
        let series = [];

        albumsMap.forEach(function (item, key) {
            let album = new Album(key);
            albums.push(album);


        })

        authors.sort(this.dynamicSort(""));



    }

    /**
     * Sort an array of Object by the property<br>
     * If there is "-" before the property, array sort by order descendant, otherwise array sort by order ascendant
     * @param {string} property
     * @return {function(*, *): number}
     */
    dynamicSort(property) {
        let sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }
}