export class Search {
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
        let categorySelected = $(".table-active").attr('category');
        let suggestSelected = $(".table-active").attr('name');
        if (suggestSelected !== "") {
            this.#query = suggestSelected;
        }
        $("#search").val(this.#query).focus();
        $("#suggest").hide();
        this.launchSearch(categorySelected);
    }

    launchSearch(category) {
        let found = database[category].find(element => element.name === this.#query)
        if (category === "albums") {
            collection.albumsToShow = [found];
        } else {
            collection.albumsToShow = found.albums;
        }
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

        let move = false;
        $(document).mousemove(function () {
            move = true;
        })

        $(".matched").hover(function () {
            if (move) {
                $(".matched").removeClass("table-active");
                $(this).addClass("table-active");
            }
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
                break;
            default:
                throw new Error("Veuillez entrer une catégorie valide : series, authors or albums");
        }

        let html = '<tr class="bg-dark">\n' +
            '                        <td class="text-white">' + categoryName + '</td>\n' +
            '                    </tr>\n';

        this.#matched[category].forEach(function (value) {
            html += '<tr id="matched' + search.#count + '" class="matched" category="' + category + '" name="' + value.name + '"><td>' + value.name + (category === 'albums' ? ' (' + value.serie + ')' : '') + '</td></tr>\n';
            count++;
            search.#count++;
        })
        if (count === 0) {
            return '';
        } else {
            return html;
        }
    }

    /**
     * @param {string[]} categories
     * @returns {Object}
     */
    setMatched(categories) {
        this.#matched = {series: [], albums: [], authors: []};
        categories.forEach(function (category) {
            database[category].forEach(function (value) {
                let regex = "^" + search.query.toLowerCase();
                if (value.name.toLowerCase().search(regex) !== -1) {
                    search.#matched[category].push(value);
                }
            })
        })
    }

    spreadMatched() {
        let count = 0;
        let spreadMatched = {series: [], albums: [], authors: []};
        let nbMax = 0;
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
        if(count <= 0) this.hideSuggest();
    }

    showSuggest() {
        if (this.#query === "") {
            $("#suggest").hide();
        } else {
            $("#suggest").show();
        }
    }

    hideSuggest(){
        $("#suggest").hide();
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

    set nbRowMax(value) {
        this.#nbRowMax = value;
    }
}