class Cart {
    #nbAlbums;
    #albums;
    #totalToPay;
    /**
     * @param {integer} numberAlbums
     * @param {Album[]} albums
     * @param {number} totalToPay
     */
    constructor(nbAlbums, albums, totalToPay,) {
        this.#nbAlbums = albums.length;
        this.#albums = albums;
        this.#totalToPay = totalToPay;
    }

    /**
     * @param {Album} album
     * @returns {string}
     */
    generateItem(album) {
        return '<li id="' + album.id + '" class="list-group-item d-block p-1">\n' +
            '                <img class="w-75 d-block m-auto" src="' + album.generateSrcImg() + '">\n' +
            '                <ul class="pagination pagination-sm mt-1">\n' +
            '                    <li class="page-item">\n' +
            '                        <a class="page-link" href="javascript:decrementItem(&quot;' + album.id + '&quot;)">-</a>\n' +
            '                    </li>\n' +
            '                    <li class="page-item active"><a class="nbItems page-link">' + album.count + '</a></li>\n' +
            '                    <li class="page-item"><a href="javascript:incrementItem(&quot;' + album.id + '&quot;)" class="page-link nav-link">+</a></li>\n' +
            '                    <li class="itemPrice m-auto font-weight-bold">' + this.formatPrice(album.price * album.count) + ' €</li>\n' +
            '                </ul>\n' +
            '            </li>';
    }

    /**
     * Calcul the number of albums in the cart and set the value in this.#nbAlbums
     * @returns void
     */
    calculNbAlbums() {
        let count = 0
        this.#albums.forEach(function (album) {
            count += album.count;
        })
        this.#nbAlbums = count;
    }

    /**
     * Calcul the total amount in the cart and set the value in this.#totalToPay
     * @returns void
     */
    calculTotalToPay() {
        let total = 0
        this.albums.forEach(function (album) {
            total += album.price * album.count;
        })
        this.#totalToPay = total;
    }

    /**
     * Get the price
     * @param id - The id of the item to get
     * @returns {number}
     */
    getPriceItem(id) {
        let count = 0
        this.#albums.forEach(function (album) {
            if (album.id === id) count += album.price;
        })
        return count;
    }

    updateHtml() {
        $("#cart-body .list-group").empty();
        this.#albums.forEach(function (album) {
            $("#cart-body .list-group").append(cart.generateItem(album));
        })
        cart.calculTotalToPay();
        cart.calculNbAlbums();
        $("#totalToPay").text(this.formatPrice(this.#totalToPay));
        $(".badge.badge-warning").text(this.#nbAlbums);
    }

    /**
     * If an album with same id is already in the cart, increment the count of 1
     * Else, push the album in this.#albums
     * @param {Album} album - The album to add to cart
     */
    addAlbum(album) {
        let contain = false
        this.#albums.map(function (value) {
            if (value.id === album.id) {
                value.count++;
                contain = true;
            }
        })
        if (!contain) this.#albums.push(album);
    }

    removeAlbum(album) {
        this.#albums.forEach(function (value, key, albums) {
            if (value.id === album.id) value.count--;
            if(value.count === 0) albums.splice(key, 1);
        })
    }

    formatPrice(price) {
        return price.toFixed(2).replace(".", ",");
    }

    get nbAlbums() {
        return this.#nbAlbums;
    }

    set nbAlbums(value) {
        this.#nbAlbums = value;
    }

    get albums() {
        return this.#albums;
    }

    set albums(value) {
        this.#albums = value;
    }

    get totalToPay() {
        return this.#totalToPay;
    }

    set totalToPay(value) {
        this.#totalToPay = value;
    }
}