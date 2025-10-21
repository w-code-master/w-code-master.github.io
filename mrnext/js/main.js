$(document).ready(function() {

$('.header-nav__item').click(function() {
    $('body, html').animate({
        scrollTop: $('.efdwede__wrap').offset().top
    }, 500);
});

$('.efdwede__label').click(function() {
    $('.efdwede__label').removeClass('active');
    $(this).toggleClass('active');
});

$('.header-nav__item.item1').click(function() {
    $('.efdwede__label').removeClass('active');
    $('.efdwede__label.item1').addClass('active');
});
$('.header-nav__item.item2').click(function() {
    $('.efdwede__label').removeClass('active');
    $('.efdwede__label.item2').addClass('active');
});
$('.header-nav__item.item3').click(function() {
    $('.efdwede__label').removeClass('active');
    $('.efdwede__label.item3').addClass('active');
});


});