$(document).ready(function() {


	$('#start').click('click touchstart', function() {
		$(this).animate({top: '-100px'}, 500);
		//$(this).animate({opacity: '0'}, 2000);

		$("#start").click(function(){
        $("#buttons").show(1000);
    });
		
	});

	$('#btn1').click(function(){
		$(this).fadeOut( "slow", function() {
	    // Animation complete. Can insert callback here.
		  });
	});

	$('#btn2').click(function(){
		$(this).animate({width: '800px'}, 1500);
	});

	$('#btn3').click(function(){
		$(this).addClass('animated shake');
	});

	$('#btn4').click(function(){
		$(this).addClass('animated rubberBand');
	});

	$('#btn5').click(function(){
		$(this).css('background-color', 'pink').slideUp(2000).slideDown(2000);
	});

	/*
	$('#btn6').click(function(){
		$(this).css('color' 'red') function() {
			$(this).css('color' 'orange') function() {
				$(this).css('color' 'yellow') function() {
					$(this).css('color' 'green') function() {
						$(this).css('color' 'blue') function() {
							$(this).css('color' 'violet')
						});	
					});
				});
			});
		});
	});
*/

	$('#btn7').click(function(){
		$(this).css('background-color', 'red').css('color', 'yellow');
	});

	$('#btn8').click(function(){
		$(this).animate({height: '0px'}, 1000);
		$(this).animate({width: '0px'}, 500);
	});

	$('#btn9').click(function(){
		$(this).animate({height: '0px'}, 1000);
		$(this).animate({width: '0px'}, 500);

		$('#pentagon').show(1000);
	});

	$('#btn11').click(function(){
		$(this).style.border = "4px solid black";
	});

	$('#btn13').click(function(){
		$(this).addClass('animated bounceOutRight');
	});

	$('#btn14').click(function(){
		$(this)..style.fontFamily = "Helvetica,sans-serif";
	});

	$('#btn16').click(function(){
		$(this).animate({height: '+=10%', width: '+=10%'});
	});

	$('#btn17').click(function(){
		$(this).addClass('animated bounceOutRight');
	});

	$('#btn18').click(function(){
		$(this).animate({height: '0px'}, 'fast');
		$(this).animate({height: '0px'}, 'fast');
		$(this).animate({height: '0px'}, 'fast');
	});

	$('#btn25').click(function(){
	    alert("Why you click me?");
	});

	$('#btn27').click(function(){
	    $(this).show("#btn28", "#btn29");
	});

});