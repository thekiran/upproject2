(function ($) {

'use strict';

$(document).ready(function() {
// tabs
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })
// tabs end
// animation

    $(".section_header").animated("fadeInUp", "fadeOutDown");

    $(".animation_1").animated("fadeInUp", "fadeOutDown");
    $(".animation_2").animated("fadeInLeft", "fadeOutDown");
    $(".animation_3").animated("fadeInRight", "fadeOutDown");

    $(".left .resume_item").animated("fadeInLeft", "fadeOutDown");
    $(".right .resume_item").animated("fadeInRight", "fadeOutDown");
// animation end
// nav menu
    $('.mob-btn').click(function () {
       $(this).toggleClass('active-mob');
       $('.overlay').toggleClass('overlay-on');
       $('.container-header-sing').toggleClass('active-menu');
       $('.header').toggleClass('active-header');
       if($('img').hasClass('svg-white-logo')){
           $('.svg-logo').toggleClass('d-none');
           $('.svg-white-logo').toggleClass('d-block');
       }
    });
    if ($('.overlay').css('display') == 'none') {
        $('.overlay').click(function () {
            $('.mob-btn').toggleClass('active-mob');
            $('.overlay').toggleClass('overlay-on');
            $('.container-header-sing').toggleClass('active-menu');
            $('.header').toggleClass('active-header');
            if($('img').hasClass('svg-white-logo')){
                $('.svg-logo').toggleClass('d-none');
                $('.svg-white-logo').toggleClass('d-block');
            }
        });
    }


// nav menu end
    if ($(window).width() < 692){}
// swiper
        var swiper = new Swiper('.swiper-container', {
            // Default parameters
            slidesPerView: 3,
            breakpoints: {
                // when window width is <= 320px
                450: {
                    slidesPerView: 1,
                    // spaceBetween: 14,
                    centeredSlides: true,
                    pagination: {
                        el: '.swiper-pagination',
                        dynamicBullets: true,
                    },
                },
                // when window width is <= 480px
                992: {
                    slidesPerView: 2,
                    // spaceBetween: 20,
                },
            }
        });
// swiper end

    var mySwiper = new Swiper ('#slider1', {
        // Optional parameters
        slidesPerView: 1,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var testinominalsSwiper = new Swiper ('#slider2', {
        // Optional parameters
        slidesPerView: 1,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next-owners-reviews',
            prevEl: '.swiper-button-prev-owners-reviews',
        },
    });

    var aboutSwiper = new Swiper ('#slider-about', {
        // Optional parameters
        slidesPerView: 5,

        breakpoints: {
            // when window width is <= 320px
            450: {
                slidesPerView: 2,
                // spaceBetween: 14,

            },
            // when window width is <= 480px
            992: {
                slidesPerView: 3,
                // spaceBetween: 20,
            },
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next-about',
            prevEl: '.swiper-button-prev-about',
        },
    });
});



}(jQuery));