export class Pagination {
    #itemsPerPage;
    #nbItems;
    #nbPages;
    #currentPage;
    /**
     * @param {integer} nbItems
     * @param {integer} itemsPerPage
     */
    constructor(nbItems, itemsPerPage) {
        this.#itemsPerPage = itemsPerPage;
        this.#nbItems = nbItems;
        this.#nbPages = Math.ceil(nbItems / itemsPerPage);
        this.#currentPage = 1;
    }

    generateLi(value, disabled = false) {
        let text
        if (value === "-") {
            text = "&ltri;"
        } else if (value === "+") {
            text = "&rtri;"
        } else {
            text = value;
        }
        return '<li class="page-item ' + (this.#currentPage === value ? "active" : "") + ' ' + (disabled ? "disabled" : "") + '"><a class="page-link text-center" href="javascript:pagination.changePage(&quot;' + value + '&quot;)" style="width:44px">' + text + '</a></li>\n'
    }

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

        this.generateHtml();
        collection.showAlbums();
    }

    generateHtml() {
        $(".pagination-collection").empty();
        if (this.#nbPages <= 1) {
            return null;
        }
        let rangeStart, rangeEnd;
        if (this.#nbPages <= 9) {
            rangeStart = 1;
            rangeEnd = this.#nbPages;
        } else {
            rangeStart = this.#currentPage - 2;
            rangeEnd = this.#currentPage + 2;
            if (this.#currentPage <= 5) {
                rangeStart = 1;
                rangeEnd = 7;
            } else if (this.#currentPage >= this.#nbPages - 4) {
                rangeStart = this.#nbPages - 6;
                rangeEnd = this.#nbPages;
            }
        }
        let html = this.generateLi("-", this.#currentPage === 1);
        if (this.#currentPage >= 6 && this.#nbPages > 9) {
            html += this.generateLi(1);
            html += this.generateLi("...", true);
        }
        for (let i = rangeStart; i <= rangeEnd; i++) {
            html += this.generateLi(i);
        }
        if (this.#currentPage <= this.#nbPages - 5 && this.#nbPages > 9) {
            html += this.generateLi("...", true);
            html += this.generateLi(this.#nbPages, this.#currentPage === this.#nbPages);
        }
        html += this.generateLi("+", this.#currentPage >= this.#nbPages);
        $(".pagination-collection").append(html);
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