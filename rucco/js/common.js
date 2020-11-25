$(function() {

	// menu
	$(".sandwich-box").click(function() {
		$(".sandwich-box").toggleClass("active");
	 });
	 $(".nav li a").click(function() {
		 $(".wrapper-nav").fadeOut(300);
		 $(".sandwich-box").toggleClass("active");
	 });
	 $(".sandwich-box").click(function() {
		 if($(".wrapper-nav").is(":visible")) {
			 $(".wrapper-nav").fadeOut(300);
		 } else {
			 $(".wrapper-nav").fadeIn(300);
		 };
	 });


	 $('.service-slider').flickity({
		cellAlign: 'left',
		groupCells: true,
		adaptiveHeight: true,
		prevNextButtons: false,
		autoPlay: true,
		pauseAutoPlayOnHover: false
	});


	$('.anim-zoomIn').animated('zoomIn');
	$('.anim-bounceIn').animated('bounceIn');
	$('.anim-fadeIn').animated('fadeIn');
	$('.anim-fadeInDown').animated('fadeInDown');
	$('.anim-fadeInUp').animated('fadeInUp');
	$('.anim-fadeInUpBig').animated('fadeInUpBig');
	
	$('.anim-fadeInRightBig').animated('fadeInRightBig');
	$('.anim-fadeInLeftBig').animated('fadeInLeftBig');
	$('.anim-fadeInDownBig').animated('fadeInDownBig');
	$('.anim-fadeInUpBig').animated('fadeInUpBig');
	
	$('.anim-fadeInDown').animated('fadeInDown');
	$('.anim-fadeInLeft').animated('fadeInLeft');
	$('.anim-fadeInRight').animated('fadeInRight');
	
	
	$('.logo').animated('fadeInDown');
	$('.logo__ico').animated('bounceIn');
	$('.logo__txt-naming, .logo__txt-descrp').animated('fadeInDown');
});
