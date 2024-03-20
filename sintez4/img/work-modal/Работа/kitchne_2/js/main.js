
AOS.init({
    acnhorPlacement: 'top-bottom',
    once: true,
    duration: 700
});
$(document).ready(() => {

    
    var AllowToNext = false;
    var InputCounts = 0;
    var InputWithValueCounts = 0;
    var inputValue = '';
    var contactMethod = '';
    $('.step2 .additional-btn').on("click", function(e) {
        AllowToNext = true;
        $('.step2 .t-btn').removeClass('disabled');
    });

    $('.step2 .simple-input').on('change', function() {
        var value= this.value.replace(/\D/g,'')||0;
        if (value>400 ) {
            value=400;
        }
        if (value<50) {
            value=50;
            alert('Минимальное значение 50 см');
        }
        this.value = value;
    });

    $('.step2 .simple-input').on('keyup', function() {
        $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''));
        var value = $(this).val();
        if (value>400) {
            alert('Максимальное значение 400 см');
        }
        InputCounts = 0;
        InputWithValueCounts = 0;

        $('.step2 .simple__box.active .simple-input').each(function(index, element) {
            InputCounts++;
            inputValue = element.value;
            if(inputValue !== '') {
                InputWithValueCounts++;
            }
        });

        if(InputWithValueCounts == InputCounts) {
            console.log('Все поля заполнены');
            AllowToNext = true;
            $('.step2 .t-btn').removeClass('disabled');
        }
    });


    if($('.thanks-section').length) {
        ym(73164175,'reachGoal','thanks');
    }
    if($('.quiz-section').length) {
        // Стоп окно
        var exitTry = 0;
        var inFormOrLink;
        setTimeout(function () {
          $(document).mouseleave(function(e){
              if( e.clientY < 0 ){
                  if($('.modal').css('display') == 'none') {
                      if(exitTry <= 0) {
                          $('body').addClass('my-body-noscroll-class');
                          overlay.css('display', 'flex');
                          $('.lifehack').fadeIn();
                      }
                      exitTry++
                  }
              }
          });
        },5000);
    }

    $(window).scroll(function(){
        var winTop = $(window).scrollTop();
        if(winTop >= 10){
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed');
        }
    });


    $('input[type="tel"]').mask('+7 (999) 999-99-99');

    // Модальные окна
    var overlay = $(".overlay"),
        modal = $(".modal"),
        modalClose = $(".modal__close"),
        modalOpen = $(".modal__open");

    overlay.click(function(e) {
        if ($(e.target).closest(".modal").length == 0) {
            $('body').removeClass('my-body-noscroll-class');
            document.querySelector("#mobile__menu").classList.remove("active");
            $(this).fadeOut();
            modal.fadeOut();
        }
    });

    modalClose.click(function() {
        $('body').removeClass('my-body-noscroll-class');
        document.querySelector("#mobile__menu").classList.remove("active");
        overlay.fadeOut();
        modal.fadeOut();
    });

    modalOpen.each(function() {
        $(this).on("click", function(e) {
            var modalId = $(this).attr("data-modal"),
                EachModal = $('.modal[data-modal="' + modalId + '"]');
            $('body').addClass('my-body-noscroll-class');
            document.querySelector("#mobile__menu").classList.remove("active");
            modalTitle = $(this).attr('data-title');
            modal.fadeOut();
            overlay.css('display', 'flex');
            EachModal.fadeIn();
        });
    });

  

    var aDate = new Date();
    // UTC time in msec
    var utc = aDate.getTime() + (aDate.getTimezoneOffset() * 60000);
    // Date object for the requested city
    var newdate = new Date(utc + (3600000*3));
    var currentHour = newdate.getHours();
    var arr = ['10','11','12','13','14','15','16','17', '18', '19', '20'];
    var myTry = 0;
    $.each(arr,function(index,value){
        if(value == currentHour) {
            myTry = 1;
        }
    });
    if(myTry == 0) {
        $('.header__status .green').addClass('offline');
        $('.header__status span').text('Прием заявок с 10.00 до 21.00');
    }


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
    $('.header__menu-btn').on("click", function(e) {
        document.querySelector("#mobile__menu").classList.toggle("active");
        $('body').addClass('my-body-noscroll-class');
    });
    document.querySelector("#mobile__menu-close").onclick = function() {
        document.querySelector("#mobile__menu").classList.toggle("active");
        $('body').removeClass('my-body-noscroll-class');
    };


    $('.case__slider').lightGallery({
        thumbnail: false,
        download: false,
        selector: '.img',
        mode: 'lg-fade'
    });

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

    // quiz
    // quiz
    $(".quiz .step__next").on("click", function(e) {
        if ($(".quiz").hasClass("quiz6")) {
            $(".step6 input").each(function() {
                if ($(this).prop("checked")) {
                    if($(this).val() == 'WhatsApp') {
                        contactMethod = 'WhatsApp'; 
                        $('.form__inner .name').attr('placeholder', 'Введите как к Вам обращаться');
                        $('.form__inner .tel').attr('placeholder', 'Номер Вашего WhatsApp');
                        $('input[type="tel"]').mask("+7 (999) 999-99-99");      
                    } else if($(this).val() == 'Telegram') {
                        $('.form__inner .name').attr('placeholder', 'Введите как к Вам обращаться');
                        $('.form__inner .tel').attr('placeholder', 'Номер/никнейм Вашего Telegram');
                    } else {
                        $('input[type="tel"]').mask("+7 (999) 999-99-99");      
                    }
                    removeSteps();
                    $(".quiz").addClass("itog");
                    goTop();

                    $('.benefits__number').spincrement({
                        thousandSeparator: "",
                        duration: 1600
                    });
                }
            });
        }
        if ($(".quiz").hasClass("quiz5")) {
            $(".step5 input").each(function() {
                if ($(this).prop("checked")) {
                    removeSteps();
                    $(".quiz").addClass("quiz6");
                    goTop();
                }
            });
        }
        if ($(".quiz").hasClass("quiz4")) {
            $(".step4 input").each(function() {
                if ($(this).prop("checked")) {
                    removeSteps();
                    $(".quiz").addClass("quiz5");
                    goTop();
                }
            });
        }
        if ($(".quiz").hasClass("quiz3")) {
            $(".step3 input").each(function() {
                if ($(this).prop("checked")) {
                    removeSteps();
                    $(".quiz").addClass("quiz4");
                    goTop();
                }
            });
        }
        if ($(".quiz").hasClass("quiz2")) {
            if(AllowToNext == true) {
                removeSteps();
                $(".quiz").addClass("quiz3");
                goTop();
            } else {
                alert('Пожалуйста заполните поля или нажмите кнопку "Я не знаю размеры"');
            }
        }
        if ($(".quiz").hasClass("quiz1")) {
            $(".step1 input").each(function() {
                if($(this).prop('checked')) {
                    goTop();
                    $('.step2 .simple__box').removeClass('active');
                    if ($(this).val() == 'Прямая') {
                        removeSteps();
                        $(".quiz").addClass("quiz2");
                        $('.block1').addClass('active');
                    } else if ($(this).val() == 'Угловая') {
                        removeSteps();
                        $(".quiz").addClass("quiz2");
                        $('.block2').addClass('active');
                    } else if ($(this).val() == 'П-образная') {
                        removeSteps();
                        $(".quiz").addClass("quiz2");
                        $('.block3').addClass('active');
                    } else if ($(this).val() == 'С-остравком') {
                        removeSteps();
                        $(".quiz").addClass("quiz2");
                        $('.block4').addClass('active');
                    }
                }
            });
        }
    });


    $(".quiz .prev-btn").on("click", function(e) {
        if ($(".quiz").hasClass("quiz2")) {
            removeSteps();
            $(".quiz").addClass("quiz1");
            AllowToNext = false;
            $('.step2 .t-btn').addClass('disabled');
            $(".step2 input").each(function() {
                $(this).val('');
            });
            goTop();
        }
        if ($(".quiz").hasClass("quiz3")) {
            removeSteps();
            $(".quiz").addClass("quiz2");
            goTop();
        }
        if ($(".quiz").hasClass("quiz4")) {
            removeSteps();
            $(".quiz").addClass("quiz3");
            goTop();
        }
        if ($(".quiz").hasClass("quiz5")) {
            removeSteps();
            $(".quiz").addClass("quiz4");
            goTop();
        }
        if ($(".quiz").hasClass("quiz6")) {
            removeSteps();
            $(".quiz").addClass("quiz5");
            goTop();
        }

    });

    function removeSteps() {
        $(".quiz").removeClass("quiz1").removeClass("quiz2").removeClass("quiz3").removeClass("quiz4").removeClass("quiz5").removeClass("quiz6").removeClass("itog");
    }


    function goTop() {
        if ($(window).width() >= "767") {
        var offset = $('#top').offset().top - 90;
        } else {
            var offset = $('#top').offset().top - 50;
        }
        $('html, body').animate({
            scrollTop: offset
        });
    }

    $('.goQuiz').click(function() {
        if ($(window).width() >= "767") {
            var offset = $('#trigger-section').offset().top;
        } else {
            var offset = $('#trigger-section').offset().top;
        }
        $('html, body').animate({
            scrollTop: offset
        });
    });
    

    $('.case__slider').slick({
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        centerPadding: '30%', 
        arrows: true,
        prevArrow: '.arrow-left',
        nextArrow: '.arrow-right',
        initialSlide: 0,
        dots: true,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              centerPadding: '25%', 
            }
          },
          {
            breakpoint: 560,
            settings: {
              centerMode: false,
              slidesToShow: 1
            }
          },
        ]
      });
  

    document.querySelectorAll("[data-relative-input]").forEach((el) => {
        new Parallax(el, {
            clipRelativeInput: true,
        });
    });

    $('.messenger-btn, a.messenger-label').click(function() {
        ym(73164175,'reachGoal','messenger');
    });

    $('.messenger-label input').on('change', function() {
        if($(this).prop('checked')) {
            $('.messenger-label').removeClass('active');
            $(this).parent().addClass('active');
        }
    });

});
