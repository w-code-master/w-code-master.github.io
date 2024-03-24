AOS.init({
    acnhorPlacement: 'top-bottom',
    once: true,
    duration: 700
});

$(document).ready(() => {
    
    // if ($(window).width() > 991) {
    //     function fixHeader() {
    //         var winTop = $(window).scrollTop();
    //         if(winTop >= 1){
    //             $('#header').addClass('header__fixed');
    //         } else {
    //             $('#header').removeClass('header__fixed');
    //         }
    //     }
    //     fixHeader();
    //     $(window).scroll(function(){
    //         fixHeader();
    //     });
    // } else {
    //     $('.intro__advantages, .offer__date, .privacy__warning ').attr('data-aos-delay', 0)
    // }

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
            modal.fadeOut();
            overlay.fadeIn();
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

    $('a[href^="#"]').click(function(){
        $('body, html').removeClass('my-body-noscroll-class');
        let target = $(this).attr('href');
        let targetPosition = $(target).offset().top;
        $('html, body').animate({scrollTop: targetPosition}, 700);
        return false;
     });

     
    // E-mail Ajax Send
    $("form").submit(function (event) {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "https://tokmaganbet.ru/sites/elektro/telegram.php",
            data: th.serialize(),
        }).done(function () {});

        var url = "https://tokmaganbet.ru/sites/elektro/thanks.html";
        $(location).attr("href", url);
        return false;
    });


    // Статус в шапке
    var aDate = new Date();
    var utc = aDate.getTime() + (aDate.getTimezoneOffset() * 60000);
    var newdate = new Date(utc + (3600000*3));
    var currentHour = newdate.getHours();
    console.log(currentHour);

    var arr = ['9','10','11','12','13','14','15','16','17','18'];
    var myTry = 0;
    $.each(arr,function(index,value){
        if(value == currentHour) {
            myTry = 1;
        }
    });
    if(myTry == 0) {
        $('.header__status .indicator').addClass('offline');
        $('.header__status span').text('Прием заявок с 09.00 до 18.00');
    }

    // Актуальная дата под кнопкой 
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


    // 
    $('.case-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.case-left',
        nextArrow: '.case-right',
        draggable: false,
        swipe: false,
        swipeToSlide: false,
        touchMove: false,
        draggable: false,
        accessibility: false,
        fade: true
    });
    
    // quiz
    $(".quiz .next-btn").on("click", function(e) {
        if ($(".quiz").hasClass("quiz8")) {
            $(".step8 .box input").each(function() {
                if ($(this).prop("checked")) {
                    removeSteps();
                    $(".quiz").addClass("quiz9");
                    
                    let targetPosition = $('#quiz').offset().top;
                    $('html, body').animate({scrollTop: targetPosition}, 700);
                }
            });
        }
        if ($(".quiz").hasClass("quiz7")) {
            $(".step7 .box input").each(function() {
                if ($(this).prop("checked")) {
                    removeSteps();
                    $(".quiz").addClass("quiz8");
                }
            });
        }
        if ($(".quiz").hasClass("quiz6")) {
            $(".step6 .box input").each(function() {
                if ($(this).prop("checked")) {
                    removeSteps();
                    $(".quiz").addClass("quiz7");
                }
            });
        }
        if ($(".quiz").hasClass("quiz5")) {
            $(".step5 .box input").each(function() {
                if ($(this).prop("checked")) {
                    removeSteps();
                    $(".quiz").addClass("quiz6");
                }
            });
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
        $(".quiz").removeClass("quiz1").removeClass("quiz2").removeClass("quiz3").removeClass("quiz4").removeClass("quiz5").removeClass("quiz6").removeClass("quiz7").removeClass("quiz8");
    }
    
    $('.simple-label').click(function() {
        $(this).parent().find('.simple-label').removeClass('active');
        $(this).addClass('active');
    });

    if ($(window).width() < 767) {
        $('.intro__advantages').slick({
            infinite: true,
            arrows: false,
            dots: false,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            adaptiveHeight: true,
        });
    }  


});
