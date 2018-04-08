/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Canada',
            type:'ellipse',
            rect:['97px','132px','51px','51px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(99,109,153,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Text',
            type:'text',
            rect:['104px','152px','auto','auto','auto','auto'],
            text:"Canada<br>",
            font:['Arial, Helvetica, sans-serif',11,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'Japan',
            type:'ellipse',
            rect:['782px','195px','60px','60px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(178,184,141,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Text3',
            type:'text',
            rect:['796px','218px','auto','auto','auto','auto'],
            text:"Japan",
            align:"left",
            font:['Arial, Helvetica, sans-serif',11,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['7px','6px','122px','20px','auto','auto'],
            fill:["rgba(240,246,249,1.00)"],
            stroke:[1,"rgba(193,193,193,1.00)","solid"]
         },
         {
            id:'Rectangle2',
            type:'rect',
            rect:['8px','7px','124px','22px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[1,"rgb(193, 193, 193)","none"]
         },
         {
            id:'Text4',
            type:'text',
            rect:['20px','12px','110px','17px','auto','auto'],
            text:"GEOGRAPHIC VIEW",
            align:"left",
            font:['Arial, Helvetica, sans-serif',11,"rgba(0,0,0,1.00)","normal","none","normal"]
         },
         {
            id:'RectangleCopy',
            type:'rect',
            rect:['130px','6px','122px','20px','auto','auto'],
            fill:["rgba(240,246,249,1.00)"],
            stroke:[1,"rgba(193,193,193,1.00)","solid"]
         },
         {
            id:'Rectangle2Copy',
            type:'rect',
            rect:['131px','7px','122px','22px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[1,"rgb(193, 193, 193)","none"]
         },
         {
            id:'Text4Copy',
            type:'text',
            rect:['158px','12px','110px','17px','auto','auto'],
            text:"BY RANKING",
            align:"left",
            font:['Arial, Helvetica, sans-serif',11,"rgba(0,0,0,1.00)","normal","none","normal"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '7px'],
            ["style", "left", '8px'],
            ["style", "height", '22.21666765213px'],
            ["style", "border-style", 'none'],
            ["style", "border-width", '1px'],
            ["style", "width", '124px']
         ],
         "${_Canada}": [
            ["style", "top", '132px'],
            ["style", "height", '51px'],
            ["color", "background-color", 'rgba(99,157,153,1.00)'],
            ["style", "left", '97px'],
            ["style", "width", '51px']
         ],
         "${_Text3}": [
            ["style", "left", '796px'],
            ["style", "top", '218px']
         ],
         "${_Rectangle2Copy}": [
            ["style", "top", '7px'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '21.84138914744px'],
            ["style", "border-style", 'none'],
            ["style", "left", '131px'],
            ["style", "width", '122px']
         ],
         "${_Japan}": [
            ["style", "top", '195px'],
            ["style", "height", '60px'],
            ["color", "background-color", 'rgba(178,184,141,1.00)'],
            ["style", "left", '782px'],
            ["style", "width", '60px']
         ],
         "${_Text}": [
            ["style", "top", '152px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '104px'],
            ["style", "font-size", '11px']
         ],
         "${_Text4Copy}": [
            ["style", "top", '12px'],
            ["style", "height", '17px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '158px'],
            ["style", "width", '110px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '955px'],
            ["style", "height", '462px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Rectangle}": [
            ["style", "top", '6px'],
            ["color", "background-color", 'rgba(240,246,249,1.00)'],
            ["style", "border-width", '1px'],
            ["color", "border-color", 'rgba(193,193,193,1.00)'],
            ["style", "height", '20px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '7px'],
            ["style", "width", '122px']
         ],
         "${_RectangleCopy}": [
            ["style", "top", '6px'],
            ["color", "background-color", 'rgba(240,246,249,1)'],
            ["style", "left", '130px'],
            ["style", "border-style", 'solid'],
            ["style", "height", '20px'],
            ["color", "border-color", 'rgb(193, 193, 193)'],
            ["style", "border-width", '1px'],
            ["style", "width", '122px']
         ],
         "${_Text4}": [
            ["style", "top", '12px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '17px'],
            ["style", "left", '20px'],
            ["style", "width", '110px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-25058726");
