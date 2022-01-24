$(function() {

	// menu
	$(".sandwich-box").click(function() {
	  $(".sandwich-box").toggleClass("active");
	});
	$(".nav li a").click(function() {
		$(".wrapper-nav").fadeOut(300);
	});
	$(".sandwich-box").click(function() {
		if($(".wrapper-nav").is(":visible")) {
			$(".wrapper-nav").fadeOut(300);
		} else {
			$(".wrapper-nav").fadeIn(300);
		};
	});


	$('.anim-zoomIn').animated('zoomIn');
	$('.anim-bounceIn').animated('bounceIn');
	$('.anim-fadeIn').animated('fadeIn');
	$('.anim-fadeInDown').animated('fadeInDown');
	$('.anim-fadeInUp').animated('fadeInUp');
	$('.anim-fadeInUpBig').animated('fadeInUpBig');
	
	$('.header .logo__img, .header .logo__ico').animated('zoomIn');
	$('.header .logo__txt').animated('fadeIn');
	$('.header .soc-bar_itm').animated('bounceIn');
	$('.header .call-info__tel').animated('fadeInDown');
	$('.header .call-info__txt').animated('fadeInUp');
	$('.header .togg-lang').animated('bounceIn');

	$('.anim-fadeInRightBig').animated('fadeInRightBig');
	$('.anim-fadeInLeftBig').animated('fadeInLeftBig');
	$('.anim-fadeInDownBig').animated('fadeInDownBig');
	$('.anim-fadeInUpBig').animated('fadeInUpBig');

	$('.anim-fadeInDown').animated('fadeInDown');
	$('.anim-fadeInLeft').animated('fadeInLeft');
	$('.anim-fadeInRight').animated('fadeInRight');

});
