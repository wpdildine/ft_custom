jQuery(document).ready(function() {
	jQuery.material.init();
});

var imageHeight;
var imageWidth;

jQuery(document).ready(function() {
	imageWidth = window.innerWidth;
	imageHeight= window.innerHeight;
	
	if (imageWidth*.625 < imageHeight){
		jQuery("#home-bg.bg-1").css('background-position', 'center 0, center ' + imageHeight + 'px, center ' + imageHeight*2 + 'px');
		jQuery("#home-bg.bg-1").css('background-size', 'auto ' + imageHeight +  'px');
		jQuery(".hp-page").css('height', imageHeight*.75 +  'px');
		jQuery("#front-page-container").css('height', imageHeight*3 +  'px');
		jQuery(".ct-pos-1").css('top', imageHeight*.25 +  'px');
		jQuery(".ct-pos-2").css('top', imageHeight*1.25 +  'px');
		jQuery(".ct-pos-3").css('top', imageHeight*2.25 +  'px');
		
	}
	else if (imageWidth*.625 > imageHeight){
		jQuery("#home-bg.bg-1").css('background-position', 'center 0, center ' + imageWidth*.625 + 'px, center ' + imageWidth*1.25 + 'px');
		jQuery("#home-bg.bg-1").css('background-size', imageWidth + 'px ' + imageWidth*.625 +  'px');
		jQuery(".hp-page").css('height', imageHeight*.75 +  'px');
		jQuery("#front-page-container").css('height', imageWidth*.625*3 +  'px');
		jQuery(".ct-pos-1").css('top', imageWidth*.625*.25 +  'px');
		jQuery(".ct-pos-2").css('top', imageWidth*.625*1.25 +  'px');
		jQuery(".ct-pos-3").css('top', imageWidth*.625*2.25 +  'px');
	}
	/*alert(imageWidth + ' Image Height ' + imageHeight );*/
});

jQuery(window).resize(function(){
	imageWidth = window.innerWidth;
	imageHeight= window.innerHeight;
	
	if (imageWidth*.625 < imageHeight){
		jQuery("#home-bg.bg-1").css('background-position', 'center 0, center ' + imageHeight + 'px, center ' + imageHeight*2 + 'px');
		jQuery("#home-bg.bg-1").css('background-size', 'auto ' + imageHeight +  'px');
		jQuery(".hp-page").css('height', imageHeight*.75 +  'px');
		jQuery("#front-page-container").css('height', imageHeight*3 +  'px');
		jQuery(".ct-pos-1").css('top', imageHeight*.25 +  'px');
		jQuery(".ct-pos-2").css('top', imageHeight*1.25 +  'px');
		jQuery(".ct-pos-3").css('top', imageHeight*2.25 +  'px');
		
	}
	else if (imageWidth*.625 > imageHeight){
		jQuery("#home-bg.bg-1").css('background-position', 'center 0, center ' + imageWidth*.625 + 'px, center ' + imageWidth*1.25 + 'px');
		jQuery("#home-bg.bg-1").css('background-size', imageWidth + 'px ' + imageWidth*.625 +  'px');
		jQuery(".hp-page").css('height', imageHeight*.75 +  'px');
		jQuery("#front-page-container").css('height', imageWidth*.625*3 +  'px');
		jQuery(".ct-pos-1").css('top', imageWidth*.625*.25 +  'px');
		jQuery(".ct-pos-2").css('top', imageWidth*.625*1.25 +  'px');
		jQuery(".ct-pos-3").css('top', imageWidth*.625*2.25 +  'px');
	}
	
});

