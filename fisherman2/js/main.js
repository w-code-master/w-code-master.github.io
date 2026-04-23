$(document).ready(function () {
	// mobile nav
	$(".burger").click(function () {
		$(".burger").toggleClass("active");
		$("html").toggleClass("overflow-y-hidden");
	});
	$(".nav li a, .mobile-nav__close").click(function () {
		$(".mobile-nav").fadeOut(300);
		$("html").removeClass("overflow-y-hidden");
		$(".burger").removeClass("active");
	});
	$(".burger").click(function () {
		if ($(".mobile-nav").is(":visible")) {
			$(".mobile-nav").fadeOut(300);
			$("html").removeClass("overflow-y-hidden");
		} else {
			$(".mobile-nav").fadeIn(300);
			$("html").addClass("overflow-y-hidden");
		}
	});

	// intlTelInput validation
	var inputKeyTel = document.querySelector(".inputKeyTel");
	inputKeyTel.addEventListener("keypress", function (e) {
		if (e.which < 48 || e.which > 57) {
			e.preventDefault();
		}
	});

	new Swiper(".current-tours-slider", {
		slidesPerView: 1.35,
		spaceBetween: 8,
		loop: true,
		autoHeight: true,
		navigation: {
			nextEl: ".current-tours__next",
			prevEl: ".current-tours__prev",
		},
		breakpoints: {
			440: {
				slidesPerView: 1.7,
			},
			576: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			},
		},

		pagination: {
			el: ".swiper-pagination",
			dynamicBullets: true,
		},
	});

	new Swiper(".slider-photo", {
		slidesPerView: 2,
		spaceBetween: 6,
		loop: true,
		navigation: {
			nextEl: ".slider-photo__next",
			prevEl: ".slider-photo__prev",
		},
		pagination: {
			el: ".swiper-pagination",
			dynamicBullets: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 3,
				spaceBetween: 8,
			},
			1200: {
				slidesPerView: 4,
			},
		},
	});

	new Swiper(".slider-image", {
		slidesPerView: 1,
		loop: true,
		navigation: {
			nextEl: ".slider-image__next",
			prevEl: ".slider-image__prev",
		},
	});

	new Swiper(".slider-photos", {
		slidesPerView: "auto",
		speed: 10000,
		spaceBetween: 8,
		autoplay: {
			delay: 0,
			enabled: true,
		},
		freeMode: true,
		loop: true,
	});

	new Swiper(".video-slider", {
		slidesPerView: 1.5,
		spaceBetween: 8,
		loop: true,
		breakpoints: {
			440: {
				slidesPerView: 2,
			},
			576: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 5,
			},
		},
		pagination: {
			el: ".swiper-pagination",
			dynamicBullets: true,
		},
	});

	new Swiper(".galleryArticle", {
		slidesPerView: 1,
		spaceBetween: 8,
		loop: true,
		breakpoints: {
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
		},
		pagination: {
			el: ".swiper-pagination",
			dynamicBullets: true,
		},
	});

	new Swiper(".sliderCards", {
		slidesPerView: 1.35,
		spaceBetween: 6,
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			dynamicBullets: true,
		},
		breakpoints: {
			440: {
				slidesPerView: 1.7,
			},
		},
	});

	new Swiper(".sliderArticles", {
		slidesPerView: 1,
		spaceBetween: 10,
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			dynamicBullets: true,
		},
		navigation: {
			nextEl: ".sliderArticles__next",
			prevEl: ".sliderArticles__prev",
		},
		breakpoints: {
			576: {
				slidesPerView: 1.5,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1100: {
				slidesPerView: 4,
			},
		},
	});

	new Swiper(".sliderArticleMore", {
		slidesPerView: 1,
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			dynamicBullets: true,
		},
	});

	$(".entry-modal-form").magnificPopup({
		removalDelay: 300,
		mainClass: "mfp-fade",
		fixedContentPos: true,
		fixedBgPos: true,
	});

	$(".faq-item").beefup({
		openSingle: true,
		trigger: ".faq-head",
		content: ".faq-body",
	});
	$(".spoiler-item").beefup({
		trigger: ".spoiler-head",
		content: ".spoiler-body",
	});
});
