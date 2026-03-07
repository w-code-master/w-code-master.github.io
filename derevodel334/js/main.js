$(document).ready(function () {
	// mobile nav
	$(".header__burger").click(function () {
		$(".header__burger").toggleClass("active");
		$(".mobile-nav").toggleClass("active");

		$("html").toggleClass("overflow-y-hidden");

		if ($(".mobile-nav").is(":visible")) {
			$(".mobile-nav").fadeOut(0);
		} else {
			$(".mobile-nav").fadeIn(0);
		}
	});

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
		slidesPerView: 3,
		spaceBetween: 48,
		loop: true,
		navigation: {
			nextEl: ".swiper-next",
			prevEl: ".swiper-prev",
		},
		// breakpoints: {
		//     992: {
		//        slidesPerView: 3
		//     }
		// }
	});

	const reviewSlider = new Swiper(".reviews-slider", {
		slidesPerView: 3,
		spaceBetween: 28,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		// breakpoints: {
		//     992: {
		//        slidesPerView: 3
		//     }
		// }
	});

	new Swiper(".quality__slider", {
		slidesPerView: 3,
		spaceBetween: 0,
		loop: true,
		// autoplay: {
		// 	delay: 2500,
		// 	disableOnInteraction: false,
		// },
		// breakpoints: {
		//     992: {
		//        slidesPerView: 3
		//     }
		// }
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
