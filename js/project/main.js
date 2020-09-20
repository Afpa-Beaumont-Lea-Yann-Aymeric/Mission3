/** @author Aymeric Mary <aymeric.mary.pls@gmail.com> */

import {Cart} from "./cart/Cart.js";
import {Database} from './database/Database.js';
import {Search} from "./search/Search.js";
import {Collection} from "./collection/Collection.js";
import {Pagination} from "./collection/Pagination.js";
import {Session} from "./session/Session.js";
import {User} from "./session/User.js";
import {WeatherAPI} from "./WeatherAPI.js";

let database = new Database();

let search = new Search();

let collection = new Collection(database.albums);

let pagination = new Pagination(collection.albumsToShow, 12);

let cart = new Cart(0, [], 0);

let session = new Session(JSON.parse(localStorage.getItem("session")));

cart.fromLocalStorage();


let htmlAccount;
if (session.user === null) {
    htmlAccount = '<button id="login" class="btn btn-light font-weight-bold"\n' +
        '            <span><i class="fas fa-sign-in-alt"></i> Connexion </span><i id="arrowConnect" class="fas fa-sort-down"></i>\n' +
        '        </button>'
} else {
    htmlAccount = '<div class="dropdown">\n' +
        '  <button class="btn btn-light dropdown-toggle font-weight-bold" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
        '    <span class="d-none d-sm-inline">Compte</span><span class="d-sm-none"><i class="fas fa-user"></i></span>\n' +
        '  </button>\n' +
        '  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">\n' +
        '    <a id="cartAccount" class="dropdown-item" href="cart.html"><i class="fas fa-shopping-cart"></i> Panier</a>\n' +
        '    <div class="dropdown-divider"></div>\n' +
        '    <a id="signOut" class="dropdown-item" href=""><i class="fas fa-sign-out-alt"></i> Se déconnecter</a>\n' +
        '  </div>\n' +
        '</div>'
}
$("#account").html(htmlAccount);

$("#signOut").click(function () {
    localStorage.removeItem("session");
})

$("#login").click(function () {
    $("#arrowConnect").toggleClass("fa-sort-up");
    $("#arrowConnect").toggleClass("fa-sort-down");
    $("#loginTooltip").toggleClass("d-none");
})

$("#loginForm").submit(function (e) {
    let email = $("#emailLogin").val();
    let password = $("#passwordLogin").val();
    let users = JSON.parse(localStorage.getItem("users"));
    users.forEach(function (item) {
        if (item.email === email && item.password === password) {
            let user = new User(item.firstName, item.lastName, item.address, item.zip, item.city, item.email, item.password);
            session.user = user;
            localStorage.setItem("session", JSON.stringify(item));
        }
    })
})

$("#emptyCart").click(function(e){
    e.preventDefault();
    cart.empty();
})

let weatherAPI = new WeatherAPI("e43e71fe3e04a0d3dc7256b71cb6c29c");
setInterval(weatherAPI.show(),5000);

export{
    cart,
    pagination,
    search,
    session,
    collection,
    database
}