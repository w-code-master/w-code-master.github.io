$(function() {

	$('.beefup').beefup({
	  openSingle: true
	});


	//custom function showing current slide
	var $status = $('.slider-paging-info');
	var $slickElement = $('.learning__slider');

	$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
		var i = (currentSlide ? currentSlide : 0) + 1;
		$status.html('<span>' + i + '</span>' + ' из ' + slick.slideCount + ' этапов');
	});

	$(".learning__slider").slick({
		autoplay: false,
		dots: true,
		slidesToShow: 4,
		variableWidth: true,
		prevArrow: '<div class="prev"><i class="i-left"></i></div>',
		nextArrow: '<div class="next"><i class="i-right"></i></div>',
		customPaging : function(slider, i) {
			var thumb = $(slider.$slides[i]).data();
		},
		responsive: [
		    {
		      breakpoint: 576,
		      settings: {
		        slidesToShow: 1,
		        variableWidth: false,
		        adaptiveHeight: true
		      }
		    }
		]
	});


});
