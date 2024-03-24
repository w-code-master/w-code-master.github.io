$(function() {

   // var counter = 0;
   // var c = 0;
   // var i = setInterval(function(){
   //    // $(".loading-page__h").html(c + "%");
   //    // $(".loading-page__hr").css("width", c + "%");
   //    $("html").addClass("overflow-y-hidden");
      
   //    counter++;
   //    c++;
         
   //    if(counter == 222) {
   //       clearInterval(i);
   //       $(".loading-page").fadeOut(1000);
   //       $("html").removeClass("overflow-y-hidden");
   //    }
   // }, 10);

   // menu
	$(".sandwich-box").click(function() {
      $(".phone-panel").toggleClass('_active');
      $(".sandwich-box").toggleClass("active");
      $(".call-modal").removeClass('_active');
      $("html").toggleClass("overflow-y-hidden");
    });
    $(".phone-panel .menu__link").click(function() {
      $(".phone-panel").toggleClass('_active');
		$(".sandwich-box").toggleClass("active");
      $("html").toggleClass("overflow-y-hidden");
	});

   $(".entry--call-modal").click(function() {
      $(".call-modal").toggleClass('_active');
      $("html").toggleClass("overflow-y-hidden");
   });
   $(".call-modal__close").click(function() {
      $("html").removeClass("overflow-y-hidden");
      $(".call-modal").removeClass('_active');
	});
   
   $(".phone-panel .entry--call-modal").click(function() {
		$(".sandwich-box").removeClass("active");
      $(".phone-panel").removeClass('_active');
      $("html").toggleClass("overflow-y-hidden");
	});

   const swiperClients = new Swiper('.swiper-clients', {
      slidesPerView: "auto",
      loop: true,
      autoHeight: false,
      spaceBetween: 20,
      autoplay: {
         delay: 2000
      }
   });
   const swiperServices = new Swiper('.swiper-services', {
      loop: true,
      autoHeight: false,
      spaceBetween: 20,
      slidesPerView: 1.15,
      autoplay: {
         delay: 5000
      },
      pagination: {
         el: ".swiper-services-nav",
         dynamicBullets: true
      }
   });
   const swiperWorkCards = new Swiper('.swiper-work-cards', {
      loop: true,
      autoHeight: false,
      slidesPerView: 1,
      // autoplay: {
      //    delay: 5000
      // },
      pagination: {
         el: ".swiper-work-cards-nav",
         dynamicBullets: true
      }
   });
   const swiperWorkBoxs = new Swiper('.swiper-work-boxs', {
      loop: true,
      autoHeight: false,
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: {
         delay: 5000
      },
      breakpoints: {
         576: {
           slidesPerView: 1.5
         }
      },
      pagination: {
         el: ".swiper-work-boxs-nav",
         dynamicBullets: true
      }
   });
   const swiperArticle = new Swiper('.swiper-article', {
      loop: true,
      autoHeight: false,
      spaceBetween: 20,
      slidesPerView: 1.15,
      // autoplay: {
      //    delay: 5000
      // },
      pagination: {
         el: ".swiper-article-nav",
         dynamicBullets: true,
         dynamicBullets: 3
      }
   });
   var swiperLoader = new Swiper(".swiper-loader", {
      loop: true,
      autoHeight: false,
      direction: 'vertical',
      autoplay: {
         delay: 500
      },
      slidesPerView: 4
   });

   $('.menu__link').mPageScroll2id({
		offset: 100
	});

   
   $('.job-beefup__item').beefup({
      openSingle: true
   });
   

   $('.tel-masked').mask('+7 (999) 999 - 99 - 99');


   $('.work-block__action .btn, .work-box__btn').magnificPopup({
      type: "inline",
      fixedContentPos: true,
      removalDelay: 300,
      mainClass: 'mfp-width-zoom',
      callbacks: {
         beforeOpen: function () {
            this.st.mainClass = this.st.el.attr('data-effect');
      }}
   });

   // $('.anim-zoomIn').animated('zoomIn');

	// $('.anim-bounceIn').animated('bounceIn');
	// $('.anim-bounceInLeft').animated('bounceInLeft');
	// $('.anim-bounceInRight').animated('bounceInRight');
	// $('.anim-bounceInDown').animated('bounceInDown');
	// $('.anim-bounceInUp').animated('bounceInUp');
   
	// $('.anim-fadeIn').animated('fadeIn');
	// $('.anim-fadeInLeft').animated('fadeInLeft');
	// $('.anim-fadeInRight').animated('fadeInRight');
	// $('.anim-fadeInDown').animated('fadeInDown');
	// $('.anim-fadeInUp').animated('fadeInUp');
	// $('.anim-fadeInRightBig').animated('fadeInRightBig');
	// $('.anim-fadeInLeftBig').animated('fadeInLeftBig');
	// $('.anim-fadeInDownBig').animated('fadeInDownBig');
	// $('.anim-fadeInUpBig').animated('fadeInUpBig');
	
	
	// $('.anim-slideInLeft').animated('slideInLeft');
	// $('.anim-slideInRight').animated('slideInRight');
	// $('.anim-slideInDown').animated('slideInDown');
	// $('.anim-slideInUp').animated('slideInUp');
   
	// $('.anim-bounceInLeft').animated('bounceInLeft');

	// $('.anim-rotateInDownLeft').animated('rotateInDownLeft');

	// $('.anim-rubberBand').animated('rubberBand');

});