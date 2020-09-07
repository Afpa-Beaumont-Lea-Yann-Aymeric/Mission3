class Album {
    /**
     * @param album
     */
    constructor(id) {
        this._id = id;
        let album = albums.get(id);
        this._title = album.nom;
        this._number = album.numero;
        this._serie = series.get(album.idSerie).nom;
        this._author = authors.get(album.idAuteur).nom;
        this._price = parseFloat(album.prix);
        this._formatedPrice = this.formatPrice(this._price);
        this._count = 1;
        this._img = this.generateSrcImg(this._serie,this._number,this._title);
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
        return $('<div class="col-12 col-sm-6 col-lg-6 col-xl-4 mb-5" style="min-height: 1100px">\n' +
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

    get formatedPrice() {
        return this._formatedPrice;
    }

    set formatedPrice(value) {
        this._formatedPrice = value;
    }

    get count() {
        return this._count;
    }

    set count(value) {
        this._count = value;
    }
}