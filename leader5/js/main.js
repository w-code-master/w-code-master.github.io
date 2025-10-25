$(document).ready(function() {

// mobile nav
$(".burger-header").click(function() {
    $(".burger-header").toggleClass("active");
    $("html").toggleClass("overflow-y-hidden");
});
$(".nav li a").click(function() {
    $(".mobile-nav").fadeOut(300);
    $("html").removeClass("overflow-y-hidden");
    $(".burger-header").removeClass("active");
});
$(".burger-header").click(function() {
    if($(".mobile-nav").is(":visible")) {
        $(".mobile-nav").fadeOut(300);
        $("html").removeClass("overflow-y-hidden");
    } else {
        $(".mobile-nav").fadeIn(300);
        $("html").addClass("overflow-y-hidden");
    };
});

const heroSlider = new Swiper('.hero-slider', {
    loop: true,
    slidesPerView: 1,
    autoHeight: true,
    navigation: {
        nextEl: '.hero-slider-next',
        prevEl: '.hero-slider-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        // dynamicBullets: true
    }
});
const objectsSlider = new Swiper('.objects-slider', {
    loop: true,
    slidesPerView: 1,
    autoHeight: true,
    navigation: {
        nextEl: '.objects-slider-next',
        prevEl: '.objects-slider-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        dynamicBullets: true
    }
});

const reviewSlider = new Swiper('.review-slider', {
    loop: true,
    spaceBetween: 20,
    navigation: {
        nextEl: '.review-slider-next',
        prevEl: '.review-slider-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        dynamicBullets: true
    },
    autoHeight: true,
    slidesPerView: 1.2,
    breakpoints: {
        576: {
            slidesPerView: 2
        },
        860: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        }
    }
});

const equipmentSlider = new Swiper('.equipment-slider', {
    loop: true,
    autoHeight: false,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        576: {
            slidesPerView: 2
        },
        860: {
            slidesPerView: 3
        },
        1300: {
            slidesPerView: 4
        }
    },
    navigation: {
        nextEl: '.equipment-slider-next',
        prevEl: '.equipment-slider-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        dynamicBullets: true
    }
});

const otherServicesSlider = new Swiper('.other-services-slider', {
    loop: true,
    slidesPerView: 1,
    autoHeight: false,
    spaceBetween: 20,
    breakpoints: {
        576: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        }
    },
    navigation: {
        nextEl: '.other-services-slider-next',
        prevEl: '.other-services-slider-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        dynamicBullets: true
    }
});


$('#person-area-tabs').easytabs({
    updateHash: false
});



$('select').niceSelect();

$('.btn').magnificPopup({
    removalDelay: 300,
    mainClass: 'mfp-fade'
});

});