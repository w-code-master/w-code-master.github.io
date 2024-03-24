$(function() {
    //select-number form
    if(jQuery('.phone-mask').length) {
        jQuery(function($){
            $(".phone-mask").mask("+7 (111) 111-1111");
        });
    }
    setTimeout(function(){  
       
        var introLetter = $(".header__slider").find('.animated');
        introLetter.each(function(i,t) {
            var $this = $(t);
            setTimeout(function(){ $this.addClass('fadeInUp'); },i*20);
        });

  
        var IntroLinks = $(".navbar__container a");
        IntroLinks.each(function(i,t) {
            var $this = $(t);
            setTimeout(function(){ $this.addClass('fadeInDown'); },i*200);
        });
        
    },500);

    //quiz
    if(jQuery('.quiz').length) {
        // input other
        $('.pick-item__input').on('click', function(){
            if ( $(this).hasClass('other-input')) {
                var attrName =  $(this).attr('name');
                $(this).closest('.step-slide').find('.quiz__ans--other-text').addClass('active').find('input').attr('name', attrName);
            } else {
                $(this).closest('.step-slide').find('.quiz__ans--other-text').removeClass('active').find('input').removeAttr('name');
            }
            
        });
        var notVal = '';
        console.log(notVal);
        $('.qa-next').click(function(e){
            console.log(notVal);
            // console.log($(this).closest('.step-slide').find('.pick-item__input:checked').val());
           var valueQuiz = $(this).closest('.step-slide').find('.pick-item__input:checked').val();
            e.preventDefault();
            if ($(this).closest('.step-slide').hasClass('step-slide--text') && $(this).closest('.step-slide').find('input').val() == '' ) {
                $(this).closest('.prev-next-container').find('.quiz__error').text('Введите ответ');
            } else if ($(this).closest('.step-slide').hasClass('step-slide--text') && $(this).closest('.step-slide').find('input').val() != '' ) {
                $(this).closest('.step-slide').removeClass('step-slide--active').next().addClass('step-slide--active').find('.quiz__body').addClass('zoomIn');

            } else if ($(this).closest('.step-slide').find('input:checked').length) {
                $(this).closest('.prev-next-container').find('.quiz__error').text('');
                if($(this).closest('.step-slide').attr('data-num') == '4' && valueQuiz == 'Более 70 000 рублей') {
                    $(this).closest('.step-slide').removeClass('step-slide--active').next().addClass('step-slide--active').find('.quiz__body').addClass('zoomIn');
                } else if ($(this).closest('.step-slide').attr('data-num') == '4' && valueQuiz !== 'Более 70 000 рублей'){
                    $(this).closest('.step-slide').removeClass('step-slide--active');
                    $('.step-slide[data-num="13"]').addClass('step-slide--active').find('.quiz__body').addClass('zoomIn');
                } else if($(this).closest('.step-slide').attr('data-num') == '5') {
                    $(this).closest('.step-slide').removeClass('step-slide--active');
                    $('.step-slide[data-num="13"]').addClass('step-slide--active').find('.quiz__body').addClass('zoomIn');
                } else if ($(this).closest('.step-slide').attr('data-num') == '1' && valueQuiz == 'Баня'){
                    $(this).closest('.step-slide').removeClass('step-slide--active');
                    $('.step-slide[data-num="6"]').addClass('step-slide--active').find('.quiz__body').addClass('zoomIn');
                } else if ($(this).closest('.step-slide').attr('data-num') == '8' && valueQuiz == 'Не требуется' ){
                    notVal = valueQuiz;
                    console.log(notVal);
                    $(this).closest('.step-slide').removeClass('step-slide--active');
                    $('.step-slide[data-num="10"]').addClass('step-slide--active').find('.quiz__body').addClass('zoomIn');
                } else if ($(this).closest('.step-slide').attr('data-num') == '10' ){
                    $(this).closest('.step-slide').removeClass('step-slide--active');
                    $('.step-slide[data-num="14"]').addClass('step-slide--active').find('.quiz__body').addClass('zoomIn');
                } else if ($(this).closest('.step-slide').attr('data-num') == '1' && valueQuiz == 'Нежилое помещение'){
                    $(this).closest('.step-slide').removeClass('step-slide--active');
                    $('.step-slide[data-num="11"]').addClass('step-slide--active').find('.quiz__body').addClass('zoomIn');
                } else if ($(this).closest('.step-slide').attr('data-num') == '12' ){
                    $(this).closest('.step-slide').removeClass('step-slide--active');
                    $('.step-slide[data-num="15"]').addClass('step-slide--active').find('.quiz__body').addClass('zoomIn');
                } else if ($(this).closest('.step-slide').attr('data-num') == '13' || $(this).closest('.step-slide').attr('data-num') == '14' ){
                    $(this).closest('.step-slide').removeClass('step-slide--active');
                    $('.step-slide[data-num="last"]').addClass('step-slide--active').find('.quiz__body').addClass('zoomIn');
                } else {
                    $(this).closest('.step-slide').removeClass('step-slide--active').next().addClass('step-slide--active').find('.quiz__body').addClass('zoomIn');
                }

               
            } else if ($(this).closest('.step-slide').hasClass('step-slide--range')  && ($(this).closest('.step-slide').find('.range-item').val() !== '' )) {
                $(this).closest('.prev-next-container').find('.quiz__error').text('');
                $(this).closest('.step-slide').removeClass('step-slide--active').next().addClass('step-slide--active').find('.quiz__body').addClass('zoomIn');
            } else {
                $(this).closest('.prev-next-container').find('.quiz__error').text('Выберите вариант ответа!');
            }
        });
        // for radiobuttons
        $('input[type="radio"]+.pick-item__label').click(function(e){
            // $(this).parent().parent().parent('.step-slide').removeClass('step-slide--active').next().addClass('step-slide--active');           
        });

        $(".qa-prev").click(function(e) {
            e.preventDefault();
            if ($(this).closest('.step-slide').attr('data-num') == '6'){
                $(this).closest('.step-slide').removeClass('step-slide--active');
                $('.step-slide[data-num="1"]').addClass('step-slide--active');
            } else if ($(this).closest('.step-slide').attr('data-num') == '11'){
                $(this).closest('.step-slide').removeClass('step-slide--active');
                $('.step-slide[data-num="1"]').addClass('step-slide--active');
            } else if ($(this).closest('.step-slide').attr('data-num') == '10' && notVal == 'Не требуется' ){
                $(this).closest('.step-slide').removeClass('step-slide--active');
                $('.step-slide[data-num="8"]').addClass('step-slide--active');
            } else if ($(this).closest('.step-slide').attr('data-num') == '13'){
                $(this).closest('.step-slide').removeClass('step-slide--active');
                $('.step-slide[data-num="4"]').addClass('step-slide--active');
            } else if ($(this).closest('.step-slide').attr('data-num') == '14'){
                $(this).closest('.step-slide').removeClass('step-slide--active');
                $('.step-slide[data-num="10"]').addClass('step-slide--active');
            } else if ($(this).closest('.step-slide').attr('data-num') == '15'){
                $(this).closest('.step-slide').removeClass('step-slide--active');
                $('.step-slide[data-num="12"]').addClass('step-slide--active');
            } else  {
                $(this).closest('.step-slide').removeClass('step-slide--active').prev().addClass('step-slide--active');
            }            
               
        });
    }

    //popup
    if(jQuery('.modal__wrap').length) {
        let modalWrap = $('.modal__wrap');
        //popup
        $(".modal-open").click(function (e){
          e.preventDefault();
          var btn = $(this);
          var numModal = btn.attr('href');
          if(numModal == '#modalQuiz'){

            $('.qa-del-discount').css('display', 'block');
          }
          var modal =  $(numModal);
        //   modalWrap.removeClass('fadeOutUp');
        //   modalWrap.addClass('fadeInDown');
          modalWrap.removeClass('animated zoomOut');
          modalWrap.addClass('animated zoomIn');
          modal.removeClass('disabled');
          modal.addClass('flex');
          $('body').addClass('body-modal-open');
          // body.addClass('body-modal');

        });
        $('.modal-close').click(function (){
            if ( window.innerWidth < 750 || window.screen.width < 750) {
                $('.main-menu').removeClass('active');
                $('.menu-toggle').removeClass('active');
            }
            // modalWrap.removeClass('fadeInDown');
            // modalWrap.addClass('fadeOutUp');
            modalWrap.removeClass('animated zoomIn');
            modalWrap.addClass('animated zoomOut');
            setTimeout(function() {
                $('.modal').addClass('disabled');
                }, 700);
            setTimeout(function() {
                $('.modal').removeClass('flex');
                $('body').removeClass('body-modal-open');
                }, 800);  
        });
        $('.modal').mouseup(function (e){ // событие клика по веб-документу
          var div = $(".modal__body"); // тут указываем ID элемента
          var close = $('.modal-close');
          if (close.is(e.target)) {
          } else if (!div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0) { // и не по его дочерним элементам
                $('.main-menu').removeClass('active');
                $('.menu-toggle').removeClass('active');
                var modalWrap = $('.modal__wrap');
                // modalWrap.removeClass('fadeInDown');
                // modalWrap.addClass('fadeOutUp');
                modalWrap.removeClass('animated zoomIn');
                modalWrap.addClass('animated zoomOut');
                setTimeout(function() {
                    $('.modal').addClass('disabled');
                }, 700);
                setTimeout(function() {
                    $('.modal').removeClass('flex');
                    $('body').removeClass('body-modal-open');
                }, 800);
          }
        });
    }
   // UTM
   function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
        }
        return(false);
    }

    $('form').find('input.utm_source').each(function() {
        var a = getQueryVariable('utm_source');
        if(a){
            $(this).val(a);
        }
    }); 
    $('form').find('input.utm_medium').each(function() {
        var a = getQueryVariable('utm_medium');
        if(a){
            $(this).val(a);
        }
    });
    $('form').find('input.utm_campaign').each(function() {
        var a = getQueryVariable('utm_campaign');
        if(a){
            $(this).val(a);
        }
    });
    $('form').find('input.utm_term').each(function() {
        var a = getQueryVariable('utm_term');
        if(a){
            $(this).val(a);
        }
    });
    $('form').find('input.utm_content').each(function() {
        var a = getQueryVariable('utm_content');
        if(a){
            $(this).val(a);
        }
    });

    // form
    $('form').submit(function() { 
        var form = $(this);
        form.find('.rfield').addClass('empty_field');

        // Функция проверки полей формы

        form.find('.rfield').each(function(){
            if($(this).val() != ''){
                // Если поле не пустое удаляем класс-указание
                $(this).removeClass('empty_field');

                if(form.attr("name") == "quiz"){
                        
                console.log('jr');
                    

                    if (!form.find('.empty_field').length) {

                        $.ajax({
                            type: "POST",
                            url: "../mail2.php", //Change
                            data: form.serialize()
                        }).done(function() {
                            var numModal = form.find('.btn-finish').attr('data-modal');
                            var modal =  $(numModal);
                            var modalWrap = $('.modal__wrap');
                            // modalWrap.removeClass('fadeOutUp');
                            // modalWrap.addClass('fadeInDown');
                            modalWrap.removeClass('animated zoomOut');
                            modalWrap.addClass('animated zoomIn');
                            $('.modal').addClass('disabled');
                            modal.removeClass('disabled');
                            modal.addClass('flex');
                            $('body').addClass('body-modal-open');
                            setTimeout(function() {
                                // Done Functions
                                // form.trigger("reset");
                            }, 1000);
                        });

                        $.ajax({
                            method: "POST",
                            url: "../telegram.php", //Change
                            data: form.serialize()
                        }).done(function(){});

                  
                    }

            } else {
                $('.useful__label').css('border-color', 'red');
            }
            } else {}
        });
		return false;
    });

// MAP
    
ymaps.ready(init);
function init(){     
   var myMap = new ymaps.Map("map", {
        center: [59.832133, 30.369899],
        zoom: 15
    }),
    
    // Создаем метку с помощью вспомогательного класса.
    myPlacemark1 = new ymaps.Placemark([59.832008, 30.375966], {
     // Свойства.
     // Содержимое иконки, балуна и хинта.
     balloonContentBody: 'Народный камин',
    balloonContentFooter: 'Москва, ул.Зацепа 41, офис 107',
    hintContent: 'Народный камин'
 }, {
     // Опции.
     // Своё изображение иконки метки.
     iconLayout: 'default#imageWithContent',
     iconImageHref: '../images/marker.svg',
     // Размеры метки.
     iconImageSize: [46, 65]
 });

// Добавляем все метки на карту.
myMap.geoObjects.add(myPlacemark1);
myMap.behaviors.disable('scrollZoom');

};
 // MAP

});

$(window).scroll(function(){
    if ($(window).scrollTop() > $(".div-block-28").offset().top-200) { //если страница прокручена
        setTimeout(function(){  
                    
            var introLetter1 = $(".div-block-28").find('.animated');
            introLetter1.each(function(i,t) {
                var $this = $(t);
                setTimeout(function(){ $this.addClass('fadeIn'); },i*20);
            });
            
        },500);
    } else {//иначе

        $(".div-block-28").find('.animated').removeClass('fadeIn'); //прячем блок
    }
 });






//     var scrolled = $(window).scrollTop();

  /* Scroll event handler */
  
