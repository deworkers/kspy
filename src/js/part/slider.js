$(document).ready(function() {

    $('.slider-timer').animate({
        'width':'100%'
    }, 5000);

    var slider = new Swiper('.slider', {
        pagination: '.slider-page',
        paginationClickable: true,
        spaceBetween: 0,
        effect: 'fade',
        speed: 1000,
        autoplay: 5000,
        autoplayDisableOnInteraction: false,
        onSlideChangeEnd : function() {
        },
        onSlideChangeStart : function() {
            $('.slider-timer').css({
                'width':'0%'
            });
            setTimeout(function() {
                $('.slider-timer').animate({
                    'width':'100%'
                }, 5000);
            }, 100)
        }
    });   

    $('.swiper-pagination-bullet').on('click', function() {
        $('.slider-timer').stop( true, true ).css({
            'width':'0%'
        });
    });

});