/*
localStorage.removeItem("session");
throw '';
*/
let database = new Database(albums, series, authors);

let search = new Search();

let collection = new Collection(database.albums);

let pagination = new Pagination(collection.albumsToShow, 12);

let cart = new Cart(0, [], 0);

let session = new Session(JSON.parse(localStorage.getItem("session")));

cart.fromLocalStorage();

function headerFunctions() {
    let htmlAccount;
    if(session.user === null){
        htmlAccount = '<button id="login" class="btn btn-light font-weight-bold"\n' +
            '            <span>Me connecter </span><i class="fas fa-sort-down"></i>\n' +
            '        </button>'
    }else{
        htmlAccount = '<div class="dropdown">\n' +
            '  <button class="btn btn-light dropdown-toggle font-weight-bold" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
            '    Compte\n' +
            '  </button>\n' +
            '  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">\n' +
            '    <a id="profile" class="dropdown-item" href="profile.html"><i class="fas fa-user"></i> Profil</a>\n' +
            '    <a id="cart" class="dropdown-item" href="cart.html"><i class="fas fa-shopping-cart"></i> Panier</a>\n' +
            '    <div class="dropdown-divider"></div>\n' +
            '    <a id="signOut" class="dropdown-item" href=""><i class="fas fa-sign-out-alt"></i> Se déconnecter</a>\n' +
            '  </div>\n' +
            '</div>'
    }
    $("#account").html(htmlAccount);

    $("#signOut").click(function(){
        localStorage.removeItem("session");
    })

    $("#login").click(function () {
        $(this).children("i").toggleClass("fa-sort-up");
        $(this).children("i").toggleClass("fa-sort-down");
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
}