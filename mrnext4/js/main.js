$(document).ready(function() {

$('.header-nav__item, .footer-nav__item').click(function() {
    $('body, html').animate({
        scrollTop: $('.package').offset().top
    }, 500);
});

$('.package__label').click(function() {
    $('.package__label').removeClass('active');
    $(this).toggleClass('active');
});

$('.header-nav__item.item1').click(function() {
    $('.package__label').removeClass('active');
    $('.package__label.item1').addClass('active');
});
$('.header-nav__item.item2').click(function() {
    $('.package__label').removeClass('active');
    $('.package__label.item2').addClass('active');
});
$('.header-nav__item.item3').click(function() {
    $('.package__label').removeClass('active');
    $('.package__label.item3').addClass('active');
});


const swiperHero = new Swiper('.swiper-hero',{
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true
    }
});

const swiperPackage = new Swiper('.swiper-package', {
    loop: true,
    slidesPerView: 1.2,
    spaceBetween: 23,
    autoHeight: true,
    breakpoints: {
        576: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 33
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 43
        }
    },
});

$('.faq-item').beefup({
    openSingle: true
});

$('.scroll-top').click(function() {
    $('body, html').animate({
        scrollTop: $('.header').offset().top
    }, 500);
});

});