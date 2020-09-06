class Collection {
    /***
     *
     * @param {Map} albums
     * @param currentPage
     * @param itemsPerPage
     */
    constructor(albums) {
        this._albums = albums;
    }

    showAlbums() {
        $("#collection").empty();
        let start = pagination.currentPage * pagination.itemsPerPage - pagination.itemsPerPage;
        let end = pagination.currentPage * pagination.itemsPerPage;
        let albumsToShow = mapToArray(this._albums).slice(start,end);
        console.log(albumsToShow);
        albumsToShow.forEach(function (album) {
            let card = new Album(album.key).generateHTMLCard();
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