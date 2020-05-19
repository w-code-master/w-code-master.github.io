$(function() {

	$('.liker').on('click', function(){
	  $(this).toggleClass('active');
	});

	$('.banner-slider').flickity({
		cellAlign: 'left',
		groupCells: true,
		adaptiveHeight: true,
		prevNextButtons: false
	});

	$('.popular-slider').flickity({
		cellAlign: 'left',
		groupCells: true,
		adaptiveHeight: true,
		pageDots: false,
		wrapAround: true,
		groupCells: 1,
		arrowShape: { 
		  x0: 30,
		  x1: 60, y1: 30,
		  x2: 60, y2: 20,
		  x3: 40
		}
	});

});
