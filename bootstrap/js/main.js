var browserHeight, browserWidth, totalHeight, windowWidth,  windowHeight, aniLock, i;
var imagePosWidthArray = [];
var imagePosHeightArray = [];
var textPosHeightArray  = [];
var textPosWidthArray  = [];

windowWidth = jQuery(window).width();
windowHeight = jQuery(window).height();

jQuery().ready(function() {
	jQuery.material.init();
	back_image_place();
	media_icons();
	hide_loader();
});

jQuery(window).resize(function(){
	if (jQuery(window).width() != windowWidth || jQuery(window).height() != windowHeight){			
		windowWidth = jQuery(window).width();
		windowHeight = jQuery(window).height();	
		back_image_place();
	}
});

function media_icons(){
	var scrollingDiv = jQuery(".ico-bar");

	jQuery(window).scroll(function(){			
		scrollingDiv
			.stop()
			.animate(
			{"marginTop": (jQuery(window).scrollTop() + 10) + "px"},
			{duration : 1500, easing: "easeOutCirc" });			
	});
}	

function back_image_place(){
	browserWidth = window.innerWidth;
	browserHeight= window.innerHeight; 
	
	i = 1;
	while (i<5){
		imagePosHeightArray[i] = browserHeight*(i-1);
		imagePosWidthArray[i] = browserWidth*(i-1)*.625;
		textPosHeightArray[i] = browserHeight*(i-1);
		textPosWidthArray[i] = browserWidth*(i-1)*.625;
		i++
	}	
	
	/*Determines Container Size*/		
	i = 1;		
	while (jQuery(".ct-pos-"+i).hasClass("hp-page") == true){
		if (jQuery(".ct-pos-"+i).height() + jQuery(".ct-pos-"+i).offset().top > browserHeight*i){
			if (jQuery(".ct-pos-"+ (parseInt(i) +1)).hasClass("hp-page") == true){				
				imagePosHeightArray[i+1] = jQuery(".ct-pos-"+i).height() + jQuery(".ct-pos-"+i).offset().top;
				textPosHeightArray[i+1] = (jQuery(".ct-pos-"+i).height() + jQuery(".ct-pos-"+i).offset().top);
			}
		}
		if (jQuery(".ct-pos-"+i).height()  > (browserWidth*.625)){
			if (jQuery(".ct-pos-"+ (parseInt(i) +1)).hasClass("hp-page") == true){
				imagePosWidthArray[i+1] = jQuery(".ct-pos-"+i).height() + jQuery(".ct-pos-"+i).offset().top;
				textPosWidthArray[i+1] = (jQuery(".ct-pos-"+i).height() + jQuery(".ct-pos-"+i).offset().top);				
		
			}
		}
		i++;
	}


	
	if (browserWidth*.625 < browserHeight){
		jQuery("#home-bg.bg-1").css('background-position', 'center '+ imagePosHeightArray[1] + ', center ' + imagePosHeightArray[2] + 'px, center ' + imagePosHeightArray[3] + 'px, center ' + imagePosHeightArray[4] + 'px');
		jQuery("#home-bg.bg-1").css('background-size', 'auto ' + browserHeight +  'px');
		jQuery(".hp-page").css('height', 'auto');
		jQuery(".ct-pos-1").css('top', textPosHeightArray[1] +  'px');
		jQuery(".ct-pos-2").css('top', textPosHeightArray[2] +  'px');
		jQuery(".ct-pos-3").css('top', textPosHeightArray[3] +  'px');
		jQuery(".ct-pos-4").css('top', textPosHeightArray[4] +  'px');
		totalHeight = jQuery(".ct-pos-"+4).height() + jQuery(".ct-pos-"+4).offset().top;		
		jQuery("#front-page-container").css('height', totalHeight +  'px');
	}
			
	else if (browserWidth*.625 > browserHeight){		
		jQuery("#home-bg.bg-1").css('background-position', 'center ' + imagePosWidthArray[1] + ', center ' + imagePosWidthArray[2] + 'px, center ' + imagePosWidthArray[3] + 'px, center ' + imagePosWidthArray[4] + 'px');	
		jQuery("#home-bg.bg-1").css('background-size', browserWidth + 'px ' + browserWidth*.625 +  'px');
		jQuery(".hp-page").css('height', 'auto');			
		jQuery(".ct-pos-1").css('top', textPosWidthArray[1] +  'px');
		jQuery(".ct-pos-2").css('top', textPosWidthArray[2] +  'px');
		jQuery(".ct-pos-3").css('top', textPosWidthArray[3] +  'px');
		jQuery(".ct-pos-4").css('top', textPosWidthArray[4] +  'px');
		totalHeight = jQuery(".ct-pos-"+4).height() + jQuery(".ct-pos-"+4).offset().top;		
		jQuery("#front-page-container").css('height', totalHeight +  'px');
	}	
	
	else if (browserWidth <  768){
		jQuery("a.logo>img").css("display","none");
	}
	else if (browserWidth >  768){
		jQuery("a.logo>img").css("display","inline-block");			
	}
}	

var aniLock  =  0;
jQuery(window).scroll(function (event) {
	if (jQuery(this).scrollTop() > 50){
		jQuery(".mouse-scroll-cont").fadeOut();
	}
	else{
		jQuery(".mouse-scroll-cont").fadeIn();
	}
	if (browserWidth > 778){
		if (jQuery(this).scrollTop() > 50){
			if (aniLock == 0){
				jQuery( ".navbar" ).animate({top: '-50px'}, 250, "easeOutCirc");
					if  (browserWidth  >996){
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
				
				/*if  (browserWidth >996){*/
					jQuery("a.logo>img").animate({height: '94px', top:'-50px'}, 250, "easeOutCirc");
				/*}
				else{
					jQuery("a.logo>img").animate({height: '50px'}, 250, "easeOutCirc");
				}*/
			}	
		}
	}
});

function hide_loader(){
	jQuery(".ui-loader").hide();

}

jQuery(window).on('orientationchange', function(e) {
	back_image_place();
});