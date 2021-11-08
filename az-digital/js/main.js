$(document).ready(() => {

	AOS.init({
		acnhorPlacement: 'top-bottom',
		once: true,
		duration: 700
	});
	
	$('input[type="tel"]').mask('+7 (999) 999-99-99');

	// Модальные окна
	var overlay = $(".overlay"),
		modal = $(".modal"),
		modalClose = $(".modal__close"),
		modalOpen = $(".modal__open");

	overlay.click(function(e) {
		if ($(e.target).closest(".modal").length == 0) {
			$('body, html').removeClass('my-body-noscroll-class');
			// document.querySelector("#mobile__menu").classList.remove("active");
			$(this).fadeOut();
			modal.fadeOut();
		}
	});

	modalClose.click(function() {
		$('body, html').removeClass('my-body-noscroll-class');
		// document.querySelector("#mobile__menu").classList.remove("active");
		overlay.fadeOut();
		modal.fadeOut();
	});

	modalOpen.each(function() {
		$(this).on("click", function(e) {
			var modalId = $(this).attr("data-modal"),
				EachModal = $('.modal[data-modal="' + modalId + '"]');
			$('body, html').addClass('my-body-noscroll-class');
			// document.querySelector("#mobile__menu").classList.remove("active");
			modalTitle = $(this).attr('data-title');
			modal.fadeOut();
			overlay.css('display', 'flex');
			EachModal.fadeIn();
		});
	});


	/** * Replace all SVG images with inline SVG */
	$('img.img-svg').each(function() {
		var $img = $(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
		$.get(imgURL, function(data) {
			var $svg = $(data).find('svg');
			if (typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}
			$svg = $svg.removeAttr('xmlns:a');
			$img.replaceWith($svg);
		}, 'xml');
	});

	// Мобильное меню
	// $('.header__menu-btn').on("click", function(e) {
	//     document.querySelector("#mobile__menu").classList.toggle("active");
	//     $('body, html').addClass('my-body-noscroll-class');
	// });
	// document.querySelector("#mobile__menu-close").onclick = function() {
	//     document.querySelector("#mobile__menu").classList.toggle("active");
	//     $('body, html').removeClass('my-body-noscroll-class');
	// };


	// Тултипы
	tippy('.tippy', {
		placement: 'right',
		theme: 'light',
		animation: 'shift-away',
		content(reference) {
		  const title = reference.getAttribute('title');
		  reference.removeAttribute('title');
		  return title;
		},
	});

	// Плавный скролл на все якори
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function(e) {
			e.preventDefault();

			document.querySelector(this.getAttribute("href")).scrollIntoView({
				behavior: "smooth",
			});
		});
	});

	if ($(window).width() < 991) {
		$('.intro__advantages').slick({
			infinite: true,
			arrows: false,
			dots: false,
			slidesToShow: 1,
			autoplay: true,
			autoplaySpeed: 2000,
		});
	}  
	if ($(window).width() < 575) {
		$('.quiz__advantages').slick({
			infinite: true,
			arrows: false,
			dots: false,
			slidesToShow: 1,
			autoplay: true,
			autoplaySpeed: 2500,
		});
	}  

	var now = new Date();
	var textout;
	var month = now.getMonth();
	var date = now.getDate();
	textout = date;
	if (month == 0) textout += " января";
	if (month == 1) textout += " февраля";
	if (month == 2) textout += " марта";
	if (month == 3) textout += " апреля";
	if (month == 4) textout += " мая";
	if (month == 5) textout += " июня";
	if (month == 6) textout += " июля";
	if (month == 7) textout += " августа";
	if (month == 8) textout += " сентября";
	if (month == 9) textout += " октября";
	if (month == 10) textout += " ноября";
	if (month == 11) textout += " декабря";

	$('#date').text(textout);


	// document.querySelectorAll("[data-relative-input]").forEach((el) => {
	//     new Parallax(el, {
	//         clipRelativeInput: true,
	//     });
	// });

	
	// quiz
	$(".quiz .next-btn").on("click", function(e) {
		if ($(".quiz").hasClass("quiz5")) {
			removeSteps();
			$(".quiz").addClass("quiz6");
		}
		if ($(".quiz").hasClass("quiz4")) {
			$(".step4 .box input").each(function() {
				if ($(this).prop("checked")) {
					removeSteps();
					$(".quiz").addClass("quiz5");
				}
			});
		}
		if ($(".quiz").hasClass("quiz3")) {
			$(".step3 .box input").each(function() {
				if ($(this).prop("checked")) {
					removeSteps();
					$(".quiz").addClass("quiz4");
				}
			});
		}
		if ($(".quiz").hasClass("quiz2")) {
			$(".step2 .box input").each(function() {
				if ($(this).prop("checked")) {
					removeSteps();
					$(".quiz").addClass("quiz3");
				}
			});
		}
		if ($(".quiz").hasClass("quiz1")) {
			$(".step1 .box input").each(function() {
				if ($(this).prop("checked")) {
					removeSteps();
					$(".quiz").addClass("quiz2");
				}
			});
		}
	});

	// E-mail Ajax Send
	$("form.quiz").submit(function (event) {
	  event.preventDefault();
	  var th = $(this);
  
	  $messenger = th.find("input[name='Способ_связи']:checked").val();
	  $email = th.find("input[name='Email'").val();
	  $('#email').text($email);
  
	  $.ajax({
		  type: "POST",
		  url: "/mail.php",
		  data: th.serialize(),
	  }).done(function () {});

	  ym(82308511,'reachGoal','order');
  
	  removeSteps();
	  $('.quiz').addClass('loading');
	  setTimeout(function(){
		  removeSteps();
		  $('.quiz').addClass('done');
	  }, 3000);
	  setTimeout(function(){
		  window.location.href = 'https://azdigital.site/thanks.php?messenger=' + $messenger + '&email=' + $email;
	  }, 6000);
  });

  // E-mail Ajax Send
  $("form.callback-form").submit(function (event) {
	event.preventDefault();
	var th = $(this);

	$messenger = th.find("input[name='Способ_связи']:checked").val();
	$email = th.find("input[name='Способ_связи']:checked").val();
	console.log($messenger);
	
	ym(82308511,'reachGoal','callback');

	$.ajax({
		type: "POST",
		url: "/mail.php",
		data: th.serialize(),
	}).done(function () {});

	window.location.href = 'https://azdigital.site/thanks_callback.php?messenger=' + $messenger;
});


	// $(".quiz .prev").on("click", function(e) {
	//     if ($(".quiz").hasClass("quiz2")) {
	//         removeSteps();
	//         $(".quiz").addClass("quiz1");
	//     }
	//     if ($(".quiz").hasClass("quiz3")) {
	//         removeSteps();
	//         $(".quiz").addClass("quiz2");
	//     }
	//     if ($(".quiz").hasClass("quiz4")) {
	//         removeSteps();
	//         $(".quiz").addClass("quiz3");
	//     }
	//     if ($(".quiz").hasClass("quiz5")) {
	//         removeSteps();
	//         $(".quiz").addClass("quiz4");
	//     }

	// });

	function removeSteps() {
		$(".quiz").removeClass("quiz1").removeClass("quiz2").removeClass("quiz3").removeClass("quiz4").removeClass("quiz5").removeClass("quiz6").removeClass('loading');
	}

	$('#tab-service').easytabs({
		tabs: ".tab-nav .tab-nav__item",
		updateHash: false
	});
	
});
