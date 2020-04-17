// Start Responsive Menu
$(document).ready(function () {
    $(".toggleSpan").click(function () {
        $("ul").toggle(500);
    });

    $(".toggleSpan1").click(function () {
        $(this).hide();
        $(".toggleSpan2").show();
    });
    $(".toggleSpan2").click(function () {
        $(this).hide();
        $(".toggleSpan1").show();
    });
});
// Finish Responsive Menu

//Start Stick Menu
$(document).ready(function () {
    var s = $("#sticker");
    var pos = s.position();
    $(window).scroll(function () {
        var windowpos = $(window).scrollTop();
        if (windowpos >= pos.top) {
            s.addClass("stick");
        } else {
            s.removeClass("stick");
        }
    });
});
//Finish Stick Menu
