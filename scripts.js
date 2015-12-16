/* Dynamic top menu positioning
 *
 */

$(window).load(function(){
	var height = $('header').height()+280;
	var isSplashed = true;
	$('.profilePic.splashScreen').css({'top':($(window).height()/2)-200});
	$('section').css({'margin-top':height});
	$(window).resize(function(){
		var height = $('header').height()+280;
		$('section').css({'margin-top':height});
	});
	var dob = new Date(1996,4,19);
	var today = new Date();
	var age = Math.floor((today-dob) / (365.25 * 24 * 60 * 60 * 1000));
	$('#age').html(age);

	$(window).scroll(function() {
		if (isSplashed) {
			$('#banner').toggleClass('splashScreen');
			$('.profilePic').toggleClass('splashScreen');
			$('.profilePic').toggleClass('top');
			$('.card').toggleClass('splashScreen');
			$('.mailicon').toggleClass('splashScreen');
			$('.splashPresentation').toggleClass('splashScreen');
			$('.arrow').toggleClass('splashScreen');
			isSplashed = !isSplashed;
		};
	});
	$('.profilePic').click(function(){
		window.scrollTo(0, 0);
		$('#banner').toggleClass('splashScreen');
		$('.profilePic').toggleClass('splashScreen');
		$('.profilePic').toggleClass('top');
		$('.card').toggleClass('splashScreen');
		$('.mailicon').toggleClass('splashScreen');
		$('.splashPresentation').toggleClass('splashScreen');
		isSplashed = !isSplashed;
	});
});