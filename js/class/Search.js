class Search {
    /**
     * @param {string} query
     */
    constructor(query = null) {
        this._query = query;
        this._selectedRow = -1;
        this._count = 0;
        this._matched = {series: [], albums: [], authors: []};
        this._nbRowMax = Math.floor((window.innerHeight - 200) / 33);
    }

    up() {
        let newId;
        let active = $(".table-active");
        if (active.length !== 0) {
            let idActive = parseInt(active.attr("id").replace("matched", ""));
            newId = idActive - 1;
            if (newId > -1) {
                $("#matched" + newId).addClass("table-active");
            }
            active.removeClass("table-active");
        }
    }

    down() {
        let newId;
        let active = $(".table-active");
        if (active.length === 0) {
            newId = 0;
        } else {
            let idActive = parseInt(active.attr("id").replace("matched", ""));
            newId = idActive + 1;
            if (newId > $(".matched").length - 1) {
                newId = $(".matched").length - 1;
            }
        }
        active.removeClass("table-active");
        $("#matched" + newId).addClass("table-active");
    }

    selectSuggest(){
        let suggestSelected = $(".matched.table-actve").children("td");
        console.log(suggestSelected);
        $("#search").val(suggestSelected);
    }

    generateSuggest() {
        $("#suggest").empty();
        this._count = 0;
        this.setMatched(["series", "albums", "authors"]);
        this.spreadMatched();
        let html = '<table class="table table-sm w-100 mb-0">\n';
        html += this.generateCategory("series");
        html += this.generateCategory("authors");
        html += this.generateCategory("albums");
        $("#suggest").append(html);
        $(".matched").hover(function () {
            $(".matched").removeClass("table-active");
            $(this).addClass("table-active");
        }, function () {
            $(this).removeClass("table-active");
        })
    }

    generateCategory(category) {
        let count = 0;
        let categoryName = category.charAt(0).toUpperCase() + category.slice(1);
        if (categoryName === "Series") categoryName = "Séries";
        let html = '<tr class="bg-dark">\n' +
            '                        <td class="text-white">' + categoryName + '</td>\n' +
            '                    </tr>\n';

        this._matched[category].forEach(function (value) {
            html += '<tr id="matched' + search._count + '" class="matched"><td>' + value + '</td></tr>\n';
            count++;
            search._count++;
        })
        if (count === 0) {
            return '';
        }
        return html;
    }

    /**
     *
     * @param {string[]} categories
     * @returns {Object}
     */
    setMatched(categories) {
        this._matched = {series: [], albums: [], authors: []};
        categories.forEach(function (category) {
            window[category].forEach(function (value) {
                let regex = "^" + search.query.toLowerCase();
                if (value.nom.toLowerCase().search(regex) !== -1) {
                    search._matched[category].push(value.nom);
                }
            })
        })
    }

    spreadMatched() {
        let count = 0, spreadMatched = {series: [], albums: [], authors: []}, nbMax = 0;
        for (let category in this._matched) {
            if (this._matched[category].length > nbMax) {
                nbMax = this._matched[category].length;
            }
        }
        for (let i = 0; i < nbMax; i++) {
            if (count >= this._nbRowMax) break;
            for (let category in this._matched) {
                if (spreadMatched[category].length < this._matched[category].length) {
                    spreadMatched[category].push(this._matched[category][i]);
                    count++;
                }
            }
        }
        this._matched = spreadMatched;
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


    get count() {
        return this._count;
    }

    set count(value) {
        this._count = value;
    }
}