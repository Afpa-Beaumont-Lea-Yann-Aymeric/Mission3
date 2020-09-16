export class Serie {
    #id;
    #name;
    #albums;

    /**
     *
     * @param {string} id
     * @param {string} name
     * @param {array} albums
     */
    constructor(id, name, albums) {
        this.#id = id;
        this.#name = name;
        this.#albums = albums;
    }

    addAlbum(value){
        this.#albums.push(value);
    }

    get id(){
        return this.#id;
    }

    get name(){
        return this.#name;
    }

    get albums(){
        return this.#albums;
    }

    set albums(value){
        this.#albums = value;
    }
}