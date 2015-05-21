jQuery(document).ready(function($){

pathCheck();

});

function pathCheck() {
    var x = location.pathname;
    if (x == 'node/33'){
		mapUILoader();
	}	
}	


function mapUILoader(){
        new jQueryCollapse($("#collapse-options"), {
          open: function() {
            this.slideDown(150);
          },
          close: function() {
            this.slideUp(150);
          }
        });
		
		$( "#evs_time_beg" ).datepicker({
			defaultDate: "+1w",
			changeMonth: true,
			changeYear: true,
			numberOfMonths: 1,
			onClose: function( selectedDate ) {
				$( "#evs_time_end" ).datepicker( "option", "minDate", selectedDate );
			}
		});
		$( "#evs_time_end" ).datepicker({
			defaultDate: "+1w",
			changeMonth: true,
			changeYear: true,
			numberOfMonths: 1,
			onClose: function( selectedDate ) {
				$( "#evs_time_beg" ).datepicker( "option", "maxDate", selectedDate );
			}
		})
			.datepicker("setDate", new Date());
	
		$( "#eq-mag-slider" ).slider({
		  range: true,
		  min: 0.0,
		  max: 9.95,
		  step:  .1,
		  values: [ 0, 9.9 ],
		  slide: function( event, ui ) {
		  	for (var i = 0; i < ui.values.length; i++) {
				$("input.eq-val[data-index=" + i + "]").val(ui.values[i]);
			}	  
		  }
		});
		
		$("input.eq-val").change(function() {
			var $this = $(this);
			$("#eq-mag-slider").slider("values", $this.data("index"), $this.val());
		});
		$( "#ts-height-slider" ).slider({
		  range: true,
		  min: 0.0,
		  max: 9.95,
		  step:  .1,
		  values: [ 0, 9.9 ],
		  slide: function( event, ui ) {
		  	for (var i = 0; i < ui.values.length; i++) {
				$("input.ts-val[data-index=" + i + "]").val(ui.values[i]);
			}	  
		  }
		});
		
		$("input.ts-val").change(function() {
			var $this = $(this);
			$("#ts-height-slider").slider("values", $this.data("index"), $this.val());
		});
		$( "#lat-slider" ).slider({
		  orientation: "vertical",
		  range: true,
		  min: -90.0,
		  max: 90.05,		  
		  step:  .1,
		  values: [ -90, 90 ],		  
		  slide: function( event, ui ) {
		  	for (var i = 0; i < ui.values.length; i++) {
				$("input.lat-val[data-index=" + i + "]").val(ui.values[i]);
			}	  
		  }
		});
		
		$("input.lat-val").change(function() {
			var $this = $(this);
			$("#lat-slider").slider("values", $this.data("index"), $this.val());
		});
        
		
		$( "#lon-slider" ).slider({
		  range: true,
		  min: -180.0,
		  max: 180.05,
		  step:  .1,
		  values: [ -180, 180 ],
		  slide: function( event, ui ) {
		  	for (var i = 0; i < ui.values.length; i++) {
				$("input.lon-val[data-index=" + i + "]").val(ui.values[i]);
			}	  
		  }
		});
		
		$("input.lon-val").change(function() {
			var $this = $(this);
			$("#lon-slider").slider("values", $this.data("index"), $this.val());
		});
}		

