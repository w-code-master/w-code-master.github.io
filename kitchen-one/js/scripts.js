"use strict";

$(document).ready(function(){

	$('.client-slider').slick({
		dots: true,
		infinite: true,
		speed: 1000,
		autoplaySpeed: 5000,
		slidesToShow: 1,
		adaptiveHeight: true,
		variableWidth: true,
		autoplay: true,
		centerMode: true
	});


}); // end ready