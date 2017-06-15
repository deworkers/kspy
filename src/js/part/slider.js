$(document).ready(function() {
    
    $('.slider-wrap').cycle({
        speed: 1500,
        timeout: 4000,
        cssBefore: 'nextSlide',
        pager:  '.slider-page', 
        after: function() {
            $('.slider-timer').animate({
                'width':'100%'
            }, 4000);
            setTimeout(function() {
                $('.slider-timer').css('width', '0%');
            }, 4500);
        },
        before: function() {
            
        },
        pagerAnchorBuilder: function(idx, slide) { 
            return '<a class="slider-page__one" href="#"></a>'; 
        } 
    });

});