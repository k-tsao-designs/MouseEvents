$(document).ready(function() {


	$('#start').click('click touchstart', function() {
		$(this).animate({top: '-100%'}, 500);
		//$(this).animate({opacity: '0'}, 2000);

		$("#show").click(function(){
        $("#buttons").show(1000);
    });
		
	});

	$('#btn1').click(function(){
		$(this).fadeOut( "slow", function() {
	    // Animation complete. Can insert callback here.
		  });
	});

	$('#btn2').click(function(){
		$(this).grow( "slow");
	});

});