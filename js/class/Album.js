class Album {
    /**
     * @param album
     */
    constructor() {
        this._id = id;
        this._title = album.titre;
        this._number = album.numero;
        this._serie = series.get(album.idSerie).nom;
        this._author = auteurs.get(album.idAuteur).nom;
        this._price = this.formatPrice(album.prix);
        this._img = this.generateSrcImg(this._serie, this._number, this._title);
    }

    formatPrice(price) {
        return parseFloat(price).toFixed(2).replace(".", ",");
    }

    generateSrcImg(serie, number, title) {
        let imgSrc = "img/albums/" + serie + "-" + number + "-" + title;
        return imgSrc.replace(/'|!|\?|\.|"|:|\$/g, "") + ".jpg";
    }

    /**
     * Generate a Bootstrap card with informations of the album
     * @return {HTMLDivElement}
     */
    generateHTMLCard() {
        return '<div class="col-6 col-lg-4 col-xl-3 mb-5">\n' +
            '               <div id="'+ this.id +'" class="card border border-dark">\n' +
            '                <img class="card-img" src="' + this.img + '" alt="Card image cap">\n' +
            '                   <div class="card-body">\n' +
            '                       <h5 class="card-title">' + this.serie + '</h5>\n' +
            '                       <h6 class="card-subtitle text-muted">' + this.number + ' ' + this.title + '</h6>\n' +
            '                       <small class="card-text">Par ' + this.author + '</small>\n' +
            '                       <p class="card-text  d-flex justify-content-end">' + this.price + ' €' + '</p>\n' +
            '                       <button class="btn btn-primary addCart">Ajouter au panier</button>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </div>'
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get serie() {
        return this._serie;
    }

    set serie(value) {
        this._serie = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        this._author = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get img() {
        return this._img;
    }

    set img(value) {
        this._img = value;
    }


    get number() {
        return this._number;
    }

    set number(value) {
        this._number = value;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }
}