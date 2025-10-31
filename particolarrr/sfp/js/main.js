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


	// dropdown
	$(".w-dropdown-item").click(function(){
		$(".w-dropdown").not($(this).parent()[0]).removeClass('active');

		$(this).parent().toggleClass('active');
		return false;
	});
	$(document).click(function(e){
		that = e.target;
		if ($(that).closest(".w-dropdown").length < 1 && !$(that).hasClass("w-dropdown")) $(".w-dropdown").removeClass('active');
	});



	// select
	$('.select').niceSelect();


});