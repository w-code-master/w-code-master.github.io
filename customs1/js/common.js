$(function() {

	// menu
	$(".sandwich-box").click(function() {
	  $(".sandwich-box").toggleClass("active");
	});
	$(".sandwich-box").click(function() {
		if($(".wrapper-nav").is(":visible")) {
			$(".wrapper-nav").fadeOut(600).removeClass('active');
			$("html, body").css('overflow', 'auto');
		} else {
			$(".wrapper-nav").fadeIn(600).addClass('active');
			$("html, body").css('overflow', 'hidden');
		};
	});
	$(".wrapper-nav li a").click(function() {
		$(".wrapper-nav").fadeOut(600).removeClass('active');
		$(".sandwich-box").toggleClass("active");
		$("html, body").css('overflow', 'auto');
	});
	$('.wrapper-nav .i-close').click(function() {
		$(".wrapper-nav").fadeOut(600).removeClass('active');
		$(".sandwich-box").toggleClass("active");
		$("html, body").css('overflow', 'auto');
	});

	// button - (more content - .service)
	$('.service .more').click(function(){
		$('.service__content').toggleClass('open');
		$(this).text(function(i, text){
			return text === "Показать еще" ? "Свернуть" : "Показать еще";
      	})
	});

	// popup
	$('.service__item .btn').magnificPopup({
		mainClass: 'my-mfp-zoom-in'
	});

});
