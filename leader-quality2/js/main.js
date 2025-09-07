const heroSlider = new Swiper('.hero-slider', {
    loop: true,
    slidesPerView: 1,
    autoHeight: true,
    navigation: {
        nextEl: '.hero-slider-next',
        prevEl: '.hero-slider-prev',
    }
});
const objects = new Swiper('.objects-slider', {
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
        // dynamicBullets: true
    }
});

const review = new Swiper('.review-slider', {
    loop: true,
    slidesPerView: 4,
    autoHeight: false,
    spaceBetween: 20,
    navigation: {
        nextEl: '.review-slider-next',
        prevEl: '.review-slider-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        // dynamicBullets: true
    }
});


$('#person-area-tabs').easytabs({
    updateHash: false
});