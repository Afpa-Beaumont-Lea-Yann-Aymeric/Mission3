/** @author Aymeric Mary <aymeric.mary.pls@gmail.com> */

import {cart, collection, pagination, search} from "./main.js";

cart.updateHtml();

$(document).ready(function () {
    collection.showAlbums();

    $(document).click(function (event) {
        let target = event.target;
        if ($(target).is(":not(td)")) search.hideSuggest();
    })

    $(window).resize(function () {
        console.log(window.innerWidth);
        search.nbRowMax = Math.floor((window.innerHeight - 200) / 33);
        search.generateSuggest();
        pagination.generateHtml();
    })
})