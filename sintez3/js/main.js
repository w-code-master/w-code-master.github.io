$(function() {

var panelFix = $('.header-top');

$(window).scroll(function() {
    if( $(this).scrollTop() > 70) {
        panelFix.addClass("_scrolled")
    }
    else {
        panelFix.removeClass("_scrolled")
    }
});



 $('.job-beefup__item').beefup({
    openSingle: true
 });

 $('input[type="tel"]').mask('+7 (999) 999 - 99 - 99');


 
$('.anim-flash').animated('flash');
$('.anim-pulse').animated('pulse');
$('.anim-rubberBand').animated('rubberBand');
$('.anim-shake').animated('shake');
$('.anim-swing').animated('swing');
$('.anim-tada').animated('tada');
$('.anim-wobble').animated('wobble');
$('.anim-hinge').animated('hinge');

$('.anim-flip').animated('flip');
$('.anim-flipInX').animated('flipInX');
$('.anim-flipInY').animated('flipInY');
$('.anim-flipOutX').animated('flipOutX');
$('.anim-flipOutY').animated('flipOutY');

$('.anim-lightSpeedIn').animated('lightSpeedIn');
$('.anim-lightSpeedOut').animated('lightSpeedOut');

$('.anim-rollIn').animated('rollIn');
$('.anim-rollOut').animated('rollOut');

$('.anim-rotateIn').animated('rotateIn');
$('.anim-rotateInDownLeft').animated('rotateInDownLeft');
$('.anim-rotateInDownRight').animated('rotateInDownRight');
$('.anim-rotateInUpLeft').animated('rotateInUpLeft');
$('.anim-rotateInUpRight').animated('rotateInUpRight');
$('.anim-rotateOut').animated('rotateOut');
$('.anim-rotateOutDownLeft').animated('rotateOutDownLeft');
$('.anim-rotateOutDownRight').animated('rotateOutDownRight');
$('.anim-rotateOutUpLeft').animated('rotateOutUpLeft');
$('.anim-rotateOutUpRight').animated('rotateOutUpRight');

$('.anim-zoomIn').animated('zoomIn');
$('.anim-zoomInDown').animated('zoomInDown');
$('.anim-zoomInLeft').animated('zoomInLeft');
$('.anim-zoomInRight').animated('zoomInRight');
$('.anim-zoomInUp').animated('zoomInUp');
$('.anim-zoomOut').animated('zoomOut');
$('.anim-zoomOutDown').animated('zoomOutDown');
$('.anim-zoomOutLeft').animated('zoomOutLeft');
$('.anim-zoomOutRight').animated('zoomOutRight');
$('.anim-zoomOutUp').animated('zoomOutUp');

$('.anim-bounce').animated('bounce');
$('.anim-bounceOut').animated('bounceOut');
$('.anim-bounceOutUp').animated('bounceOutUp');
$('.anim-bounceOutDown').animated('bounceOutDown');
$('.anim-bounceOutLeft').animated('bounceOutLeft');
$('.anim-bounceOutRight').animated('bounceOutRight');
$('.anim-bounceIn').animated('bounceIn');
$('.anim-bounceInLeft').animated('bounceInLeft');
$('.anim-bounceInRight').animated('bounceInRight');
$('.anim-bounceInDown').animated('bounceInDown');
$('.anim-bounceInUp').animated('bounceInUp');

$('.anim-fadeIn').animated('fadeIn');
$('.anim-fadeInDown').animated('fadeInDown');
$('.anim-fadeInDownBig').animated('fadeInDownBig');
$('.anim-fadeInLeft').animated('fadeInLeft');
$('.anim-fadeInLeftBig').animated('fadeInLeftBig');
$('.anim-fadeInRight').animated('fadeInRight');
$('.anim-fadeInRightBig').animated('fadeInRightBig');
$('.anim-fadeInUp').animated('fadeInUp');
$('.anim-fadeInUpBig').animated('fadeInUpBig');
$('.anim-fadeOut').animated('fadeOut');
$('.anim-fadeOutDown').animated('fadeOutDown');
$('.anim-fadeOutDownBig').animated('fadeOutDownBig');
$('.anim-fadeOutLeft').animated('fadeOutLeft');
$('.anim-fadeOutLeftBig').animated('fadeOutLeftBig');
$('.anim-fadeOutRight').animated('fadeOutRight');
$('.anim-fadeOutRightBig').animated('fadeOutRightBig');
$('.anim-fadeOutUp').animated('fadeOutUp');
$('.anim-fadeOutUpBig').animated('fadeOutUpBig');

$('.anim-slideInDown').animated('slideInDown');
$('.anim-slideInLeft').animated('slideInLeft');
$('.anim-slideInRight').animated('slideInRight');
$('.anim-slideOutUp').animated('slideOutUp');
$('.anim-slideOutDown').animated('slideOutDown');
$('.anim-slideOutLeft').animated('slideOutLeft');
$('.anim-slideOutRight').animated('slideOutRight');
$('.anim-slideOutUp').animated('slideOutUp');




var sticky = new Sticky('.work-heading-sticky');


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

});