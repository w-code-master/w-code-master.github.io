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

  /////////////////////
  $('.beefup').beefup({
    openSingle: true
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


  ////////////////////////////////////////////
  $('.js-textarea-counter').textareaCounter();


}); // end DOMContentLoaded