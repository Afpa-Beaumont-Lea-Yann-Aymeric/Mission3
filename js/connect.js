$("#login").click(function () {
    $(this).children("i").toggleClass("fa-sort-up");
    $(this).children("i").toggleClass("fa-sort-down");
    $("#loginTooltip").toggleClass("d-none");
})