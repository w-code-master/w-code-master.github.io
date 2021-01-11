$(function() {

	var myMenu = $('.beefup-wrap').children('.beefup');
	myMenu.on({
	mouseenter: function() { $( this ).prev().addClass( "is-hover" ); },
	mouseleave: function() { $( this ).prev().removeClass( "is-hover" ); }
	});

	$('.beefup').beefup({
		openSingle: true
	 });

});
