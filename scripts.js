/* Dynamic top menu positioning
 *
 */

$(window).load(function(){
	var height = $('header').height()+280;
	$('.profilePic.splashScreen').css({'top':($(window).height()/2)-200});
	$('section').css({'margin-top':height});
	$('.compIcon').children('paper-ripple').css({'height':$('.compIcon').height()+8,'width':$('.compIcon').width()});
	$(window).resize(function(){
		var height = $('header').height()+280;
		$('section').css({'margin-top':height});
		$('.compIcon').children('paper-ripple').css({'height':$('.compIcon').height()+8,'width':$('.compIcon').width()});
	});
	var dob = new Date(1996,4,19);
	var today = new Date();
	var age = Math.floor((today-dob) / (365.25 * 24 * 60 * 60 * 1000));
	$('#age').html(age);
	
	$('.profilePic').click(function(){
		$('#banner').toggleClass('splashScreen');
		$('.profilePic').toggleClass('splashScreen');
		$('.profilePic').toggleClass('top');
		$('.card').toggleClass('splashScreen');
		$('paper-fab').toggleClass('splashScreen');
		$('.splashPresentation').toggleClass('splashScreen');
	});
});
