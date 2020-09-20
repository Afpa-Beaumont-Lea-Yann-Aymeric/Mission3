/** @author Aymeric Mary <aymeric.mary.pls@gmail.com> */

import {albums as albumsMap} from '../../data/albums.js';
import {series as seriesMap} from '../../data/series.js';
import {authors as authorsMap} from '../../data/authors.js';
import {Album} from './Album.js';
import {Author} from './Author.js';
import {Serie} from './Serie.js';
import {dynamicSort} from "../helpers/helpers.js";

export class Database {
    #albums;
    #series;
    #authors;

    constructor() {
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