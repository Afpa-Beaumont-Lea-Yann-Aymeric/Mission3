class Album {
    #id;
    #name;
    #number;
    #serie;
    #authors;
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
        this.#authors = authors.get(album.idAuthor).name;
        this.#price = parseFloat(album.price);
        this.#formatedPrice = this.formatPrice(this.#price);
        this.#count = 1;
        this.#img = this.generateSrcImg(this.#serie,this.#number,this.#name);
        this._id = id;
    }

    formatPrice(price) {
        return price.toFixed(2).replace(".", ",");
    }

    generateSrcImg(){
        let imgSrc = "img/albums/" + this._serie + "-" + this._number + "-" + this._title;
        return imgSrc.replace(/'|!|\?|\.|"|:|\$/g, "") + ".jpg";
    }

    /**
     * Generate a Bootstrap card with informations of the album
     * @return {HTMLDivElement}
     */
    generateHTMLCard(){
        return $('<div class="col-12 col-sm-6 col-lg-6 col-xl-4 mb-5">\n' +
            '               <div id="'+ this._id +'" class="card border border-dark">\n' +
            '                <img class="card-img" src="' + this._img + '" alt="Card image cap">\n' +
            '                <div class="card-body">\n' +
            '                    <p class="card-title font-weight-bolder">'+ this._serie +'</p>\n' +
            '                    <p class="card-text">' + this._number + ' ' + this._title + '</p>\n' +
            '                    <p class="card-subtitle text-muted">Par ' + this._author + '</p>\n' +
            '                    <p class="card-subtitle d-flex justify-content-end">' + this._formatedPrice + ' €' + '</p>\n' +
            '                    <button class="btn btn-primary font-weight-bold addCart">Ajouter au panier</button>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </div>')
    }

    get name(){
        return this.#name;
    }


    get id() {
        return this._id;
    }

    get number() {
        return this.#number;
    }

    get serie() {
        return this.#serie;
    }

    get authors() {
        return this.#authors;
    }

    get price() {
        return this.#price;
    }

    get formatedPrice() {
        return this.#formatedPrice;
    }

    get count() {
        return this.#count;
    }

    get img() {
        return this.#img;
    }
}