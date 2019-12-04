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
