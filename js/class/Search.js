class Search {
    /**
     *
     * @param {string} query
     */
    constructor(query = null) {
        this._query = query;
        this._selectedRow = -1;
    }

    up() {
        $(".matched:eq(" + this._selectedRow + ")").removeClass("table-active");
        this._selectedRow--;
        if (this._selectedRow <= -1) {
            this._selectedRow = -1;
        } else {
            $(".matched:eq(" + this._selectedRow + ")").addClass("table-active");
        }
    }

    down() {
        $(".matched:eq(" + this._selectedRow + ")").removeClass("table-active");
        this._selectedRow++;
        if (this._selectedRow > $(".matched").length - 1) this._selectedRow = $(".matched").length - 1;
        $(".matched:eq(" + this._selectedRow + ")").addClass("table-active");
    }

    generateSuggest() {
        $("#suggest").empty();
        let max;
        if(this.query.length > 1){
            max = 0;
        }else{
            max = 3;
        }
        let html = '<table class="table table-sm w-100 mb-0">\n';
        html += this.generateCategory("series", max);
        html += this.generateCategory("auteurs", max);
        html += this.generateCategory("albums", max);
        $("#suggest").append(html);
    }

    generateCategory(category, max = 0) {
        let categoryName = category.charAt(0).toUpperCase() + category.slice(1);
        let count = 0;
        if (categoryName === "Series") categoryName = "Séries";
        let html = '<tr class="bg-dark">\n' +
            '                        <td class="text-white">' + categoryName + '</td>\n' +
            '                    </tr>\n';
        window[category].forEach(function (value) {
            value.nom.split(" ").forEach(function (word) {
                let regex = "^" + search.query.toLowerCase();
                if (count < max || max === 0) {
                    if (word.toLowerCase().search(regex) !== -1) {
                        count++;
                        html += '<tr class="matched">\n' +
                            '                        <td>' + value.nom + '</td>\n' +
                            '                    </tr>\n';
                    }
                }
            })
        })
        if (count === 0) {
            return '';
        }
        return html;
    }

    showSuggest() {
        if (this._query === "") {
            $("#suggest").hide();
        } else {
            $("#suggest").show();
        }
    }

    get query() {
        return this._query;
    }

    set query(value) {
        this._query = value;
    }

    get selectedRow() {
        return this._selectedRow;
    }

    set selectedRow(value) {
        this._selectedRow = value;
    }
}