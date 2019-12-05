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

////////////////////////////////////////////
$.fn.textareaCounter = function( options ) {
  
    return this.each(function(){
        var $this = $(this);
        var limit = $this.attr('maxlength');
        var $maxlimit =  $($this.attr("data-count-total"));
        $maxlimit.text(limit);
        
        $(this).on('input', function() {
          var $count =  $($this.attr("data-count"));
          var currentCount = $this.val().length;
          $count.text(currentCount);
       });
 
    });
};
$('.js-textarea-counter').textareaCounter();



///////////////////////////////////////////////////
$('.beefup').beefup({
  openSingle: true
});


///////////////////////////////////////////////
// menu
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