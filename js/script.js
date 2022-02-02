$(function () {
    'use strict';

    // fix menu start
    let menuOff = $('#menu').offset().top

    $(window).scroll(function () {
        let scrolling = $(this).scrollTop()

        if (scrolling > menuOff) {
            $('#menu').addClass('fix_menu')
        } else {
            $('#menu').removeClass('fix_menu')
        }
    });
    // fix menu end




    // bc to top start
    $('#bc_top').click(function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 2000)
    })


    $(window).scroll(function () {
        let scrolling = $(this).scrollTop()

        if (scrolling > 200) {
            $('#bc_top').fadeIn()
        } else {
            $('#bc_top').fadeOut()
        }
    })
    // bc to top end 

    // bc to top start 
    // bc to top start 

    // bc to top start 
    // bc to top start 

    // bc to top start 
    // bc to top start 

    // bc to top start 
    // bc to top start 


});