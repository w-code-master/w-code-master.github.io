$(document).ready(function () {
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
});
