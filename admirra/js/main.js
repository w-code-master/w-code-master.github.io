$(document).ready(function () {
	new Swiper(".integrations-slider", {
		slidesPerView: "auto",
		speed: 5000,
		spaceBetween: 15,
		autoplay: {
			delay: 0,
			enabled: true,
		},
		effect: "linear",
		freeMode: true,
		loop: true,
	});

	$(".faq-item").beefup({
		openSingle: true,
		trigger: ".faq-head",
		content: ".faq-body",
	});
});
