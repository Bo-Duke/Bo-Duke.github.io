/* Dynamic top menu positioning
 *
 */

window.onload = function(){
    sectionMargin = function() {
        var height = document.querySelector('header').clientHeight+280;
        document.querySelector('section').style.marginTop = height+'px';
    };
	var isSplashed = true;
	document.querySelector('.profilePic.splashScreen').style.top = (window.innerHeight/2)-200+'px';
	window.onresize = sectionMargin();

	splashScreenToggle = function() {
		document.querySelector('#banner').classList.toggle('splashScreen');
		document.querySelector('.profilePic').classList.toggle('splashScreen');
		document.querySelector('.profilePic').classList.toggle('top');
        var cards = document.querySelectorAll('.card');
        for (var i = 0; i < cards.length; i++) {
            cards[i].classList.toggle('splashScreen');
        }
		document.querySelector('.mailicon').classList.toggle('splashScreen');
		document.querySelector('.splashPresentation').classList.toggle('splashScreen');
		document.querySelector('.arrow').classList.toggle('splashScreen');
		isSplashed = !isSplashed;
        sectionMargin();
	};

	window.onscroll = function() {
		if (isSplashed) {
			splashScreenToggle();
		}
	};
	document.querySelector('.profilePic').onclick = function(){
		window.scrollTo(0, 0);
		splashScreenToggle();
	};
	document.querySelector('.arrow').onclick = function(){
		splashScreenToggle();
	};
};
