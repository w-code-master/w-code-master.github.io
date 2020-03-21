$(function() {

	$('#owl-diplomas-1').owlCarousel({
		loop: true,
	    items: 2,
	    nav:true,
	    dots:false,
	    navText: ['<i class="i-arrow-left"></i>', '<i class="i-arrow-right"></i>']
	});

	// popup
	$('.btn-call-popup').magnificPopup({
		mainClass: 'my-mfp-zoom-in'
	});

	$(".header .logo").animated("zoomIn");
	$(".header .nav").animated("fadeInRight");
	$(".header .header__text p").animated("fadeInUp");
	$(".header .header__text .btn").animated("fadeInUp");
	$(".header .h1").animated("fadeInDown");
	$(".header .h4").animated("fadeInUp");

	$(".advantages__item.one, .advantages__item.two, .advantages__item.three").animated("fadeInLeft");

	$(".information .h1").animated("fadeInRight");
	$(".information__descrp--left .h6, .information__descrp--left p").animated("fadeInUp");
	$(".information .h4").animated("fadeInDown");
	$(".information__content .item:nth-child(1)").animated("fadeInRight");
	$(".information__content .item:nth-child(2)").animated("fadeInLeft");
	$(".information__content .item:nth-child(3)").animated("fadeInRight");

	$(".command .h1").animated("fadeInLeft");
	$(".command__content p, .command__content .btn").animated("fadeInUp");
	$(".command .h4").animated("fadeInRight");

	$(".organization .h1").animated("fadeInRight");
	$(".organization__info p").animated("fadeInUp");
	$(".organization .link-btn").animated("fadeInUp")
	;
	$(".our .h1").animated("fadeInDown");
	$(".our__content .h3, .our__content p").animated("fadeInDown");

	$(".document__paper").animated("zoomIn");
	$(".document .h1").animated("fadeInRight");
	$(".document p").animated("fadeInDown");

	$(".diplomas .h1, .diplomas__names span").animated("fadeInLeft");
	$(".owl-diplomas .owl-stage-outer").animated("fadeInLeft");
	$(".owl-diplomas .owl-nav").animated("fadeInUp");

	$(".footer__tel").animated("fadeInDown");
	$(".footer address").animated("fadeInLeft");
	$(".footer__info").animated("fadeInRight");

});
