/** @author Aymeric Mary <aymeric.mary.pls@gmail.com> */

export class Author {
    #name;
    #albums;

    /**
     *
     * @param {string} name - The name of the author
     * @param {Album[]} albums - An array of Album write byt his author
     */
    constructor(name, albums) {
        this.#name = name;
        this.#albums = albums;
    }

    /**
     * Add an album to this author
     * @param {Album} value
     */
    addAlbum(album){
        this.#albums.push(album);
    }

    get name(){
        return this.#name;
    }

    get albums(){
        return this.#albums;
    }
}