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


	$(".intro .h2, .program .h2, .learning .h2, .packages .h2, .questions .h2").animated("fadeInDown");

	$(".header__action .btn, .program .btn").animated("bounceIn");

	$(".header .logo").animated("bounceIn");

	$(".header .follow-me strong").animated("fadeInLeft");
	$(".header .follow-me .btn-social").animated("zoomIn");

	$(".header__h1-text").animated("zoomIn");

	$(".header__action p").animated("fadeInDown");
	$(".header .click-on-the-button").animated("flipInX");

	$(".header__icon-play").animated("zoomInLeft");

	$(".service-info__item").animated("fadeInUp");

	$(".intro__info-number").animated("zoomInDown");
	$(".intro__info p").animated("fadeInDown");
	$(".intro__info [class*='i-']").animated("zoomIn");

	$(".hgroup__title, .hgroup__text").animated("fadeInDown");

	$(".features-list__item, .program__item").animated("fadeInUp");

	$(".teacher__item").animated("bounceIn");

	$(".teacher__author").animated("fadeInUp");

	$(".learning .slick-slide").animated("fadeInLeft");

	$(".learning__slider .prev, .learning__slider .next, .learning .slider-paging-info").animated("bounceIn");

	$(".packages__item").animated("fadeInLeft");

	$(".questions .beefup").animated("fadeInUp");


	// popup
	$('.btn-call-popup').magnificPopup({
		mainClass: 'my-mfp-zoom-in'
	});

});
