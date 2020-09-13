class Collection {
    #albumsToShow
    /**
     * @param {Map} albumsMap
     */
    constructor(albumsToShow) {
        this.#albumsToShow = albumsToShow;
    }

    showAlbums() {
        $("#collection").empty();
        pagination.nbItems = this.#albumsToShow.length;
        pagination.nbPages = Math.ceil(pagination.nbItems / pagination.itemsPerPage);
        pagination.generateHtml();
        let start = pagination.currentPage * pagination.itemsPerPage - pagination.itemsPerPage;
        let end = pagination.currentPage * pagination.itemsPerPage;
        let albumsToShow = this.#albumsToShow.slice(start, end);

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

    get albumsToShow() {
        return this.#albumsToShow;
    }

    set albumsToShow(value) {
        this.#albumsToShow = value;
    }
}