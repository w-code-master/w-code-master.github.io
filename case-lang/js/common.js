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


	$('.header__top').animated('jackInTheBox');
	$('.header__offer .alert-txt').animated('zoomIn');
	$('.header__offer-content .h2').animated('bounceIn');
	$('.header__offer-content .txt').animated('fadeInDown');
	$('.header__bg .bg__el-1, .header__bg .bg__el-2').animated('bounceIn');
	$('.header .logo__img, .header .logo__ico').animated('zoomIn');
	$('.header .logo__txt').animated('fadeIn');
	$('.header .soc-bar_itm').animated('bounceIn');
	$('.header .call-info__tel').animated('fadeInDown');
	$('.header .call-info__txt').animated('fadeInUp');
	$('.header .togg-lang').animated('bounceIn');

	$('.s-intro .h2, .s-intro__txt p').animated('fadeInDown');

	$('.s-total .h2').animated('fadeInDown');
	$('.s-total__bg1').animated('fadeInUpBig');

	$('.anim-fadeInRightBig').animated('fadeInRightBig');
	$('.anim-fadeInLeftBig').animated('fadeInLeftBig');

	$('.anim-fadeInDown').animated('fadeInDown');
	$('.anim-fadeInLeft').animated('fadeInLeft');
	$('.anim-fadeInRight').animated('fadeInRight');

	$('.anim-fadeIn').animated('fadeIn');

	$('.doc-inf__verstka-bg1').animated('fadeInUpBig');

	$('.go-offer .btn, .txt-and-ico, .sandwich-box').animated('bounceIn');

});
