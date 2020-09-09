/**
 * @file This class allow to
 */

class Database {
    /**
     * @param {Map[]} albumsMap
     * @param {Map[]} authorsMap
     * @param {Map[]} seriesMap
     */
    constructor(albumsMap, authorsMap, seriesMap) {
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

            album.author.split(", ").forEach(function(author,key){
                if(typeof authors[author] === "undefined"){
                    authors[author] = [album];
                }else{
                    authors[author].push(album);
                }
            })
        })
        this._series = series;
        this._albums = albums;
        this._athors = authors;
    }
}