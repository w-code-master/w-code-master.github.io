
	$(document).ready(function() {
  $('select').niceSelect();
});



	const menuToggle = document.querySelector('#menu__togle');
const mobileNavContainer = document.querySelector('#mobile__nav');

menuToggle.onclick = function(){
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-nav--active');
}



$(document).ready(function(){
  var settingsButton = $('.settings__button');
  var chatOpros = $('.chat-opros');
  var helloChat = $('.hello-chat');

  $(settingsButton).click(function(){
    $('.chat-welcome').toggleClass('active');
  });
});




// Range слайдер
 $("#example_id").ionRangeSlider({
        type: "double",
        min: 15,
        max: 100,
        from: 15,
        to: 100,
    });



// Прелоадер

  $(document).ready(function() {
  
  setTimeout(function() {
    $('#ctn-preloader').addClass('loaded');
    // Once the preloader has finished, the scroll appears
    $('#preloader-body').removeClass('no-scroll-y');

    if ($('#ctn-preloader').hasClass('loaded')) {
      // It is so that once the preloader is gone, the entire preloader section will removed
      $('#preloader').delay(1000).queue(function() {
        $(this).remove();
      });
    }
  }, 500);
  
});




