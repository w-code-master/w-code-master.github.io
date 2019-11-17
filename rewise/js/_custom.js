document.addEventListener("DOMContentLoaded", function() {

$('select').niceSelect();

$('.main-slider').owlCarousel({
	items: 1,
	nav: true,
	navText: ['<i class="i-left"></i>', '<i class="i-right"></i>'],
	loop: true
});

});
