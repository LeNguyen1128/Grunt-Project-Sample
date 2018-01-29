;jQuery(function($) {
  var windowWidth = $(window).width(),
      windowHeight = $(window).height(),
      secSlider;

  var resizeMainWindow = function(e) {
      var windowWidthNew = jQuery(window).width();
      var windowHeightNew = jQuery(window).height();
      if (windowWidth != windowWidthNew || windowHeight != windowHeightNew) {
          windowWidth = windowWidthNew;
          windowHeight = windowHeightNew;
      }
  };

  $(window).bind('resize', resizeMainWindow);

  $(document).ready(function() {
    $('.item-menu').on('click', function(){
      if(!$(this).hasClass('active')){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
      } else {
        return true;
      }
    });

    $(window).click(function(e) {
        if(e.target.className.match("item-menu") == null) {
          $('.menu').find('.active').removeClass('active');
        }
    });

    // $('ul.sub-menu').children('li.parent').addClass('fa').addClass('fa-angle-right');
    //end document ready
  });

  $(window).load(function() {

  });

});
