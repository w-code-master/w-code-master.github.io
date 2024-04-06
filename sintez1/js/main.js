AOS.init({
	 acnhorPlacement: 'top-bottom',
	 once: true,
	 duration: 700
});



$(function () {

	// panelFix
	var panelFix = $(".header-top");
	$(window).scroll(function () {
		 if ($(this).scrollTop() > 385) {
			  panelFix.addClass("nav-scrolled");
		 } else {
			  panelFix.removeClass("nav-scrolled");
		 }
	});

	// menu
	$(".sandwich-box").click(function () {
		 $(".phone-panel").toggleClass("_active");
		 $(".sandwich-box").toggleClass("_active");
		 $(".call-modal").removeClass("_active");
		 $("html").toggleClass("overflow-y-hidden");
	});
	$(".phone-panel .menu__link").click(function () {
		 $(".phone-panel").toggleClass("_active");
		 $(".sandwich-box").toggleClass("_active");
		 $("html").toggleClass("overflow-y-hidden");
	});

	// ПОПАП
	$(".entry--call-modal").click(function () {
		 $(".call-modal").toggleClass("_active");
		 $("html").toggleClass("overflow-y-hidden");
		 let itemTitle = $(this).parent().siblings(".services__card-title").text();
		 if (itemTitle == '') {
			  $(".call-modal__form .themeInput").val("Обсудить проект");
			  $(".call-modal__form").removeClass("form-usluga");
		 } else {
			  $(".call-modal__form .themeInput").val(itemTitle);
			  $(".call-modal__form").addClass("form-usluga");
		 }
	});

	// E-mail Ajax Send
	$("form").submit(function (event) {
		event.preventDefault()
		 var th = $(this);

		 if (th.hasClass("form-usluga")) {
			console.log('usluga')
			ym(96864053,'reachGoal','usluga')

		 } else if (th.hasClass("form-quiz")) {
			console.log('quiz')
			ym(96864053,'reachGoal','quiz')

		 } else if (th.hasClass("form-diagnostika")){
			console.log('diagnostika')
			ym(96864053,'reachGoal','diagnostika')

		 } else {
			console.log('project')
			ym(96864053,'reachGoal','project')
		 }

		 $.ajax({
			  type: "POST",
			  url: "/mail.php",
			  data: th.serialize(),
		 }).done(function () {});

		 $.ajax({
			  type: "POST",
			  url: "/telegram.php",
			  data: th.serialize(),

		 }).done(function () {
			  var url = "/thank.html";
			  $(location).attr("href", url);
		 });
	});

	// QUIZ
	var quizContainer = $(".quiz__container")
	$(".quiz__container input").on("input", function (e) {
		
		if (quizContainer.hasClass("step4")) {
			$(".step4 input").each(function () {
				 if ($(this).prop("checked")) {
					  removeSteps();
					  quizContainer.addClass("step5");

					  let choisedInput = $('.choise4 input:checked')
					  let choisedImageSrc = choisedInput.parent().find('img').attr('src')
					  $('.navItem4 .quiz-nav__txt').text(choisedInput.val())
					  $('.navItem4 .quiz-nav__ico').show()
					  $('.navItem4 .quiz-nav__ico img').attr('src', choisedImageSrc)
				 }
			});
	  }
		
	  if (quizContainer.hasClass("step3")) {
		  $(".step3 input").each(function () {
				if ($(this).prop("checked")) {
					 removeSteps();
					 quizContainer.addClass("step4");

					 let choisedInput = $('.choise3 input:checked')
					 let choisedImageSrc = choisedInput.parent().find('img').attr('src')
					 $('.navItem3 .quiz-nav__txt').text(choisedInput.val())
					 $('.navItem3 .quiz-nav__ico').show()
					 $('.navItem3 .quiz-nav__ico img').attr('src', choisedImageSrc)
				}
		  });
	 }

		if (quizContainer.hasClass("step2")) {
			 $(".step2 input").each(function () {
				  if ($(this).prop("checked")) {
						removeSteps();
						quizContainer.addClass("step3");

						let choisedInput = $('.choise2 input:checked')
						let choisedImageSrc = choisedInput.parent().find('img').attr('src')
						$('.navItem2 .quiz-nav__txt').text(choisedInput.val())
						$('.navItem2 .quiz-nav__ico').show()
						$('.navItem2 .quiz-nav__ico img').attr('src', choisedImageSrc)
				  }
			 });
		}


		if (quizContainer.hasClass("step1")) {
			 $(".step1 input").each(function () {
				  if ($(this).prop("checked")) {
						removeSteps();
						quizContainer.addClass("step2");

						let choisedInput = $('.choise1 input:checked')
						let choisedImageSrc = choisedInput.parent().find('img').attr('src')
						$('.navItem1 .quiz-nav__txt').text(choisedInput.val())
						$('.navItem1 .quiz-nav__ico').show()
						$('.navItem1 .quiz-nav__ico img').attr('src', choisedImageSrc)
				  }
			 });
		}
	});

	function removeSteps() {
		quizContainer.removeClass("step1").removeClass("step2").removeClass("step3").removeClass("step4").removeClass("step5");
	}


	$(".call-modal__close").click(function () {
		 $("html").removeClass("overflow-y-hidden");
		 $(".call-modal").removeClass("_active");
	});

	// ХЗ
	$(".phone-panel .entry--call-modal").click(function () {
		 $(".sandwich-box").removeClass("_active");
		 $(".phone-panel").removeClass("_active");
		 $("html").toggleClass("overflow-y-hidden");
	});

	const swiperClients = new Swiper(".swiper-clients", {
		 slidesPerView: "auto",
		 loop: true,
		 autoHeight: false,
		 spaceBetween: 20,
		 autoplay: {
			  delay: 2000,
		 },
	});
	const swiperServices = new Swiper(".swiper-services", {
		 loop: true,
		 autoHeight: false,
		 spaceBetween: 20,
		 slidesPerView: 1.15,
		 autoplay: {
			  delay: 5000,
		 },
		 pagination: {
			  el: ".swiper-services-nav",
			  dynamicBullets: true,
		 },
	});
	const swiperWorkCards = new Swiper(".swiper-work-cards", {
		 loop: true,
		 autoHeight: false,
		 slidesPerView: 1,
		 // autoplay: {
		 //    delay: 5000
		 // },
		 pagination: {
			  el: ".swiper-work-cards-nav",
			  dynamicBullets: true,
		 },
	});
	const swiperWorkBoxs = new Swiper(".swiper-work-boxs", {
		 loop: true,
		 autoHeight: false,
		 slidesPerView: 1,
		 spaceBetween: 20,
		 // autoplay: {
		 //    delay: 5000
		 // },
		 breakpoints: {
			  576: {
					slidesPerView: 1.5,
			  },
		 },
		 pagination: {
			  el: ".swiper-work-boxs-nav",
			  dynamicBullets: true,
		 },
	});
	const swiperArticle = new Swiper(".swiper-article", {
		 loop: true,
		 autoHeight: false,
		 spaceBetween: 20,
		 slidesPerView: 1.15,
		 autoplay: {
			  delay: 5000,
		 },
		 pagination: {
			  el: ".swiper-article-nav",
			  dynamicBullets: true,
			  dynamicBullets: 3,
		 },
	});
	var swiperLoader = new Swiper(".swiper-loader", {
		 loop: true,
		 autoHeight: false,
		 direction: "vertical",
		 autoplay: {
			  delay: 500,
		 },
		 slidesPerView: 4,
	});

	$(".menu__link").mPageScroll2id({
		 offset: 100,
	});

	$(".job-beefup__item").beefup({
		 openSingle: true,
	});

	$(".tel-masked").mask("+7 (999) 999 - 99 - 99");

	$(".work-block__action .btn, .work-box__btn").magnificPopup({
		 type: "inline",
		 fixedContentPos: true,
		 fixedBgPos: true,
		 callbacks: {
			  open: function () {
					$("body").css("overflow", "hidden");
			  },
			  close: function () {
					$("body").css("overflow", "");
			  },
		 },
		 callbacks: {
			  beforeOpen: function () {
					this.st.mainClass = this.st.el.attr("data-effect");
			  },
		 },
	});


	var aDate = new Date();
	// UTC time in msec
	var utc = aDate.getTime() + (aDate.getTimezoneOffset() * 60000);
	// Date object for the requested city
	var newdate = new Date(utc + (3600000*3));
	var currentHour = newdate.getHours();
	var arr = ['10','11','12','13','14','15','16','17', '18', '19'];
	var myTry = 0;
	$.each(arr,function(index,value){
		 if(value == currentHour) {
			  myTry = 1;
		 }
	});
	if(myTry == 0) {
		$('.indicator').addClass('offline');
	}


	 $('#prices-countdown').timeTo(new Date('2024-04-08T21:00:00.434Z'), {
		displayDays: 2,
		displayCaptions: true,
		fontSize: 22,
		captionSize: 10,
		lang: 'ru'
	 });

	 // $(".anim-zoomIn").animated("zoomIn");
	 // $(".anim-bounceIn").animated("bounceIn");
	 // $(".anim-bounceInLeft").animated("bounceInLeft");
	 // $(".anim-bounceInRight").animated("bounceInRight");
	 // $(".anim-bounceInDown").animated("bounceInDown");
	 // $(".anim-bounceInUp").animated("bounceInUp");
	 // $(".anim-fadeIn").animated("fadeIn");
	 // $(".anim-fadeInLeft").animated("fadeInLeft");
	 // $(".anim-fadeInRight").animated("fadeInRight");
	 // $(".anim-fadeInDown").animated("fadeInDown");
	 // $(".anim-fadeInUp").animated("fadeInUp");
	 // $(".anim-fadeInRightBig").animated("fadeInRightBig");
	 // $(".anim-fadeInLeftBig").animated("fadeInLeftBig");
	 // $(".anim-fadeInDownBig").animated("fadeInDownBig");
	 // $(".anim-fadeInUpBig").animated("fadeInUpBig");
	 // $(".anim-slideInLeft").animated("slideInLeft");
	 // $(".anim-slideInRight").animated("slideInRight");
	 // $(".anim-slideInDown").animated("slideInDown");
	 // $(".anim-slideInUp").animated("slideInUp");
});
