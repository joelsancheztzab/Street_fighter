 var objKen = function( arriba, abajo ){

   this.saltoArriba = arriba;
   this.agachar = abajo;

   this.salto = function(){
      var salta = this.saltoArriba; 
      $( "body" ).keydown( function( ev ){
        
         if ( ev.which == salta )
            {
              var objDivKen =  $( ".divKen" );
              objDivKen.addClass( "ken" );
              setTimeout( function(){ QuitarEventos( objDivKen );} , 1000 );
            }
      } ); 
   }

   this.abajo = function(){
     var agachar = this.agachar;
     $( "body" ).keydown( function( ev ){
           if ( ev.which == agachar )
              {
                var objDivKen =  $( ".divKen" );
                objDivKen.addClass( "kenAbajo" );
                setTimeout( function(){ QuitarEventos( objDivKen );} , 400 );
              }
     } );  
   }

   var QuitarEventos = function( objDivKen ){
    if ( objDivKen.hasClass( "ken" ) )
         objDivKen.removeClass( "ken" );
    
    if ( objDivKen.hasClass( "kenAbajo" ) )
         objDivKen.removeClass( "kenAbajo" );
   } 
 
 }

$( document ).ready( function(){
 var objPersonajeKen = new objKen( 38, 40 );
 objPersonajeKen.salto();
 objPersonajeKen.abajo();

} ); 
