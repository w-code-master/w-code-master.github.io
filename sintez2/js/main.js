

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
    slidesPerView: 1,
    autoHeight: false,
    navigation: {
        nextEl: '.reviews-swiper-next',
        prevEl: '.reviews-swiper-prev',
     },
    //  breakpoints: {
    //     0: {
    //         slidesPerView: 1
    //     },
    //     768: {
    //         slidesPerView: 2
    //     },
    //     992: {
    //         spaceBetween: 50
            
    //     }
    // }
 });

 $('.job-beefup__item').beefup({
    openSingle: true
 });


$('.anim-zoomIn').animated('zoomIn');

$('.anim-bounceIn').animated('bounceIn');
$('.anim-bounceInLeft').animated('bounceInLeft');
$('.anim-bounceInRight').animated('bounceInRight');
$('.anim-bounceInDown').animated('bounceInDown');
$('.anim-bounceInUp').animated('bounceInUp');

$('.anim-fadeIn').animated('fadeIn');
$('.anim-fadeInDown').animated('fadeInDown');
$('.anim-fadeInUp').animated('fadeInUp');

$('.anim-fadeInRightBig').animated('fadeInRightBig');
$('.anim-fadeInLeftBig').animated('fadeInLeftBig');
$('.anim-fadeInDownBig').animated('fadeInDownBig');
$('.anim-fadeInUpBig').animated('fadeInUpBig');

$('.anim-fadeInDown').animated('fadeInDown');
$('.anim-fadeInUp').animated('fadeInUp');
$('.anim-fadeInLeft').animated('fadeInLeft');
$('.anim-fadeInRight').animated('fadeInRight');

$('.anim-slideInLeft').animated('slideInLeft');
$('.anim-slideInRight').animated('slideInRight');
$('.anim-slideInDown').animated('slideInDown');
$('.anim-slideInUp').animated('slideInUp');

$('.anim-bounceInLeft').animated('bounceInLeft');

$('.anim-rotateInDownLeft').animated('rotateInDownLeft');

$('.anim-rubberBand').animated('rubberBand');