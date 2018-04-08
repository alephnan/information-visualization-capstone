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
            type:'rect',
            rect:['97','132','auto','auto','auto','auto']
         },
         {
            id:'Japan',
            type:'rect',
            rect:['782','195','auto','auto','auto','auto']
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['7px','6px','122px','20px','auto','auto'],
            fill:["rgba(240,246,249,1.00)"],
            stroke:[1,"rgba(193,193,193,1.00)","solid"]
         },
         {
            id:'selectedGeographic',
            type:'rect',
            rect:['8','7','auto','auto','auto','auto']
         },
         {
            id:'geographicBtn',
            type:'rect',
            rect:['10','-1','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'RectangleCopy',
            type:'rect',
            rect:['130px','6px','122px','20px','auto','auto'],
            fill:["rgba(240,246,249,1.00)"],
            stroke:[1,"rgba(193,193,193,1.00)","solid"]
         },
         {
            id:'selectedRanking',
            type:'rect',
            rect:['131','7','auto','auto','auto','auto']
         },
         {
            id:'rankingBtn',
            type:'rect',
            rect:['132','-1','auto','auto','auto','auto'],
            cursor:['pointer']
         }],
         symbolInstances: [
         {
            id:'geographicBtn',
            symbolName:'geographicBtn'
         },
         {
            id:'selectedRanking',
            symbolName:'selectedRanking'
         },
         {
            id:'Canada',
            symbolName:'Canada'
         },
         {
            id:'selectedGeographic',
            symbolName:'selectedGeographic'
         },
         {
            id:'Japan',
            symbolName:'Japan'
         },
         {
            id:'rankingBtn',
            symbolName:'rankingBtn'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Japan}": [
            ["style", "left", '782px'],
            ["style", "top", '195px']
         ],
         "${_Canada}": [
            ["style", "left", '97px'],
            ["style", "top", '132px']
         ],
         "${_rankingBtn}": [
            ["style", "cursor", 'pointer']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '462px'],
            ["style", "width", '955px']
         ],
         "${_Rectangle}": [
            ["style", "top", '6px'],
            ["color", "background-color", 'rgba(240,246,249,1.00)'],
            ["style", "left", '7px'],
            ["style", "border-style", 'solid'],
            ["style", "height", '20px'],
            ["color", "border-color", 'rgba(193,193,193,1.00)'],
            ["style", "border-width", '1px'],
            ["style", "width", '122px']
         ],
         "${_RectangleCopy}": [
            ["style", "top", '6px'],
            ["color", "background-color", 'rgba(240,246,249,1)'],
            ["style", "border-width", '1px'],
            ["color", "border-color", 'rgb(193, 193, 193)'],
            ["style", "height", '20px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '130px'],
            ["style", "width", '122px']
         ],
         "${_geographicBtn}": [
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid17", tween: [ "style", "${_Canada}", "left", '566px', { fromValue: '97px'}], position: 0, duration: 1000 },
            { id: "eid15", tween: [ "style", "${_Canada}", "top", '236px', { fromValue: '132px'}], position: 0, duration: 1000 },
            { id: "eid24", tween: [ "style", "${_Japan}", "left", '369px', { fromValue: '782px'}], position: 0, duration: 1000 },
            { id: "eid25", tween: [ "style", "${_Japan}", "top", '236px', { fromValue: '195px'}], position: 0, duration: 1000 }         ]
      }
   }
},
"Canada": {
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
      rect: ['0px','0px','51px','51px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Canada',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(99,109,153,1.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',11,'rgba(255,255,255,1.00)','normal','none',''],
      id: 'Text',
      text: 'Canada<br>',
      type: 'text',
      rect: ['7px','20px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Canada}": [
            ["style", "top", '0px'],
            ["style", "height", '51px'],
            ["color", "background-color", 'rgba(99,157,153,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '51px']
         ],
         "${_Text}": [
            ["style", "top", '20px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '7px'],
            ["style", "font-size", '11px']
         ],
         "${symbolSelector}": [
            ["style", "height", '51px'],
            ["style", "width", '51px']
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
},
"Japan": {
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
      rect: ['0px','0px','60px','60px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Japan',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(178,184,141,1.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',11,'rgba(255,255,255,1)','normal','none','normal'],
      type: 'text',
      id: 'Text3',
      text: 'Japan',
      align: 'left',
      rect: ['14px','23px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "left", '14px'],
            ["style", "top", '23px']
         ],
         "${_Japan}": [
            ["style", "top", '0px'],
            ["style", "height", '60px'],
            ["color", "background-color", 'rgba(178,184,141,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '60px']
         ],
         "${symbolSelector}": [
            ["style", "height", '60px'],
            ["style", "width", '60px']
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
},
"selectedGeographic": {
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
      type: 'rect',
      id: 'Rectangle2',
      stroke: [1,'rgb(193, 193, 193)','none'],
      rect: ['0px','0px','124px','22px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '22.21666765213px'],
            ["style", "border-style", 'none'],
            ["style", "border-width", '1px'],
            ["style", "width", '124px']
         ],
         "${symbolSelector}": [
            ["style", "height", '22.216667175293px'],
            ["style", "width", '124px']
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
},
"selectedRanking": {
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
      type: 'rect',
      id: 'Rectangle2Copy',
      stroke: [1,'rgb(193, 193, 193)','none'],
      rect: ['0px','0px','122px','22px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2Copy}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '21.84138914744px'],
            ["style", "border-style", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '122px']
         ],
         "${symbolSelector}": [
            ["style", "height", '21.833333969116px'],
            ["style", "width", '122px']
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
},
"geographicBtn": {
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
      font: ['Arial, Helvetica, sans-serif',11,'rgba(0,0,0,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text4',
      text: '<br>GEOGRAPHIC VIEW',
      align: 'center',
      rect: ['0px','0px','121px','25px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text4}": [
            ["style", "top", '0px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '25px'],
            ["style", "left", '0px'],
            ["style", "width", '121px']
         ],
         "${symbolSelector}": [
            ["style", "height", '25px'],
            ["style", "width", '121px']
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
},
"rankingBtn": {
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
      font: ['Arial, Helvetica, sans-serif',11,'rgba(0,0,0,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text4Copy',
      text: '<br>BY RANKING',
      align: 'center',
      rect: ['0px','0px','121px','30px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text4Copy}": [
            ["style", "top", '0px'],
            ["style", "text-align", 'center'],
            ["style", "height", '30px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '0px'],
            ["style", "width", '121px']
         ],
         "${symbolSelector}": [
            ["style", "height", '30px'],
            ["style", "width", '121px']
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
