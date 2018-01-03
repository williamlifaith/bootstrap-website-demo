$(document).ready(function () {
$("#navbarSupportedContent .dropdown-menu a").click(function () {
    var href = $(this).attr('href');
    $("#nav-tab a[href= '" + href + "']").tab("show");
});

});