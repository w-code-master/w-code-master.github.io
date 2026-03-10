$(document).ready(function () {
	// $('.anim-flash').animated('flash');
	// $('.anim-pulse').animated('pulse');
	// $('.anim-rubberBand').animated('rubberBand');
	// $('.anim-shake').animated('shake');
	// $('.anim-swing').animated('swing');
	// $('.anim-tada').animated('tada');
	// $('.anim-wobble').animated('wobble');
	// $('.anim-hinge').animated('hinge');

	// $('.anim-flip').animated('flip');
	// $('.anim-flipInX').animated('flipInX');
	// $('.anim-flipInY').animated('flipInY');
	// $('.anim-flipOutX').animated('flipOutX');
	// $('.anim-flipOutY').animated('flipOutY');

	// $('.anim-lightSpeedIn').animated('lightSpeedIn');
	// $('.anim-lightSpeedOut').animated('lightSpeedOut');

	// $('.anim-rollIn').animated('rollIn');
	// $('.anim-rollOut').animated('rollOut');

	// $('.anim-rotateIn').animated('rotateIn');
	// $('.anim-rotateInDownLeft').animated('rotateInDownLeft');
	// $('.anim-rotateInDownRight').animated('rotateInDownRight');
	// $('.anim-rotateInUpLeft').animated('rotateInUpLeft');
	// $('.anim-rotateInUpRight').animated('rotateInUpRight');
	// $('.anim-rotateOut').animated('rotateOut');
	// $('.anim-rotateOutDownLeft').animated('rotateOutDownLeft');
	// $('.anim-rotateOutDownRight').animated('rotateOutDownRight');
	// $('.anim-rotateOutUpLeft').animated('rotateOutUpLeft');
	// $('.anim-rotateOutUpRight').animated('rotateOutUpRight');

	$(".anim-zoomIn").animated("zoomIn");
	// $('.anim-zoomInDown').animated('zoomInDown');
	// $('.anim-zoomInLeft').animated('zoomInLeft');
	// $('.anim-zoomInRight').animated('zoomInRight');
	// $('.anim-zoomInUp').animated('zoomInUp');
	// $('.anim-zoomOut').animated('zoomOut');
	// $('.anim-zoomOutDown').animated('zoomOutDown');
	// $('.anim-zoomOutLeft').animated('zoomOutLeft');
	// $('.anim-zoomOutRight').animated('zoomOutRight');
	// $('.anim-zoomOutUp').animated('zoomOutUp');

	$(".anim-bounce").animated("bounce");
	// $('.anim-bounceOut').animated('bounceOut');
	// $('.anim-bounceOutUp').animated('bounceOutUp');
	// $('.anim-bounceOutDown').animated('bounceOutDown');
	// $('.anim-bounceOutLeft').animated('bounceOutLeft');
	// $('.anim-bounceOutRight').animated('bounceOutRight');
	$(".anim-bounceIn").animated("bounceIn");
	// $('.anim-bounceInLeft').animated('bounceInLeft');
	// $('.anim-bounceInRight').animated('bounceInRight');
	// $('.anim-bounceInDown').animated('bounceInDown');
	// $('.anim-bounceInUp').animated('bounceInUp');

	// $('.anim-fadeIn').animated('fadeIn');
	$(".anim-fadeInDown").animated("fadeInDown");
	// $('.anim-fadeInDownBig').animated('fadeInDownBig');
	$(".anim-fadeInLeft").animated("fadeInLeft");
	// $('.anim-fadeInLeftBig').animated('fadeInLeftBig');
	$(".anim-fadeInRight").animated("fadeInRight");
	// $('.anim-fadeInRightBig').animated('fadeInRightBig');
	$(".anim-fadeInUp").animated("fadeInUp");
	$(".anim-fadeInUpBig").animated("fadeInUpBig");
	// $('.anim-fadeOut').animated('fadeOut');
	// $('.anim-fadeOutDown').animated('fadeOutDown');
	// $('.anim-fadeOutDownBig').animated('fadeOutDownBig');
	// $('.anim-fadeOutLeft').animated('fadeOutLeft');
	// $('.anim-fadeOutLeftBig').animated('fadeOutLeftBig');
	// $('.anim-fadeOutRight').animated('fadeOutRight');
	// $('.anim-fadeOutRightBig').animated('fadeOutRightBig');
	// $('.anim-fadeOutUp').animated('fadeOutUp');
	// $('.anim-fadeOutUpBig').animated('fadeOutUpBig');

	$(".anim-slideInDown").animated("slideInDown");
	$(".anim-slideInLeft").animated("slideInLeft");
	$(".anim-slideInRight").animated("slideInRight");
	$(".anim-slideInUp").animated("slideOutUp");
	// $('.anim-slideOutDown').animated('slideOutDown');
	// $('.anim-slideOutLeft').animated('slideOutLeft');
	// $('.anim-slideOutRight').animated('slideOutRight');
	// $('.anim-slideOutUp').animated('slideOutUp');

	// mobile panel
	$(".header__burger").click(function () {
		$(".header__burger").toggleClass("active");
		$(".mobile-panel").toggleClass("active");

		$("html").toggleClass("overflow-y-hidden");

		if ($(".mobile-panel").is(":visible")) {
			$(".mobile-panel").fadeOut(0);
		} else {
			$(".mobile-panel").fadeIn(0);
		}
	});
	$(".mobile-panel__close").click(function () {
		$("html").removeClass("overflow-y-hidden");
		$(".mobile-panel").removeClass("active");
		$(".header__burger").removeClass("active");
		$(".mobile-panel").fadeOut(0);
	});

	$("#modal-submit-request").iziModal({
		overlayColor: "rgba(67, 67, 67, 0.66)",
		padding: 10,
	});
	$("#look-review").iziModal();

	$(".catalog-tabs").easytabs({
		tabs: ".catalog-nav__item",
		defaultTab: ".catalog-nav__item:nth-child(1)",
		updateHash: false,
	});

	$(".faq-item").beefup({
		openSingle: true,
		trigger: ".faq-head",
		content: ".faq-body",
	});

	new Swiper(".advantages-slider", {
		slidesPerView: "auto",
		centeredSlides: false,
		loop: true,
	});

	new Swiper(".working-slider", {
		slidesPerView: 3,
		spaceBetween: 15,
		loop: true,
		autoplay: {
			delay: 3000,
		},
		breakpoints: {
			768: {
				spaceBetween: 25,
			},
			1630: {
				slidesPerView: 4,
			},
			1760: {
				spaceBetween: 45,
			},
		},
	});

	new Swiper(".catalog-slider", {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		// autoplay: {
		//     delay: 5000,
		// },
		navigation: {
			nextEl: ".swiper-next",
			prevEl: ".swiper-prev",
		},
		breakpoints: {
			992: {
				slidesPerView: 3,
				spaceBetween: 27,
			},
		},
	});

	new Swiper(".project-slider", {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		navigation: {
			nextEl: ".swiper-next",
			prevEl: ".swiper-prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 143,
			},
		},
	});

	const lookSlider = new Swiper(".look-slider", {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		breakpoints: {
			576: {
				spaceBetween: 26,
				slidesPerView: 3,
			},
			768: {
				spaceBetween: 48,
				slidesPerView: 3,
			},
		},
		navigation: {
			nextEl: ".swiper-next",
			prevEl: ".swiper-prev",
		},
	});

	const reviewSlider = new Swiper(".reviews-slider", {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		// autoplay: {
		// 	delay: 2500,
		// 	disableOnInteraction: false,
		// },
		breakpoints: {
			420: {
				slidesPerView: 2,
				spaceBetween: 16,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 28,
			},
		},
	});

	new Swiper(".quality-slider", {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		pagination: {
			el: ".quality-swiper-pagination",
		},
		// autoplay: {
		// 	delay: 2500,
		// 	disableOnInteraction: false,
		// },
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
		},
	});

	// Gallery-1
	$("._gallery-1").slick({
		slidesToShow: 1,
		asNavFor: "._thumbs-1",
		arrows: false,
	});
	$("._thumbs-1").slick({
		asNavFor: "._gallery-1",
		infinite: false,
		slidesToShow: 4,
		focusOnSelect: true,
		appendArrows: false,
	});

	// Gallery-2
	$("._gallery-2").slick({
		slidesToShow: 1,
		asNavFor: "._thumbs-2",
		arrows: false,
	});
	$("._thumbs-2").slick({
		asNavFor: "._gallery-2",
		infinite: false,
		slidesToShow: 4,
		focusOnSelect: true,
		appendArrows: false,
	});

	// Gallery-3
	$("._gallery-3").slick({
		slidesToShow: 1,
		asNavFor: "._thumbs-3",
		arrows: false,
	});
	$("._thumbs-3").slick({
		asNavFor: "._gallery-3",
		infinite: false,
		slidesToShow: 4,
		focusOnSelect: true,
		appendArrows: false,
	});

	// Gallery-4
	$("._gallery-4").slick({
		slidesToShow: 1,
		asNavFor: "._thumbs-4",
		arrows: false,
	});
	$("._thumbs-4").slick({
		asNavFor: "._gallery-4",
		infinite: false,
		slidesToShow: 4,
		focusOnSelect: true,
		appendArrows: false,
	});
});
