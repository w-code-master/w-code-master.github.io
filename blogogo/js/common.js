$(function() {

	$('.subscriptions__more').click(function(){
		$('.subscriptions__list').toggleClass('open');
		$(this).text(function(i, text){
			return text === "показать еще" ? "свернуть" : "показать еще";
      	})
	});

	$('[data-toggle="tooltip"]').tooltip()

});
