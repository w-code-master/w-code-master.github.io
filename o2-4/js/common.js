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


	// popup
	$('.popup-call-me').magnificPopup({
		mainClass: 'my-mfp-zoom-in'
	});
	// popup
	$('.btn-popup-service').magnificPopup({
		mainClass: 'my-mfp-zoom-in'
	});


	$('#offerForm').validate({
		rules: {
			nameUser: {
				required: true,
				minlength: 2
			},
			telUser: {
				required: true,
				minlength: 9
			}
		},
		messages: {
			nameUser: {
				required: 'Имя обязательно для заполнения',
				minlength: 'Длина имени не менее 2-х символов'
			},
			telUser: {
				required: 'Телефон обязателен для заполнения'
			}
		}
	});

	$('#modalForm').validate({
		rules: {
			nameUser: {
				required: true,
				minlength: 2
			},
			telUser: {
				required: true,
				minlength: 9
			}
		},
		messages: {
			nameUser: {
				required: 'Имя обязательно для заполнения',
				minlength: 'Длина имени не менее 2-х символов'
			},
			telUser: {
				required: 'Телефон обязателен для заполнения'
			}
		}
	});

	$('#callForm').validate({
		rules: {
			nameUser: {
				required: true,
				minlength: 2
			},
			telUser: {
				required: true,
				minlength: 9
			}
		},
		messages: {
			nameUser: {
				required: 'Имя обязательно для заполнения',
				minlength: 'Длина имени не менее 2-х символов'
			},
			telUser: {
				required: 'Телефон обязателен для заполнения'
			}
		}
	});

});
