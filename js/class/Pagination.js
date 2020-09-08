class Pagination {
    /**
     * @param {Map} albums
     * @param {number} itemsPerPage
     */
    constructor(nbItems, itemsPerPage) {
        this._itemsPerPage = itemsPerPage;
        this._nbItems = nbItems;
        this._nbPages = Math.ceil(nbItems / itemsPerPage);
        this._currentPage = 1;
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
        return '<li class="page-item ' + (this._currentPage === value ? "active" : "") + ' ' + (disabled ? "disabled" : "") + '"><a class="page-link text-center" href="javascript:pagination.changePage(&quot;' + value + '&quot;)" style="width:44px">' + text + '</a></li>\n'
    }

    changePage(page) {
        if (page === "-") {
            this._currentPage--;
        } else if (page === "+") {
            this._currentPage++;
        } else {
            this._currentPage = parseInt(page);
        }
        if (this._currentPage < 1) this._currentPage = 1;
        if (this._currentPage > this._nbItems) this._currentPage = this._nbItems;

        this.generateHtml();
        collection.showAlbums();
    }

    generateHtml() {
        $(".pagination").empty();
        if (this._nbPages <= 1) {
            return null;
        }
        let rangeStart, rangeEnd;
        if (this._nbPages <= 9) {
            rangeStart = 1;
            rangeEnd = this._nbPages;
        } else {
            rangeStart = this._currentPage - 2;
            rangeEnd = this._currentPage + 2;
            if (this._currentPage <= 5) {
                rangeStart = 1;
                rangeEnd = 7;
            } else if (this._currentPage >= this._nbPages - 4) {
                rangeStart = this._nbPages - 6;
                rangeEnd = this._nbPages;
            }
        }
        let html = this.generateLi("-", this._currentPage === 1);
        if (this._currentPage >= 6 && this._nbPages > 9) {
            html += this.generateLi(1);
            html += this.generateLi("...", true);
        }
        for (let i = rangeStart; i <= rangeEnd; i++) {
            html += this.generateLi(i);
        }
        if (this._currentPage <= this._nbPages - 5 && this._nbPages > 9) {
            html += this.generateLi("...", true);
            html += this.generateLi(this._nbPages, this._currentPage === this._nbPages);
        }
        html += this.generateLi("+", this._currentPage >= this._nbPages);
        $(".pagination").append(html);
    }

    get itemsPerPage() {
        return this._itemsPerPage;
    }

    set itemsPerPage(value) {
        this._itemsPerPage = value;
    }

    get nbItems() {
        return this._nbItems;
    }

    set nbItems(value) {
        this._nbItems = value;
    }

    get nbPages() {
        return this._nbPages;
    }

    set nbPages(value) {
        this._nbPages = value;
    }

    get currentPage() {
        return this._currentPage;
    }

    set currentPage(value) {
        this._currentPage = value;
    }
}