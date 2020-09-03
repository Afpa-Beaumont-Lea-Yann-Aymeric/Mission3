class Cart {
    /**
     * @param {integer} numberAlbums
     * @param {Album[]} albums
     * @param {number} totalToPay
     */
    constructor(nbAlbums, albums, totalToPay,) {
        this._nbAlbums = nbAlbums;
        this._albums = albums;
        this._totalToPay = totalToPay;
    }

    generateContent() {

    }

    addAlbum(album) {
        this._albums.push(album);
    }

    get nbAlbums() {
        return this._nbAlbums;
    }

    set nbAlbums(value) {
        this._nbAlbums = value;
    }

    get albums() {
        return this._albums;
    }

    set albums(value) {
        this._albums = value;
    }

    get totalToPay() {
        return this._totalToPay;
    }

    set totalToPay(value) {
        this._totalToPay = value;
    }
}

