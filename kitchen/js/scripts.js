"use strict";

$(document).ready(function(){

	$('.client-slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		variableWidth: true,
		autoplay: true
	});


}); // end ready