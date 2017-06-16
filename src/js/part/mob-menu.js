$(document).ready(function() {

    $('.mobile-menu-one').each(function() {
        if ( $(this).children('ul').length > 0 ) {
                $(this).addClass('j-submenu');
        }
    });

    $('.j-submenu a').on('click', function() {
        $(this).next('ul').slideToggle().toggleClass('j-open');
    });

});