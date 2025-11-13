$(function() {
    $('.anim-zoomIn').animated('zoomIn');
	$('.anim-bounceIn').animated('bounceIn');
	$('.anim-bounceInLeft').animated('bounceInLeft');
	$('.anim-bounceInRight').animated('bounceInRight');
	$('.anim-bounceInDown').animated('bounceInDown');
	$('.anim-bounceInUp').animated('bounceInUp');
	$('.anim-fadeIn').animated('fadeIn');
	$('.anim-fadeInLeft').animated('fadeInLeft');
	$('.anim-fadeInRight').animated('fadeInRight');
	$('.anim-fadeInDown').animated('fadeInDown');
	$('.anim-fadeInUp').animated('fadeInUp');
	$('.anim-fadeInRightBig').animated('fadeInRightBig');
	$('.anim-fadeInLeftBig').animated('fadeInLeftBig');
	$('.anim-fadeInDownBig').animated('fadeInDownBig');
	$('.anim-fadeInUpBig').animated('fadeInUpBig');
	$('.anim-slideInLeft').animated('slideInLeft');
	$('.anim-slideInRight').animated('slideInRight');
	$('.anim-slideInDown').animated('slideInDown');
	$('.anim-slideInUp').animated('slideInUp');

	$('.header-offer-action .btn').magnificPopup({
		type: 'inline',
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});

	$('input[type="tel"]').mask('+7 (999) 999-99-99');
    
	const swiperSteps = new Swiper('.swiper-service', {
		slidesPerView: 1,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
		  },
		  effect: 'flip',
		  flipEffect: {
			slideShadows: false,
		  },
	 });
});