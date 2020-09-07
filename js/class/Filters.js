class Filters {
    /**
     *
     * @param {Map} authors
     * @param {Map} series
     */
    constructor(authors, series) {
        let seriesArray = [];
        series.forEach(function (serie) {
            seriesArray.push(serie.nom);
        });
        this._series = seriesArray.sort();
    }

    generateCheckBox(value) {
        return '<div class="form-check">\n' +
            '        <input class="form-check-input" type="checkbox" name="' + value + '" id="' + value + '" checked>\n' +
            '        <label class="form-check-label" for="' + value + '">' + value + '</label>\n' +
            '   </div>'
    }

    generateHtml() {
        this._series.forEach(function (serie, key, series) {
            let nthCol = series.length / 4;
            $("#series .col:eq(" + nthCol + ")").append(filters.generateCheckBox(serie.nom));
        })
    }
}