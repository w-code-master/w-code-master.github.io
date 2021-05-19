"use strict";

(function($) {
  $.fn.animated = function(inEffect) {
    $(this).each(function() {
      var ths = $(this);
      ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
        if (dir === "down") {
          ths.addClass(inEffect).css("opacity", "1");
        };
      }, {
        offset: "80%"
      });

    });
  };
})(jQuery);

$(document).ready(function(){

	$('.reviews-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: 30,
		prevArrow: '<span class="slick-arrow--left"><svg><use href="img/sprite.svg#i-left"></use></svg></span>',
		nextArrow: '<span class="slick-arrow--right"><svg><use href="img/sprite.svg#i-right"></use></svg></span>'
	});

	$('.anim-zoomIn').animated('zoomIn');
	$('.anim-bounceIn').animated('bounceIn');
	$('.anim-fadeIn').animated('fadeIn');
	$('.anim-fadeInUp').animated('fadeInUp');
	$('.anim-fadeInDown').animated('fadeInDown');
	$('.anim-fadeInLeft').animated('fadeInLeft');
	$('.anim-fadeInRight').animated('fadeInRight');

	$('.anim-slideInUp').animated('slideInUp');
	$('.anim-slideInDown').animated('slideInDown');
	$('.anim-slideInLeft').animated('slideInLeft');
	$('.anim-slideInRight').animated('slideInRight');

	$('.anim-fadeInRightBig').animated('fadeInRightBig');
	$('.anim-fadeInLeftBig').animated('fadeInLeftBig');
	$('.anim-fadeInDownBig').animated('fadeInDownBig');
	$('.anim-fadeInUpBig').animated('fadeInUpBig');


}); // end ready