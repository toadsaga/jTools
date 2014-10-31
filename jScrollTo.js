(function($) {

$.fn.sTo = function(options) {

  var settings = $.extend({
        duration  : 400,
        easing    : "swing"
      }, options),
      $btns = $(this);
      

  $btns.each(function(){
    var $hash = $(this).attr('href'),
        $target;

    if(!$hash || $hash==='#'){
      $target=$('body');
    } else {
      $target=$($hash);
    }
    $(this).on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        'scrollTop': $target.offset().top
      }, settings.duration, settings.easing);
    });
  })
  
  }(jQuery));
