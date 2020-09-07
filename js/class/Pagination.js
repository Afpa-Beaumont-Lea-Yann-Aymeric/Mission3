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

    generateLi(value) {
        let text
        let disabled = this._currentPage === 1 && value === "-" || this._currentPage === this._nbPages && value === "+";
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
        if (this._currentPage > 45) this._currentPage = 45;

        this.generateHtml();
        collection.showAlbums();
        $("#suggest").show();
    }

    generateHtml() {
        $(".pagination").empty();
        let rangeStart = this._currentPage - 2;
        let rangeEnd = this._currentPage + 2;
        if (this._currentPage <= 5) {
            rangeStart = 1;
            rangeEnd = 7;
        } else if (this._currentPage >= this._nbPages - 4) {
            rangeStart = this._nbPages - 6;
            rangeEnd = this._nbPages;
        }
        let html = this.generateLi("-");
        if (this._currentPage >= 6) {
            let disabled = this._currentPage === 1;
            html += this.generateLi(1);
            html += this.generateLi("...", true);
        }
        for (let i = rangeStart; i <= rangeEnd; i++) {
            html += this.generateLi(i);
        }
        if (this._currentPage <= this._nbPages - 5) {
            html += this.generateLi("...", true);
            html += this.generateLi(this._nbPages, this._currentPage === this._nbPages);
        }
        html += this.generateLi("+");
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