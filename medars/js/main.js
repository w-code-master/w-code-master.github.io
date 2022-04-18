$(document).ready(function(){


	$('.anim-zoomIn').animated('zoomIn');
	$('.anim-bounceIn').animated('bounceIn');
	$('.anim-fadeIn').animated('fadeIn');
	$('.anim-fadeInDown').animated('fadeInDown');
	$('.anim-fadeInUp').animated('fadeInUp');
	$('.anim-fadeInUpBig').animated('fadeInUpBig');
	$('.anim-fadeInRightBig').animated('fadeInRightBig');
	$('.anim-fadeInLeftBig').animated('fadeInLeftBig');
	$('.anim-fadeInDownBig').animated('fadeInDownBig');
	$('.anim-fadeInUpBig').animated('fadeInUpBig');


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