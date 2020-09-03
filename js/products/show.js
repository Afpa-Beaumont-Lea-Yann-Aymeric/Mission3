$(document).ready(function () {
    albums.forEach(function (album) {
        let card = generateCard(album);
        $("#collection > .row").append(card);
    })
})

/**
 * Generate a Bootstrap card with informations of the album
 * @param {object} album
 * @return {string}
 */
function generateCard(album) {
    let title = album.titre;
    let author = auteurs.get(album.idAuteur).nom;
    let serie = series.get(album.idSerie).nom;
    let number = album.numero;
    let price = parseFloat(album.prix).toFixed(2).replace(".", ",");
    let imgSrc = "img/albums/" + serie + "-" + number + "-" + title;
    imgSrc = imgSrc.replace(/'|!|\?|\.|"|:|\$/g, "") + ".jpg";

    return '<div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-5">\n' +
        '               <div class="card border border-dark">\n' +
        '                <img class="card-img" src="' + imgSrc + '" alt="Card image cap">\n' +
        '                <div class="card-body">\n' +
        '                    <h5 class="card-title">' + serie + '</h5>\n' +
        '                    <h6 class="card-subtitle text-muted">' + number + ' ' + title + '</h6>\n' +
        '                    <small class="card-text">Par ' + author + '</small>\n' +
        '                    <p class="card-text  d-flex justify-content-end">' + price + ' €' + '</p>\n' +
        '                    <button class="btn btn-primary">Ajouter au panier</button>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>'
}