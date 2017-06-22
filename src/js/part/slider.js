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

    var newsSlider = new Swiper('.news-slider', {
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 5
    });

    $('.news-slider .swiper-wrapper, .preview-list').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function(item) {
                return item.el.attr('title');
            }
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
        
    });

    $('.video-one__show').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

});