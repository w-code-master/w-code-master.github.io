$(document).ready(function(){


	$('.anim-bounce').animated('bounce');
	$('.anim-flash').animated('flash');
	$('.anim-pulse').animated('pulse');
	$('.anim-rubberBand').animated('rubberBand');
	$('.anim-shake').animated('shake');
	$('.anim-swing').animated('swing');
	$('.anim-tada').animated('tada');
	$('.anim-wobble').animated('wobble');

	$('.anim-bounceIn').animated('bounceIn');
	$('.anim-bounceInDown').animated('bounceInDown');
	$('.anim-bounceInLeft').animated('bounceInLeft');
	$('.anim-bounceInRight').animated('bounceInRight');
	$('.anim-bounceInUp').animated('bounceInUp');
	$('.anim-bounceOut').animated('bounceOut');
	$('.anim-bounceOutDown').animated('bounceOutDown');
	$('.anim-bounceOutLeft').animated('bounceOutLeft');
	$('.anim-bounceOutRight').animated('bounceOutRight');
	$('.anim-bounceOutUp').animated('bounceOutUp');

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

	$('.anim-zoomIn').animated('zoomIn');
	$('.anim-fadeInUpBig').animated('fadeInUpBig');
	
	$('.anim-fadeOutUp').animated('fadeOutUp');


	new Swiper('.swiper-hello', {
	    effect: 'fade',
	    fadeEffect: {
	        crossFade: true
	    },
	    pagination: {
	        el: '.swiper-pagination',
	        type: 'bullets',
	        clickable: true
	    },
	    navigation: {
	        nextEl: '.swiper-next-page'
	    },
	});


	// maskedinput
	$(".masked-phone").mask("+7 (999) 999-99-99");


});