/* global $, alert, console, window*/

$(function () {
    
    'use strict';
    $('body').niceScroll({
        cursorcolor: "#f7600e",
        cursorwidth: "7px",
        cursorborderradius: "none",
        cursorborder: "1px solid #f7600e"
        
    });
    
    $('.header').height($(window).height() - 250);
    
    $('.arrow i').click(function () {
        $('html, body').animate({
            scrollTop: $('.features').offset().top
            
        }, 1000);
       
    });
    
//    $('.our-works .show button').hover(function () {
//        $(this).toggleClass('hover');
//    });
    
    $('.show button').click(function () {
        $('.row3').fadeIn(1000);
    });
    var leftArrow = $('.fa-chevron-left'),
        rightArrow = $('.fa-chevron-right');
    
    function checkclients() {
        $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
        $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
    }
    checkclients();
    $('.testi i').click(function () {
        if ($(this).hasClass('fa-chevron-left')) {
            $('.testi .active').removeClass('active').fadeOut(100, function () {
                $(this).prev('.client').addClass('active').fadeIn();
                checkclients();
            });
        } else {
            
            $('.testi .active').removeClass('active').fadeOut(100, function () {
                $(this).next('.client').addClass('active').fadeIn();
                checkclients();
            });  
        } 
        
    });
    
    
});