(function($) {

$.fn.eDims = function(options) {

  var settings = $.extend({
        widths  : false
      }, options),
      items = $(this), //grab all items
      dims = [], //create empty array to store values
      tallest; //create variable to make note of the tallest slide

    var egalizeDimensions = function() {

        items.each(function() { //add heights to array
            dims.push($(this).outerHeight()); 
            if(settings.widths) { dims.push($(this).outerWidth()); }
        });
        tallest = Math.max.apply(null, dims); //cache largest value
        
        items.each(function() {
            $(this).css('min-height',tallest + 'px');
        });
    };

    egalizeDimensions();

    $(window).on('resize orientationchange', function () {
        //reset vars
        tallest = 0;
        dims.length = 0;

        items.each(function() {
            $(this).css('min-height','0'); //reset min-height
        }); 
        egalizeDimensions(); //run it again 
    });
};
  
}(jQuery));
