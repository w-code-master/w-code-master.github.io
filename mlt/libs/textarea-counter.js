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