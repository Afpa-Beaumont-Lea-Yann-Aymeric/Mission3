/**
 * @file This class allow to
 */

class Database {
    #albums;
    #series;
    #authors;

    /**
     * @param {Map} albumsMap
     * @param {Map} seriesMap
     * @param {Map} authorsMap
     */
    constructor(albumsMap, seriesMap, authorsMap) {
        let albums = [];
        let authors = [];
        let series = [];
        albumsMap.forEach(function (item, key) {
            let album = new Album(key);
            albums.push(album);

            let idSerie = item.idSerie;
            let serie = series.find(x => x.id === idSerie);
            if (typeof serie !== "undefined") {
                serie.addAlbum(album);
            } else {
                serie = new Serie(idSerie, seriesMap.get(idSerie).name, [album]);
                series.push(serie);
            }

            let idAuthor = item.idAuthor;
            let authorsName = authorsMap.get(idAuthor).name.split(", ");
            authorsName.forEach(function (authorName) {
                let author = authors.find(x => x.name === authorName);
                if (typeof author !== "undefined") {
                    author.addAlbum(album);
                } else {
                    author = new Author(authorName, [album]);
                    authors.push(author);
                }
            })
        })
        this.#albums = albums;
        this.#series = series;
        this.#authors = authors;
        this.#albums.sort(dynamicSort("name"));
        this.#series.sort(dynamicSort("name"));
        this.#authors.sort(dynamicSort("name"));
    }

    get series() {
        return this.#series;
    }

    get albums() {
        return this.#albums;
    }

    get authors() {
        return this.#authors;
    }
}