$(document).ready(function() {

    // For Sticky Navigation 
    $('.js--features-section').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    })


    // Scroll On Buttons
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--plans-section').offset().top}, 1000);
    });

    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--features-section').offset().top}, 500);
    });

    // Scroll On Nav Links
    $('#id_food-delivery').click(function() {
        $('html, body').animate({scrollTop: $('.js--features-section').offset().top}, 1000);
    });

    $('#id_how-it-works').click(function() {
        $('html, body').animate({scrollTop: $('.js--steps-section').offset().top}, 1000);
    });

    $('#id_our-cities').click(function() {
        $('html, body').animate({scrollTop: $('.js--cities-section').offset().top}, 1000);
    });

    $('#id_signup').click(function() {
        $('html, body').animate({scrollTop: $('.js--plans-section').offset().top}, 1000);
    });


    // Animations On Scroll
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animate__animated animate__pulse');
    }, {
        offset: '30%'
    });

    let is_navOpen = false;

    $('.js--mobile-nav').click(function() {
        is_navOpen = !is_navOpen;
        if (is_navOpen) {
            document.getElementById('id_nav-icon').name = 'close-sharp';
        } 
        else {
            document.getElementById('id_nav-icon').name = 'menu';
        }

        var nav = $('.js--main-nav');
        nav.slideToggle(200);

    });

});