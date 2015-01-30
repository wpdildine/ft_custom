jQuery(document).ready(function() {
	jQuery.material.init();
});

var windowHeight;
var  windowWidth;

jQuery(document).ready(function() {
	windowHeight = window.innerHeight;
	jQuery("#home-bg").css('max-height', windowHeight);	
});

jQuery(window).resize(function(){
	windowHeight = window.innerHeight;
	jQuery("#home-bg").css('max-height', windowHeight);
});

jQuery(document).ready(function() {
	windowWidth = window.innerWidth;
	jQuery("#home-bg").css('background-position', 'center' '0' 'center' windowHeight);
});

jQuery(window).resize(function(){
	windowWidth = window.innerWidth;
	jQuery("#home-bg").css('background-position', 'center' '0' 'center' windowHeight);
});