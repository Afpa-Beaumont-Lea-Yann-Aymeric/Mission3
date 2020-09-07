class Cart {
    /**
     * @param {integer} numberAlbums
     * @param {Album[]} albums
     * @param {number} totalToPay
     */
    constructor(nbAlbums, albums, totalToPay,) {
        this._nbAlbums = albums.length;
        this._albums = albums;
        this._totalToPay = totalToPay;
    }

    /**
     *
     * @param {Album} album
     * @returns {string}
     */
    generateItem(album) {
        let item = '<li id="' + album.id + '" class="list-group-item d-block p-1">\n' +
            '                <img class="w-75 d-block m-auto" src="' + album.generateSrcImg() + '">\n' +
            '                <ul class="pagination pagination-sm mt-1">\n' +
            '                    <li class="page-item disabled">\n' +
            '                        <a class="decrementItem page-link" href="#" tabindex="-1">-</a>\n' +
            '                    </li>\n' +
            '                    <li class="page-item active"><a class="nbItems page-link">1</a></li>\n' +
            '                    <li class="page-item"><a href="#" class="incrementItem page-link nav-link">+</a></li>\n' +
            '                    <li class="m-auto font-weight-bold">' + album.formatedPrice + ' €</li>\n' +
            '                </ul>\n' +
            '            </li>';
        $("#cart-body .list-group").append(item);

        $(".incrementItem").click(function(e){
            e.preventDefault();
            let id= $(this).parent("li").parent("ul").parent("li").attr("id");
            
            let album = new Album(id);
            cart.addAlbum(album);
        })
    }

    incrementItem(id) {
        let album = new Album(id);
        this.addAlbum(album);
    }

    showNbItems(id) {
        let albums = this._albums.filter(function (album) {
            return album.id === id;
        })
        $("#" + id + " .nbItems").text(albums.length);
    }

    addAlbum(album) {
        let contain = false;
        this._albums.forEach(function (value) {
            if (value.id === album.id) contain = true;
        })
        this._albums.push(album);
        if (contain) {
            this.showNbItems(album.id);
        } else {
            this.generateItem(album);
        }
        this.totalToPay += album.price;
        this.nbAlbums = this._albums.length;
    }

    formatPrice(price) {
        return price.toFixed(2).replace(".", ",");
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

