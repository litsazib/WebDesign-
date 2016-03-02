    $(function() {
    $( "#slider-range-min" ).slider({
      range: "min",
      value: 80,
      min: 1,
      max: 100,
      slide: function( event, ui ) {
        $( "#amount" ).val(ui.value +"%" );
      }
    });
	
	$( "#slider-range-min1" ).slider({
      range: "min",
      value: 80,
      min: 1,
      max: 100,
      slide: function( event, ui ) {
        $( "#amount1" ).val(ui.value +"%" );
      }
    });

	$( "#slider-range-min2" ).slider({
      range: "min",
      value: 80,
      min: 1,
      max: 100,
      slide: function( event, ui ) {
        $( "#amount2" ).val(ui.value +"%" );
      }
    });
	
    $( "#amount" ).val($( "#slider-range-min" ).slider( "value" )+"%");
    $( "#amount1" ).val($( "#slider-range-min1" ).slider( "value" )+"%");
    $( "#amount2" ).val($( "#slider-range-min2" ).slider( "value" )+"%");
  });

