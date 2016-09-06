$(document).ready(function() {


	$('#start').click('click touchstart', function() {
		$(this).animate({top: '-100%'}, 500);
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

	$('#btn6').click(function(){
		$(this).css('color' 'red' function() {
			$(this).css('color' 'orange' function() {
				$(this).css('color' 'yellow' function() {
					$(this).css('color' 'green' function() {
						$(this).css('color' 'blue' function() {
							$(this).css('color' 'violet')
						});	
					});
				});
			});
		});
	});

	$('#btn7').click(function(){
		$(this).css('background-color', 'red').css('color', 'yellow');
	});

	$('#btn9').click(function(){
		$(this).animate({height: '0px'}, 1000);
	});

	$('#btn11').click(function(){
		$(this).style.border = "4px solid black";
	});

	$('#btn13').click(function(){
		$(this).addClass('animated bounceOutRight');
	});

	$('#btn25').click(function(){
	    alert("Why you click me?");
	});

});