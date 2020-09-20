/** @author Aymeric Mary <aymeric.mary.pls@gmail.com> */

import {collection, pagination} from "../main.js";

export class Pagination {
    #itemsPerPage;
    #nbItems;
    #nbPages;
    #currentPage;

    /**
     * @param {Integer} nbItems - Number of albums to show
     * @param {Integer} itemsPerPage - Number of item per page
     */
    constructor(nbItems, itemsPerPage) {
        this.#itemsPerPage = itemsPerPage;
        this.#nbItems = nbItems;
        this.#nbPages = Math.ceil(nbItems / itemsPerPage);
        this.#currentPage = 1;

    }

    /**
     * Generate a button of the pagination
     * @param {String} value - The value of the button
     * @param {boolean} disabled - True if the button must be disable, false otherwise
     * @returns {HTMLLIElement} - Return the li tha contain th button
     */
    generateLi(value, disabled = false) {
        let text
        if (value === "-") {
            text = "&ltri;"
        } else if (value === "+") {
            text = "&rtri;"
        } else {
            text = value;
        }

        return '<li class="page-item ' + (this.#currentPage === value ? "active" : "") + ' ' + (disabled ? "disabled" : "") + '"><a id="page' + value + '" class="page-link text-center changePage" href="#" role="button" style="width:44px">' + text + '</a></li>';
    }

    /**
     * Change the current page
     * @param {String} page - The number of the new page, or "+" for increment or "-" for decrement
     * @returns {void}
     */
    changePage(page) {
        if (page === "-") {
            this.#currentPage--;
        } else if (page === "+") {
            this.#currentPage++;
        } else {
            this.#currentPage = parseInt(page);
        }
        if (this.#currentPage < 1) this.#currentPage = 1;
        if (this.#currentPage > this.#nbItems) this.#currentPage = this.#nbItems;

        collection.showAlbums();
    }

    /**
     * Generate the HTML of the pagination
     * @returns {void}
     */
    generateHtml() {
        let nbButton = Math.floor($(".pagination-collection").innerWidth() / 50);
        if (nbButton % 2 === 0) nbButton--;
        if (nbButton > 19) nbButton = 19;
        if (nbButton < 5) nbButton = 5;

        $(".pagination-collection").empty();
        if (this.#nbPages <= 1) {
            return null;
        }
        let rangeStart, rangeEnd;
        if (this.#nbPages <= nbButton) {
            rangeStart = 1;
            rangeEnd = this.#nbPages;
        } else {
            rangeStart = this.#currentPage - (nbButton - 5) / 2;
            rangeEnd = this.#currentPage + (nbButton - 5) / 2;
            if (this.#currentPage <= Math.floor(nbButton / 2)) {
                rangeStart = 1;
                rangeEnd = nbButton - 2;
            } else if (this.#currentPage >= this.#nbPages - Math.floor(nbButton / 2)) {
                rangeStart = this.#nbPages - (nbButton - 3);
                rangeEnd = this.#nbPages;
            }
        }
        let html = this.generateLi("-", this.#currentPage === 1);
        if (this.#currentPage >= nbButton - Math.floor(nbButton / 2) && this.#nbPages > nbButton) {
            html += this.generateLi(1);
            html += this.generateLi("...", true);
        }
        for (let i = rangeStart; i <= rangeEnd; i++) {
            html += this.generateLi(i);
        }
        if (this.#currentPage <= this.#nbPages - Math.ceil(nbButton / 2) && this.#nbPages > nbButton) {
            html += this.generateLi("...", true);
            html += this.generateLi(this.#nbPages, this.#currentPage === this.#nbPages);
        }
        html += this.generateLi("+", this.#currentPage >= this.#nbPages);
        $(".pagination-collection").append(html);
        $(".changePage").click(function (e) {
            e.preventDefault();
            let page = $(this).attr("id").replace("page", "");
            pagination.changePage(page);
        })
    }

    get itemsPerPage() {
        return this.#itemsPerPage;
    }

    set itemsPerPage(value) {
        this.#itemsPerPage = value;
    }

    get nbItems() {
        return this.#nbItems;
    }

    set nbItems(value) {
        this.#nbItems = value;
    }

    get nbPages() {
        return this.#nbPages;
    }

    set nbPages(value) {
        this.#nbPages = value;
    }

    get currentPage() {
        return this.#currentPage;
    }

    set currentPage(value) {
        this.#currentPage = value;
    }
}