$(document).ready(function(){
   // cache the window object
   $window = $(window);
 debugger
   $('section[data-type="background"]').each(function(){
     // declare the variable to affect the defined data-type
     var $scroll = $(this);
                     
      $(window).scroll(function() {
        // HTML5 proves useful for helping with creating JS functions!
        // also, negative value because we're scrolling upwards                            
        var yPos = -($window.scrollTop() / $scroll.data('speed'));
         
        // background position
        var coords = '50% '+ yPos + 'px';
 
        // move the background
        $scroll.css({ backgroundPosition: coords });   
      }); // end window scroll
       
        $(window).scroll(function() {
        // HTML5 proves useful for helping with creating JS functions!
        // also, negative value because we're scrolling upwards                            
        var yPos = ($window.scrollTop() / $scroll.data('mspeed'));
         
        // background position
        var coords = '50% '+ yPos + 'px';
 
        // move the background
        $scroll.css({ backgroundPosition: coords });   
      }); // end window scrol
       
     var window_width = $(window).width() - $('#object').width();

var document_height = $(document).height() - $(window).height();

        $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        var object_position_left = window_width * (scroll_position / $scroll.data('hspeed'));
        $('#object').css({
            'right': object_position_left
        });
    });
   });  // end section function
}); // close out script

/* Create HTML5 element for IE */
document.createElement("section");