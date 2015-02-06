jQuery(document).ready(function() {
	jQuery.material.init();
});

jQuery(document).ready(function() {
	
});

var imageHeight;
var imageWidth;
jQuery().ready(function() {
		var scrollingDiv = jQuery(".ico-bar");
 
		jQuery(window).scroll(function(){			
			scrollingDiv
				.stop()
				.animate(
				{"marginTop": (jQuery(window).scrollTop() + 10) + "px"},
				{duration : 1500, easing: "easeOutCirc" });			
		});
});


jQuery(document).ready(function() {
	/*Image Containers*/
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
	
	else if (imageWidth <  768){
		jQuery("a.logo>img").css("display","none");
	}
	else if (imageWidth >  768){
		jQuery("a.logo>img").css("display","inline-block");
	}
	/*Sliding Media Icon*/
	
	
	
	
});

var aniLock  =  0;

jQuery(window).scroll(function (event) {
	imageWidth = window.innerWidth;
	imageHeight= window.innerHeight;

	if (jQuery(this).scrollTop() > 50){
		jQuery(".mouse-scroll-cont").fadeOut();
	}
	else{
		jQuery(".mouse-scroll-cont").fadeIn();
	}
	
	if (imageWidth > 778){
		if (jQuery(this).scrollTop() > 50){
			if (aniLock == 0){
				jQuery( ".navbar" ).animate({top: '-50px'}, 250, "easeOutCirc");
					if  (imageWidth  >996){
						jQuery("a.logo>img").animate({height: '50px'}, 250, "easeOutCirc");
					}
					else{
						jQuery("a.logo>img").animate({height: '0px'}, 250, "easeOutCirc");
					}
				jQuery(".mouse-ico").slideDown();
				aniLock  =  1;
			}	
		}
		else {
			if (aniLock == 1){
				aniLock = 0;
				jQuery( ".navbar" ).animate({top: '0px'}, 250, "easeOutCirc");
				
				/*if  (imageWidth >996){*/
					jQuery("a.logo>img").animate({height: '94px', top:'-50px'}, 250, "easeOutCirc");
				/*}
				else{
					jQuery("a.logo>img").animate({height: '50px'}, 250, "easeOutCirc");
				}*/
			}	
		}
	}
	
	
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
	
	else if (imageWidth <  768){
		jQuery("a.logo>img").css("display","none");
	}
	else if (imageWidth >  768){
		jQuery("a.logo>img").css("display","inline-block");
	}
});






