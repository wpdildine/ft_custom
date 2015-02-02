jQuery(document).ready(function() {
	jQuery.material.init();
});

var imageHeight;
var imageWidth;
/*jQuery(document).ready(function() {
	windowHeight = window.innerHeight;
	jQuery("#home-bg").css('max-height', windowHeight);	
});

jQuery(window).resize(function(){
	windowHeight = window.innerHeight;
	jQuery("#home-bg").css('max-height', windowHeight);
});
*/
jQuery(document).ready(function() {
	imageWidth = window.innerWidth;
	imageHeight= window.innerHeight;
	
	if (imageWidth*.625 < imageHeight){
		jQuery("#home-bg.bg-1").css('background-position-y', '0, ' + imageHeight + 'px');
		jQuery("#home-bg.bg-1").css('background-size', 'auto ' + imageHeight +  'px');
	}
	else if (imageWidth*.625 > imageHeight){
		jQuery("#home-bg.bg-1").css('background-position-y', '0, ' + imageWidth*.625 + 'px');
		jQuery("#home-bg.bg-1").css('background-size', imageWidth + 'px ' + imageWidth*.625 +  'px');
	}
	alert(imageWidth + ' Image Height ' + imageHeight );
});

jQuery(window).resize(function(){
	imageWidth = window.innerWidth;
	imageHeight= window.innerHeight;
	
	if (imageWidth*.625 < imageHeight){
		jQuery("#home-bg.bg-1").css('background-position-y', '0, ' + imageHeight + 'px');
		jQuery("#home-bg.bg-1").css('background-size', 'auto ' + imageHeight +  'px');
	}
	else if (imageWidth*.625 > imageHeight){
		jQuery("#home-bg.bg-1").css('background-position-y', '0, ' + imageWidth*.625 + 'px');
		jQuery("#home-bg.bg-1").css('background-size', imageWidth + 'px ' + imageWidth*.625 +  'px');
	}
});

/*jQuery(document).ready(function() {
	TRUNCATE = jQuery('#home-bg.bg-1').css('background-size');
	jQuery("#home-bg.bg-1").css('background-position-y', '0, ' + TRUNCATE + 'px');
});

jQuery(window).resize(function(){
	TRUNCATE = jQuery('#home-bg.bg-1').css('background-size');
	jQuery("#home-bg.bg-1").css('background-position-y', '0, ' + TRUNCATE + 'px');
	alert(TRUNCATE);
});*/