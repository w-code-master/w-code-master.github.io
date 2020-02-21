$(function() {

	// menu
	$(".sandwich-box").click(function() {
	  $(".sandwich-box").toggleClass("active");
	});
	$(".nav li a").click(function() {
		$(".wrapper-nav").fadeOut(600);
		$(".sandwich-box").toggleClass("active");
	});
	$(".sandwich-box").click(function() {
		if($(".wrapper-nav").is(":visible")) {
			$(".wrapper-nav").fadeOut(600);
		} else {
			$(".wrapper-nav").fadeIn(600);
		};
	});

	///////////////////////////////////////////////////////////
	var headerScene = document.querySelector('.header__scene');
	var headerSceneInstance = new Parallax(headerScene);

	var whyScene = document.querySelector('.why__scene');
	var whySceneInstance = new Parallax(whyScene);

	var ourScene = document.querySelector('.our__scene');
	var ourSceneInstance = new Parallax(ourScene);

	var clientsScene = document.querySelector('.clients__scene');
	var clientsSceneInstance = new Parallax(clientsScene);

	var aboutScene = document.querySelector('.about__scene');
	var aboutSceneInstance = new Parallax(aboutScene);

	var cooperationScene = document.querySelector('.cooperation__scene');
	var cooperationSceneInstance = new Parallax(cooperationScene);

	var footerScene = document.querySelector('.footer__scene');
	var footerSceneInstance = new Parallax(footerScene);


	//////////////////////////////
	$('.slider-portfolio').slick({
		arrows: false,
		asNavFor: '.slider-services'
	});


	$('.slider-services').slick({
		asNavFor: '.slider-portfolio',
		adaptiveHeight: true,
		dots: true
	});
	$('.slider-services .slick-dots li:nth-child(1) button').html('<span class="text">Мобильные приложения</span>');
	$('.slider-services .slick-dots li:nth-child(2) button').html('<span class="text">Дизайн и брендинг</span>');
	$('.slider-services .slick-dots li:nth-child(3) button').html('<span class="text">Трафик и продвижение</span>');
	$('.slider-services .slick-dots li:nth-child(4) button').html('<span class="text">Сайты <br> и лендинги</span>');


	$('.ipad-screen').slick({
		asNavFor: '.ipad-slider',
		arrows: false,
		autoplay: true
	});

	$('.ipad-slider').slick({
		asNavFor: '.ipad-screen'
	});

	$('.our-team__slider').slick({
		variableWidth: true,
		slidesToShow: 6,
		centerMode: true,
		autoplay: true
	});


	$('.slick-prev').html('<i class="i-left"></i>');
	$('.slick-next').html('<i class="i-right"></i>');


	$('.about__tabs').tabulous();


	$('select').niceSelect();


	$('.popup-btn').magnificPopup({
		mainClass: 'my-mfp-zoom-in'
	});

});
