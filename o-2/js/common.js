$(function() {

	// tabs
	$('.tab__nav--item').click(function() {
	   var id = $(this).attr('data-tab'),
	       content = $('.tab__content--item[data-tab="'+ id +'"]');
	   
	   $('.tab__nav--item.active').removeClass('active');
	   $(this).addClass('active');
	   
	   $('.tab__content--item.active').removeClass('active');
	   content.addClass('active');
	});

	// maskedinput
	$(".masked-input").mask("+7 (999) 99-99-999");

});
