$(document).ready(function () {
  var screen_height = $(window).height();
  var headers_height = $('.headers_container').height();
  
  $('#main_banner, #about_section').height(screen_height);
  $('')
  $('.headers_container').css('padding', (screen_height-headers_height)/2+'px 0');

  $('#main_banner .icon_container').click(function () {
    $('html, body').animate({
	  scrollTop: $("#main_gallery").offset().top
    }, 1500);
  });
  $('#footer .icon_container').click(function () {
	$('html, body').animate({
	  scrollTop: $("#main_gallery").offset().top
	}, 1500);
  });
  
  
  
});