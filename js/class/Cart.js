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

    /**
     *
     * @param {Album} album
     * @returns {string}
     */
    generateContent(album) {
        return '<li class="list-group-item d-block p-1">\n' +
            '                <img class="w-75 d-block m-auto" src="'+ album.generateSrcImg() +'">\n' +
            '                <ul class="pagination pagination-sm mt-1">\n' +
            '                    <li class="page-item disabled">\n' +
            '                        <a class="page-link" href="#" tabindex="-1">-</a>\n' +
            '                    </li>\n' +
            '                    <li class="page-item active"><a class="page-link" href="#">1</a></li>\n' +
            '                    <li class="page-item"><a class="page-link" href="">+</a></li>\n' +
            '                    <li class="m-auto font-weight-bold">'+ album.price +' €</li>\n' +
            '                </ul>\n' +
            '            </li>'
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

