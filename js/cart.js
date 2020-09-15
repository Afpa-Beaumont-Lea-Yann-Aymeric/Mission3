let cart = new Cart(0, [], 0);

cart.fromLocalStorage();

$(document).ready(function () {
    DetailsCart.generateHTML();
})