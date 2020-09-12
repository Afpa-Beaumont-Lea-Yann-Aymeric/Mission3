class Author {
    #name;
    #albums;

    constructor(name, albums) {
        this.#name = name;
        this.#albums = albums;
    }

    addAlbum(value){
        this.#albums.push(value);
    }

    get name(){
        return this.#name;
    }

    get albums(){
        return this.#albums;
    }
}