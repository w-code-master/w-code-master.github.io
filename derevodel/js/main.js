$(document).ready(function() {

// mobile nav
$(".header__burger").click(function() {

    $(".header__burger").toggleClass("active");
    $(".mobile-nav").toggleClass("active");
    
    $("html").toggleClass("overflow-y-hidden");

    if($(".mobile-nav").is(":visible")) {
        $(".mobile-nav").fadeOut(0);
    } else {
        $(".mobile-nav").fadeIn(0);
    };
});


const advantagesSlider = new Swiper('.advantages-slider', {
    slidesPerView: "auto",
    centeredSlides: false,
    loop: true
}); 
const workingSlider = new Swiper('.working-slider', {
    slidesPerView: 3,
    spaceBetween: 15,
    loop: true,
    breakpoints: {
        768: {
            spaceBetween: 25
        },
        1630: {
            slidesPerView: 4
        },
        1760: {
            spaceBetween: 45
        }
    }
});

$('#catalog-tabs').easytabs({
    updateHash: false
});


});