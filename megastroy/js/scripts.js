"use strict"

$(document).ready(function(){

	$('.reviews-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: 30
	});

}); // end ready