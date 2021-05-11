// https://stackoverflow.com/questions/11645081/how-to-build-simple-tabs-with-jquery
// http://jsfiddle.net/vRqcb/11/

function initTab ()
{    
	$('#tabs li a:not(:first)').addClass('inactive');
	$('.container').hide();
	$('.container:first').show();
	$('head').append('<link rel="stylesheet" href="https://combinatronics.com/u8211001/blogger/master/feedIconView.css" type="text/css" />');

	$('#tabs li a').click(function(){
		var t = $(this).attr('id');
		if($(this).hasClass('inactive')){ //this is the start of our condition 
			$('#tabs li a').addClass('inactive');           
			$(this).removeClass('inactive');

			$('.container').hide();
			$('#'+ t + 'C').fadeIn('slow');
			
		}
		
		switch (t) {
			case 'tab1':
				$('head').append('<link rel="stylesheet" href="https://combinatronics.com/u8211001/blogger/master/feedIconView.css" type="text/css" />');
				break;
				
			case 'tab2':
				$('head').append('<link rel="stylesheet" href="https://combinatronics.com/u8211001/blogger/master/feedListView.css" type="text/css" />');
				break;

		}
	});

}

$(document).ready(function()
{    
	initTab ();
});
