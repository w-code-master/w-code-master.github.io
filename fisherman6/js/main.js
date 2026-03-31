$(document).ready(function () {
	// intlTelInput validation
	var inputKeyTel = document.querySelector(".inputKeyTel");
	inputKeyTel.addEventListener("keypress", function (e) {
		if (e.which < 48 || e.which > 57) {
			e.preventDefault();
		}
	});

	new Swiper(".current-tours-slider", {
		slidesPerView: 4,
		spaceBetween: 10,
		loop: true,
		autoHeight: true,
		navigation: {
			nextEl: ".current-tours__next",
			prevEl: ".current-tours__prev",
		},
	});

	new Swiper(".slider-photo", {
		slidesPerView: 4,
		spaceBetween: 10,
		loop: true,
		navigation: {
			nextEl: ".slider-photo__next",
			prevEl: ".slider-photo__prev",
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
		spaceBetween: 10,
		autoplay: {
			delay: 0,
			enabled: true,
		},
		freeMode: true,
		loop: true,
	});

	new Swiper(".video-slider", {
		slidesPerView: 5,
		spaceBetween: 10,
		loop: true,
	});

	new Swiper(".galleryArticle", {
		slidesPerView: 3,
		spaceBetween: 10,
		loop: true,
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

	$(".program-tabs").easytabs({
		tabs: ".program-tabs__item",
		defaultTab: ".program-tabs__item:nth-child(1)",
		updateHash: false,
	});
});
