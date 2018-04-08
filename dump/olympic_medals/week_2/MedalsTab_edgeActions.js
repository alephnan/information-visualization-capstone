/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_geographicBtn}", "click", function(sym, e) {
         // Hide an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("selectedRanking").hide();
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("selectedGeographic").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rankingBtn}", "click", function(sym, e) {
         // insert code for mouse click here
         // Hide an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("selectedGeographic").hide();
         // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("selectedRanking").show();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Canada'
   (function(symbolName) {   
   
   })("Canada");
   //Edge symbol end:'Canada'

   //=========================================================
   
   //Edge symbol: 'Japan'
   (function(symbolName) {   
   
   })("Japan");
   //Edge symbol end:'Japan'

   //=========================================================
   
   //Edge symbol: 'selectedGeographic'
   (function(symbolName) {   
   
   })("selectedGeographic");
   //Edge symbol end:'selectedGeographic'

   //=========================================================
   
   //Edge symbol: 'selectedRanking'
   (function(symbolName) {   
   
   })("selectedRanking");
   //Edge symbol end:'selectedRanking'

   //=========================================================
   
   //Edge symbol: 'geographicBtn'
   (function(symbolName) {   
   
   })("geographicBtn");
   //Edge symbol end:'geographicBtn'

   //=========================================================
   
   //Edge symbol: 'rankingBtn'
   (function(symbolName) {   
   
   })("rankingBtn");
   //Edge symbol end:'rankingBtn'

})(jQuery, AdobeEdge, "EDGE-25058726");