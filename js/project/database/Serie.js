/** @author Aymeric Mary <aymeric.mary.pls@gmail.com> */

export class Serie {
    #id;
    #name;
    #albums;

    /**
     * @param {string} id - The id of the serie
     * @param {string} name - The name of the serie
     * @param {Album[]} albums - An array of all albums in this serie
     */
    constructor(id, name, albums) {
        this.#id = id;
        this.#name = name;
        this.#albums = albums;
    }

    /**
     * Add an Album to this serie
     * @param {Album} value
     */
    addAlbum(album){
        this.#albums.push(album);
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