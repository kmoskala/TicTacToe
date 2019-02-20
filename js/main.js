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
  
  var squer_size = ($('.squer_container').width() / 3) -3;
  console.log(squer_size);
  $('.squer').width(squer_size).height(squer_size);
  
  var game = {
  	user1: '<i class="fa fa-times sign"></i>' ,
  	user1_sign: 1 ,
    user2: '<i class="far fa-circle sign"></i>',
    user2_sign: 2 ,
    current: 1,
    moves: 0
  };
  
  $('.squer').click(function () {
  	    if (game.moves===9) {
  	    	alert("koniec gry!");
        }
  	    if(game.moves === 0) {
	        $(this).addClass("active").data('value', game.user1_sign).append(game.user1);
	        $(this).data('value', game.user1_sign);
	        game.current = 2;
	        game.moves++;
	        $('.user_container').find("[data-user= 'first']" ).find(".user").removeClass('.active');
	        $('.user_container').find("[data-user= 'second']" ).find(".user").addClass('.active');
	        console.log($(this).data('value'));
	  
        } else if( game.moves >0 && game.moves<9 && game.current === 1) {
            $(this).addClass("active").data('value', game.user1_sign).append(game.user1);
	        game.current = 2;
	        game.moves++;
	        $('.user_container').find("[data-user= 'first']").find(".user").removeClass('.active');
	        $('.user_container').find("[data-user= 'second']" ).find(".user").addClass('.active');
	        console.log($(this).data('value'));
	  
        } else if( game.moves >0 && game.moves<9 && game.current === 2) {
	        $(this).addClass("active").data('value', game.user2_sign).append(game.user2);
	        game.current = 1;
	        game.moves++;
	        $('.user_container').find("[data-user= 'second']" ).find(".user").removeClass('.active');
	        $('.user_container').find("[data-user= 'first']" ).find(".user").addClass('.active');
	        console.log($(this).data('value'));
	  
        }
  	    console.log(game);
  });
  
});