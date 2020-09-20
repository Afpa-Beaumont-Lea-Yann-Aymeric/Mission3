/** @author Aymeric Mary <aymeric.mary.pls@gmail.com> */

import {cart} from "../main.js";

export class DetailsCart {

    /** Generate HTML Table to show in cart.html */
    static generateHTML() {
        $("#detailsCart").empty();
        let html = ''
        if (cart.nbAlbums <= 0) {
            $("#detailsCart").hide();
            $("#cartEmpty").show();
            $("#pay").hide();
        } else {
            $("#detailsCart").show();
            $("#cartEmpty").hide();
            html += '<thead>\n' +
                '            <tr>\n' +
                '                <th scope="col"></th>\n' +
                '                <th scope="col">Nom</th>\n' +
                '                <th scope="col">Série</th>\n' +
                '                <th scope="col">Auteurs</th>\n' +
                '                <th scope="col">Quantité</th>\n' +
                '            </tr>\n' +
                '            </thead>\n' +
                '            <tbody>\n';
            cart.albums.forEach(function (album) {
                html += '<tr>\n' +
                    '                <td><img src="' + album.img + '" alt="" style="width:80px"></td>\n' +
                    '                <td class="align-middle">' + album.name + '</td>\n' +
                    '                <td class="align-middle">' + album.serie + '</td>\n' +
                    '                <td class="align-middle">' + album.author + '</td>\n' +
                    '                <td class="align-middle">\n' +
                    '                           <ul class="pagination pagination-sm mt-1">\n' +
                    '                                <li class="page-item">\n' +
                    '                                    <a id="decrement-' + album.id + '" class="decrement page-link" href="#">-</a>\n' +
                    '                                </li>\n' +
                    '                                <li class="page-item active"><a class="nbItems page-link">' + album.count + '</a></li>\n' +
                    '                                <li class="page-item"><a href="#" id="increment-' + album.id + '" class="increment page-link nav-link">+</a></li>\n' +
                    '                                <li class="itemPrice m-auto font-weight-bold"></li>\n' +
                    '                            </ul>\n' +
                    '               </td>\n' +
                    '            </tr>\n';
            })
            html += '</tbody>';
        }
        $("#detailsCart").append(html);

        /** When a button + is clicked on an album in the cart, increment the count of this album */
        $(".increment").click(function (e) {
            let id = e.target.id.split("-")[1];
            cart.incrementItem(id);
            DetailsCart.generateHTML();
        })

        /** When a button - is clicked on an album in the cart, decrement the count of this album */
        $(".decrement").click(function (e) {
            let id = e.target.id.split("-")[1];
            cart.decrementItem(id);
            DetailsCart.generateHTML();
        })
    }
}