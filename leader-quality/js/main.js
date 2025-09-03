const heroSlider = new Swiper('.hero-slider', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    autoHeight: true,
    navigation: {
        nextEl: '.hero-slider-next',
        prevEl: '.hero-slider-prev',
    }
});