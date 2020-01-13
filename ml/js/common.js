$(".dropzone-init").dropzone({ 
  url: "/file/post",
  dictDefaultMessage: ""
});

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


$( document ).ready(function() {  

  ////////////////////////////////
  $('[data-toggle="tooltip"]').tooltip()

  ///////////////////////////////
  $('.liker__button').on('click', function(){
    $(this).toggleClass('active');
  });


  /////////////////////////////////
  $('.owl-you-watched').owlCarousel({
    autoWidth: true,
    navText: ['<i class="i-left"></i>', '<i class="i-right"></i>'],
    responsive : {
        0 : {
            margin: 5,
            nav: false,
            dots: true
        },
        992 : {
            margin: 20,
            nav: true,
            dots: false
        }
    }
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
    loop: true,
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
  
  $('.owl-author').owlCarousel({
    autoWidth: true,
    margin: 8,
    nav: true,
    dots: false,
    navText: ['<i class="i-left"></i>', '<i class="i-right"></i>']
  });

  $('.owl-review-author').owlCarousel({
    items: 1,
    nav: true,
    dots: false,
    navText: ['<i class="i-left"></i>', '<i class="i-right"></i>']
  });

  ////////////////////////////////////////////
  $('.js-textarea-counter').textareaCounter();



  //////////////////////////////////
  var sliderPrice = document.getElementById('price-ui-slider');

  noUiSlider.create(sliderPrice, {
      start: [6000, 10400],
      connect: true,
      step: 1,
      range: {
          'min': 0,
          'max': 11400
      }
  });
  var skipValues = [
      document.getElementById('price-value-lower'),
      document.getElementById('price-value-upper')
  ];

  sliderPrice.noUiSlider.on('update', function (values, handle) {
      skipValues[handle].innerHTML = values[handle];
  });



}); // end ready

$(document).ready(function() {
    var sliderImg = document.getElementById('img-ui-slider');
    noUiSlider.create(sliderImg, {
        start: [50],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });
});

$('.search__label').on('click', function(e){
  e.preventDefault();
  
  var $this = $(this),
      form = $this.closest('.search__form'),
      input = form.find('.search__input');
  
  input.toggleClass('show');
});

$(document).mouseup(function (e) {
  var container = $('.search__input');
  if (container.has(e.target).length === 0 && 
      $(e.target).closest('form').length === 0){
    container.removeClass('show');
  }
});


