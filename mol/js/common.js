///////////////////////////
function dragNdrop(event) {
    var fileName = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("uploadFilePreview");
    var previewImg = document.createElement("img");
    previewImg.setAttribute("src", fileName);
    preview.innerHTML = "";
    preview.appendChild(previewImg);
}
function drag() {
    document.getElementById('uploadFile').parentNode.className = 'draging dragBox';
}
function drop() {
    document.getElementById('uploadFile').parentNode.className = 'dragBox';
}

document.addEventListener("DOMContentLoaded", function() {

  /////////////////////////////////////
  $(".sandwich-box").click(function() {
    $(".sandwich-icon").toggleClass("active");
  });
  $(".wrapper-nav li a").click(function() {
    $(".wrapper-nav").fadeOut(600);
    $(".sandwich-icon").toggleClass("active");
  });
  $(".sandwich-box").click(function() {
    if($(".wrapper-nav").is(":visible")) {
      $(".wrapper-nav").fadeOut(600);
    } else {
      $(".wrapper-nav").fadeIn(600);
    };
  });

  ///////////////////////////////
  $('.liker__button').on('click', function(){
    $(this).toggleClass('active');
  });


  //////////////////////////////
  $('.category-posts').masonry({
      itemSelector: '.category-posts__item'
  });


  ////////////////////////////////////
  $('.owl-you-watched').owlCarousel({
    autoWidth: true,
    margin: 20,
    nav: true,
    dots: false,
    navText: ['<i class="i-left"></i>', '<i class="i-right"></i>']
  });

  $('.owl-other-work').owlCarousel({
    loop: true,
    autoWidth: true,
    margin: 12,
    nav: true,
    dots: false,
    navText: ['<i class="i-left"></i>', '<i class="i-right"></i>']
  });

  $('.owl-gallery').owlCarousel({
    autoWidth: true,
    margin: 12,
    nav: true,
    dots: false,
    navText: ['<i class="i-left"></i>', '<i class="i-right"></i>']
  });

  $('.owl-product-slider').owlCarousel({
    autoWidth: true,
    margin: 0,
    nav: true,
    dots: false,
    navText: ['<i class="i-left"></i>', '<i class="i-right"></i>']
  });

  $('.owl-add-my-style').owlCarousel({
    loop: true,
    autoWidth: true,
    margin: 12,
    nav: true,
    dots: false,
    navText: ['<i class="i-left"></i>', '<i class="i-right"></i>']
  });

  ////////////////////////////////////////////
  $('.js-textarea-counter').textareaCounter();


  //////////////////////////////////
  var slider = document.getElementById('price-slider');

  noUiSlider.create(slider, {
      start: [6000, 11400],
      connect: true,
      step: 1,
      range: {
          'min': 0,
          'max': 11400
      }
  });
  var skipValues = [
      document.getElementById('skip-value-lower'),
      document.getElementById('skip-value-upper')
  ];

  slider.noUiSlider.on('update', function (values, handle) {
      skipValues[handle].innerHTML = values[handle];
  });


}); // end DOMContentLoaded