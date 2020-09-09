/**
 * @file This class allow to
 */

class Database {
    #albums;
    #series;
    #authors;

    /**
     *
     * @param albumsMap
     */
    constructor(albumsMap) {
        let albums = [];
        let authors = {};
        let series = {};
        albumsMap.forEach(function (item, key) {
            let album = new Album(key);
            albums.push(album);

            if (typeof series[album.serie] === "undefined") {
                series[album.serie] = [album];
            } else {
                series[album.serie].push(album);
            }

            album.author.split(", ").forEach(function (author, key) {
                if (typeof authors[author] === "undefined") {
                    authors[author] = [album];
                } else {
                    authors[author].push(album);
                }
            })
        })
        this.#series = series;
        this.#albums = albums;
        this.#authors = authors;
    }

    getSeries() {
        return this.#series;
    }

    getAlbums(){
        return this.#albums;
    }

    getAuthors(){
        return this.#authors;
    }
}