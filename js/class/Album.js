class Album {
    #id;
    #name;
    #number;
    #serie;
    #author;
    #price;
    #formatedPrice;
    #count;
    #img;
    /**
     * @param {string} id
     */
    constructor(id) {
        this.#id = id;
        let album = albums.get(id);
        this.#name = album.name;
        this.#number = album.number;
        this.#serie = series.get(album.idSerie).name;
        this.#author = authors.get(album.idAuthor).name;
        this.#price = parseFloat(album.price);
        this.#formatedPrice = this.formatPrice(this.#price);
        this.#count = 1;
        this.#img = this.generateSrcImg(this.#serie,this.#number,this.#name);
    }

    formatPrice(price) {
        return price.toFixed(2).replace(".", ",");
    }

    generateSrcImg(){
        let imgSrc = "img/albums/" + this.#serie + "-" + this.#number + "-" + this.#name;
        return imgSrc.replace(/'|!|\?|\.|"|:|\$/g, "") + ".jpg";
    }

    /**
     * Generate a Bootstrap card with informations of the album
     * @return {HTMLDivElement}
     */
    generateHTMLCard(){
        return $('<div class="col-12 col-sm-6 col-lg-6 col-xl-4 mb-5">\n' +
            '               <div id="'+ this.#id +'" class="card border border-dark">\n' +
            '                <img class="card-img" src="' + this.#img + '" alt="Card image cap">\n' +
            '                <div class="card-body">\n' +
            '                    <p class="card-title font-weight-bolder">'+ this.#serie +'</p>\n' +
            '                    <p class="card-text">' + this.#number + ' ' + this.#name + '</p>\n' +
            '                    <p class="card-subtitle text-muted">Par ' + this.#author + '</p>\n' +
            '                    <p class="card-subtitle d-flex justify-content-end font-weight-bold">' + this.#formatedPrice + ' €' + '</p>\n' +
            '                    <button class="btn btn-primary font-weight-bold addCart">Ajouter au panier</button>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </div>')
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get serie() {
        return this.#serie;
    }

    set serie(value) {
        this.#serie = value;
    }

    get author() {
        return this.#author;
    }

    set author(value) {
        this.#author = value;
    }

    get price() {
        return this.#price;
    }

    set price(value) {
        this.#price = value;
    }

    get img() {
        return this.#img;
    }

    set img(value) {
        this.#img = value;
    }


    get number() {
        return this.#number;
    }

    set number(value) {
        this.#number = value;
    }


    get id() {
        return this.#id;
    }

    set id(value) {
        this.#id = value;
    }

    get formatedPrice() {
        return this.#formatedPrice;
    }

    set formatedPrice(value) {
        this.#formatedPrice = value;
    }

    get count() {
        return this.#count;
    }

    set count(value) {
        this.#count = value;
    }
}