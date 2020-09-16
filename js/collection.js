cart.updateHtml();

$(document).ready(function () {
    collection.showAlbums();
    pagination.generateHtml();

    $("#search").keydown(function (e) {
        let value;
        switch (e.key) {
            case "ArrowDown":
                e.preventDefault();
                search.down();
                break;
            case "ArrowUp":
                e.preventDefault();
                search.up();
                break;
            case "Escape":
                search.hideSuggest();
                break;
            case "Enter":
                e.preventDefault();
                search.selectSuggest();
                break;
            case "Backspace":
                value = $(this).val().slice(0, -1);
            default:
                if (e.key.length === 1) value = $(this).val() + e.key;
                search.query = value;
                search.showSuggest();
                search.generateSuggest();
        }
    })

    $(document).click(function (event) {
        let target = event.target;
        if ($(target).is(":not(td)")) search.hideSuggest();
    })

    $(window).resize(function () {
        search.nbRowMax = Math.floor((window.innerHeight - 200) / 33);
        search.generateSuggest();
    })
})