

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
    spaceBetween: 50,
    slidesPerView: 2,
    navigation: {
        nextEl: '.reviews-swiper-next',
        prevEl: '.reviews-swiper-prev',
     },
 });