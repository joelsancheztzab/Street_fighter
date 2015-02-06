 var objKen = function( arriba ){

   this.saltoArriba = arriba;

   this.salto = function(){
      var salta = this.saltoArriba; 
      $( "body" ).keydown( function( ev ){
        
         if ( ev.which == salta )
            {
              var objDivKen =  $( ".divKen" );
              objDivKen.addClass( "ken" );
              setTimeout( function(){ QuitarSalto( objDivKen );} , 1000 );
            }
      } ); 
   }

   var QuitarSalto = function( objDivKen ){
     objDivKen.removeClass( "ken" );
   } 
 
 }

$( document ).ready( function(){
 var objPersonajeKen = new objKen( 38 );
 objPersonajeKen.salto();

} ); 
