// Range sliders
$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 10000,
    max: 100000,
    values: [ 17999, 40900 ],
    slide: function( event, ui ) {
      $( "#amount-min" ).val( ui.values[ 0 ] + " ₽");
      $( "#amount-max" ).val( ui.values[ 1 ] + " ₽");
    }
  });
  $( "#amount-min" ).val( $( "#slider-range" ).slider( "values", 0 ) + " ₽");
  $( "#amount-max" ).val( $( "#slider-range" ).slider( "values", 1 ) + " ₽");
});

$( function() {
  $( "#slider-range2" ).slider({
    range: true,
    min: 5,
    max: 70,
    values: [ 17, 50 ],
    slide: function( event, ui ) {
      $( "#amount-min2" ).val( ui.values[ 0 ] + " м2" );
      $( "#amount-max2" ).val( ui.values[ 1 ] + " м2" );
    }
  });
  $( "#amount-min2" ).val( $( "#slider-range2" ).slider( "values", 0 ) + " м2" );
  $( "#amount-max2" ).val( $( "#slider-range2" ).slider( "values", 1 ) + " м2" );
});