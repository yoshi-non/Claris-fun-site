//pagetop用のコードです
jQuery(function() {
    var pagetop = $('#page_top');   
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
  $('a[href^="#"]').click(function(){
    var time = 0;
    var href= $(this).attr("href");
    var target = $(href == "#" ? 'html' : href);
    var distance = target.offset().top;
    $("html, body").animate({scrollTop:distance}, time, "swing");
    return false;
  });
});

//フェードイン用のコードです
$(function(){
  $(window).on('load scroll', function() {
    $(".show").each(function() {
      var winScroll = $(window).scrollTop();
      var winHeight = $(window).height();
      var scrollPos = winScroll + (winHeight * 0.9);
      if($(this).offset().top < scrollPos) {
        $(this).css({opacity: 1, transform: 'translate(0, 0)'});
      }
    });
  });
});
