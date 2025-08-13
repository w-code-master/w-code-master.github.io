

var panelFix = $('.header-top');

$(window).scroll(function() {
    if( $(this).scrollTop() > 70) {
        panelFix.addClass("_scrolled")
    }
    else {
        panelFix.removeClass("_scrolled")
    }
});

const reviewsSwiper = new Swiper('.reviews-swiper', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 2,
    autoHeight: false,
    navigation: {
        nextEl: '.reviews-swiper-next',
        prevEl: '.reviews-swiper-prev',
     },
     breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        992: {
            spaceBetween: 50
            
        }
    }
 });