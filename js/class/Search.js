class Search {
    #query;
    #selectedRow;
    #count;
    #matched;
    #nbRowMax;
    /**
     * @param {string} query
     */
    constructor(query = '') {
        this.#query = query;
        this.#selectedRow = -1;
        this.#count = 0;
        this.#matched = {series: [], albums: [], authors: []};
        this.#nbRowMax = Math.floor((window.innerHeight - 200) / 33);
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

    selectSuggest() {
        let suggestSelected = $(".table-active").children("td").text();
        if (suggestSelected !== "") {
            this.#query = suggestSelected;
        }
        $("#search").val(this.#query).focus();
        $("#suggest").hide();
        this.launchSearch();
    }

    launchSearch() {
        let albumsMatched = [];
        let propertyToMatched = ["#title", "#serie", "#author"]
        collection.albumsToShow.forEach(function (item, key) {
                let matched = false;
                propertyToMatched.forEach(function (property) {
                    if (item[property].search(search.query) !== -1) {
                        matched = true;
                    }
                })
                if (matched) albumsMatched.push(item);
            }
        )
        collection.albumsMatched = albumsMatched;
        collection.showAlbums();
    }

    generateSuggest() {
        $("#suggest").empty();
        this.#count = 0;
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

        $(".matched").click(function () {
            search.selectSuggest();
        })
    }

    generateCategory(category) {
        let count = 0, categoryName;
        switch (category) {
            case "series":
                categoryName = "Séries";
                break;
            case "authors":
                categoryName = "Auteurs";
                break;
            case "albums":
                categoryName = "Albums";

        }

        let html = '<tr class="bg-dark">\n' +
            '                        <td class="text-white">' + categoryName + '</td>\n' +
            '                    </tr>\n';

        this.#matched[category].forEach(function (value) {
            html += '<tr id="matched' + search.#count + '" class="matched"><td>' + value.nom + '</td></tr>\n';
            count++;
            search.#count++;
        })
        if (count === 0) {
            return '';
        }
        return html;
    }

    /**
     * @param {string[]} categories
     * @returns {Object}
     */
    setMatched(categories) {
        this.#matched = {series: [], albums: [], authors: []};
        categories.forEach(function (category) {
            window[category].forEach(function (value) {
                let regex = "^" + search.query.toLowerCase();
                if (value.name.toLowerCase().search(regex) !== -1) {
                    search.#matched[category].push(value);
                }
            })
        })
    }

    spreadMatched() {
        let count = 0, spreadMatched = {series: [], albums: [], authors: []}, nbMax = 0;
        for (let category in this.#matched) {
            if (this.#matched[category].length > nbMax) {
                nbMax = this.#matched[category].length;
            }
        }
        for (let i = 0; i < nbMax; i++) {
            if (count >= this.#nbRowMax) break;
            for (let category in this.#matched) {
                if (spreadMatched[category].length < this.#matched[category].length) {
                    spreadMatched[category].push(this.#matched[category][i]);
                    count++;
                }
            }
        }
        this.#matched = spreadMatched;
    }

    showSuggest() {
        if (this.#query === "") {
            $("#suggest").hide();
        } else {
            $("#suggest").show();
        }
    }

    get query() {
        return this.#query;
    }

    set query(value) {
        this.#query = value;
    }

    get selectedRow() {
        return this.#selectedRow;
    }

    set selectedRow(value) {
        this.#selectedRow = value;
    }


    get count() {
        return this.#count;
    }

    set count(value) {
        this.#count = value;
    }
}