window.addEventListener("load", function () {
	new Swiper(".hero-slider", {
		slidesPerView: 1,
		loop: true,
		parallax: true,
		navigation: {
			prevEl: "[data-hero-prev]",
			nextEl: "[data-hero-next]",
		},
	});
	new Swiper(".photos-slider", {
		slidesPerView: 1,
		loop: true,
		navigation: {
			prevEl: "[data-photos-prev]",
			nextEl: "[data-photos-next]",
		},
	});
});
