jQuery(document).ready(function() {
	jQuery.material.init();
});

var windowHeight;

jQuery(document).ready(function() {
	windowHeight = window.innerHeight;
	jQuery("#home-bg").css('max-height', windowHeight);	
});

jQuery(window).resize(function(){
	windowHeight = window.innerHeight;
	jQuery("#home-bg").css('max-height', windowHeight);	
});