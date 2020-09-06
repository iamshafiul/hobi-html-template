var $ = jQuery.noConflict();

$(document).ready(function() {

    //Sticky Menu
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 1) {
            $('.sticky').removeClass('scroll-header');
        } else {
            $('.sticky').addClass('scroll-header');
        }
    });


    // var map = new GMaps({
    map = new GMaps({
        div: '#map',
        lat: 24.8949,
        lng: 91.8687
    });

    map.addMarker({
        lat: 24.8949,
        lng: 91.8687,
        title: 'Bangladesh',
        click: function(e) {
            alert('You clicked in this marker');
        }
    });

    //Counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //Wow Active
    new WOW().init();

    //popup video
    $('.popUp').magnificPopup({
        type: 'iframe'
    });

    //MixItUp Active
    var mixer = mixitup('.myMix');

    //Slick Active
    $('.testimonial-active').slick({
        infinite: true,
        arrows: true,
        prevArrow: '<span class="fa fa-arrow-right"></span>',
        nextArrow: '<span class="fa fa-arrow-left active"></span>',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
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

    //Mean Menu Active
    jQuery('#mobile-menu-active').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: '.mobile-menu',
    });


});