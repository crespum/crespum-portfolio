// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 70) {
        $(".navbar-fixed-top").addClass("top-nav-collapse").removeClass("navbar-light");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse").addClass("navbar-light");
    }
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});