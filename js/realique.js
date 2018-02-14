// ▒█▀▀█ █▀▀ █▀▀█ █░░ ░▀░ █▀▀█ █░░█ █▀▀ 　 ░░░▒█ ▒█▀▀▀█
// ▒█▄▄▀ █▀▀ █▄▄█ █░░ ▀█▀ █░░█ █░░█ █▀▀ 　 ░▄░▒█ ░▀▀▀▄▄
// ▒█░▒█ ▀▀▀ ▀░░▀ ▀▀▀ ▀▀▀ ▀▀▀█ ░▀▀▀ ▀▀▀ 　 ▒█▄▄█ ▒█▄▄▄█

$(document).ready(function(){

    // Animating the "go-to" anchor scroll
    $('a.anchor').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top -20
        }, 800);

        $('.collapse').removeClass('in');

    });



    // Synchronized Project Sliders
    $('.pj_main_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-mini'
    });
    $('.slider-mini').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.pj_main_slider',
        dots: true,
        centerMode: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });



    // Disable Bootstrap carousel autoplay
    $('.carousel').carousel({
        interval: false
    });



    // Animating the standard hamburger-menu
    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
    });


});