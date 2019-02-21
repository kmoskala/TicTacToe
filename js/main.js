function init() {
	var screen_height = $(window).height(),
	    screen_width = $(window).width(),
		headers_height = $('.headers_container').height(),
		squer_size = ($('.squer_container').width() / 3) -3,
	    phone_screen_size = (($(window).width()- 20) /3)-12;
	 
	if(screen_width < 768) {
		$('.squer').width(phone_screen_size).height(phone_screen_size);
	} else {
		$('.squer').width(squer_size).height(squer_size);
		
	}
	
	$('#main_banner, #about_section').height(screen_height);
	$('.headers_container').css('padding', (screen_height-headers_height)/2+'px 0');
	
}
$(window).resize(function () {
	init();
	console.log( $(window).width())
});
$(document).ready(function () {
  init();

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
  	    	$('.squer').each(function () {
		       $(this).removeClass("active").data('value', '').children().remove();
	        });
  	    	game.current = 1;
  	    	game.moves = 0;
        }
  	    if(game.moves === 0) {
	        $(this).addClass("active").data('value', game.user1_sign).append(game.user1);
	        $(this).data('value', game.user1_sign);
	        game.current = 2;
	        game.moves++;
	        $('.user_container[data-user= "first"]').removeClass('active');
	        $('.user_container[data-user= "second"]').addClass('active');
	  
        } else if( game.moves >0 && game.moves<9 && game.current === 1) {
  	    	if(!$(this).hasClass("active")) {
		        $(this).addClass("active").data('value', game.user1_sign).append(game.user1);
		        game.current = 2;
		        game.moves++;
		        $('.user_container[data-user= "first"]').removeClass('active');
		        $('.user_container[data-user= "second"]').addClass('active');
            }
	        winer(game);
        } else if( game.moves >0 && game.moves<9 && game.current === 2) {
	        if(!$(this).hasClass("active")) {
		        $(this).addClass("active").data('value', game.user2_sign).append(game.user2);
		        game.current = 1;
		        game.moves++;
		        $('.user_container[data-user= "second"]').removeClass('active');
		        $('.user_container[data-user= "first"]').addClass('active');
		        
	        }
	        winer(game);
        }
  });
	$("#popup .box_info .icon").click(function () {
		$('.squer').each(function () {
			$(this).removeClass("active").data('value', '').children().remove();
		});
		game.current = 1;
		game.moves = 0;
		$("#popup").hide();
		
	});
 
});

function winer(game){
	var s1 = $("#one").hasClass("active"),
	    s2 = $("#two").hasClass("active"),
	    s3 = $("#three").hasClass("active"),
	    s4 = $("#four").hasClass("active"),
	    s5 = $("#five").hasClass("active"),
	    s6 = $("#six").hasClass("active"),
	    s7 = $("#seven").hasClass("active"),
		s8 = $("#eight").hasClass("active"),
		s9 = $("#nine").hasClass("active"),
		d1 = $("#one").data("value"),
		d2 = $("#two").data("value"),
		d3 = $("#three").data("value"),
		d4 = $("#four").data("value"),
		d5 = $("#five").data("value"),
		d6 = $("#six").data("value"),
		d7 = $("#seven").data("value"),
		d8 = $("#eight").data("value"),
		d9 = $("#nine").data("value");
	//cross win
	if((s1 && d1===1 && s2 && d2===1 && s3 && d3===1) ||(s4 && d4===1 && s5 && d5===1 && s6 && d6===1) || (s7 && d7===1 && s8 && d8===1 && s9 && d9===1) || (s1 && d1===1 && s4 && d4===1 && s7 && d7===1) ||(s2 && d2===1 && s5 && d5===1 && s8 && d8===1) || (s3 && d3===1 && s6 && d6===1 && s9 && d9===1) ||(s1 && d1===1 && s5 && d5===1 && s9 && d9===1) || (s3 && d3===1 && s5 && d5===1 && s7 && d7===1)) {
		$("#popup").show();
		$("#popup .box_info p").text("Wygrywa Krzyżyk");
		
		//circle win
	} else if ((s1 && d1===2 && s2 && d2===1 && s3 && d3===2) ||(s4 && d4===2 && s5 && d5===2 && s6 && d6===2) || (s7 && d7===2 && s8 && d8===2 && s9 && d9===2) || (s1 && d1===2 && s4 && d4===2 && s7 && d7===2) ||(s2 && d2===2 && s5 && d5===2 && s8 && d8===2) || (s3 && d3===2 && s6 && d6===2 && s9 && d9===2) ||(s1 && d1===2 && s5 && d5===2 && s9 && d9===2) || (s3 && d3===2 && s5 && d5===2 && s7 && d7===2)) {
		$("#popup").show();
		$("#popup .box_info p").text("Wygrywa Kółko");
		
	} else if(s1 && s2 && s3 && s4 && s5 && s6 && s7 && s8 && s9) {
		$("#popup").show();
		$("#popup .box_info p").text("Spruóbujcie jeszcze raz");
	}
}