class Collection {
    /**
     * @param {Map} albumsMap
     */
    constructor(albumsToShow) {
        this._albumsToShow = albums;
    }

    showAlbums() {
        $("#collection").empty();
        pagination.nbItems = this.albumsMatched.length;
        pagination.nbPages = Math.ceil(pagination.nbItems / pagination.itemsPerPage);
        pagination.generateHtml();
        let start = pagination.currentPage * pagination.itemsPerPage - pagination.itemsPerPage;
        let end = pagination.currentPage * pagination.itemsPerPage;
        let albumsToShow = this._albumsMatched.slice(start, end);

        albumsToShow.forEach(function (album) {
            let card = new Album(album.id).generateHTMLCard();
            $("#collection").append(card);
        })

        $(".addCart").click(function () {
            let id = $(this).parent(".card-body").parent(".card").attr("id");
            let album = new Album(id);
            cart.addAlbum(album);
            cart.updateHtml();
        })
    }

    get albums() {
        return this._albums;
    }

    set albums(value) {
        this._albums = value;
    }


    get albumsMatched() {
        return this._albumsMatched;
    }

    set albumsMatched(value) {
        this._albumsMatched = value;
    }

    get currentPage() {
        return this._currentPage;
    }

    set currentPage(value) {
        this._currentPage = value;
    }

    get itemsPerPage() {
        return this._itemsPerPage;
    }

    set itemsPerPage(value) {
        this._itemsPerPage = value;
    }

    get nbItems() {
        return this._nbItems;
    }

    set nbItems(value) {
        this._nbItems = value;
    }
}