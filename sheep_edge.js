/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
var fonts = {
};
var symbols = {
"stage": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
      dom: [
        {
            id:'Main2',
            className:'stage_Main2_id',
            type:'rect',
            rect:[0.99998200000005,0.79999,0,0],
            opacity:1,
            transform:[[-1]]
        },
        {
            id:'message',
            className:'stage_message_id',
            type:'rect',
            rect:[34,40,0,0]
        },
        {
            id:'control2',
            className:'stage_Panel22_id',
            type:'rect',
            rect:[641,321.79997,0,0],
            transform:[]
        },
        {
            id:'control1',
            className:'stage_Panel12_id',
            type:'rect',
            rect:[641,0.8,0,0],
            opacity:1,
            transform:[,,,[1.00628,1.00628]]
        },
        {
            id:'Sheep3',
            className:'stage_Sheep3_id',
            type:'rect',
            rect:[53.6331,97.775395,0,0],
            transform:[[0,0],[0,0],[0],[1,1]]
        },
        {
            id:'endMessage',
            className:'stage_endMessage_id',
            type:'rect',
            rect:[34,557,0,0]
        }],
      symbolInstances: [
      {
         id:'control2',
         symbolName:'Panel2'
      },
      {
         id:'Main2',
         symbolName:'Main'
      },
      {
         id:'Sheep3',
         symbolName:'Sheep3'
      },
      {
         id:'message',
         symbolName:'status'
      },
      {
         id:'control1',
         symbolName:'Panel1'
      },
      {
         id:'endMessage',
         symbolName:'endMessage'
      }
      ]
   },
   states: {
      "Base State": {
         "${_message}": [
            ["style", "opacity", '0']
         ],
         "${_control1}": [
            ["transform", "scaleY", '1.00628'],
            ["transform", "scaleX", '1.00628'],
            ["style", "opacity", '1'],
            ["transform", "translateY", '0.99695px'],
            ["transform", "translateX", '0.16359px']
         ],
         "${_Sheep3}": [
            ["transform", "rotateZ", '0deg']
         ],
         "${_control2}": [
            ["transform", "scaleX", '1'],
            ["transform", "translateY", '-0.99999px'],
            ["transform", "translateX", '-0.83337px'],
            ["transform", "scaleY", '1']
         ],
         "${_Main2}": [
            ["style", "-webkit-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '-1px'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["transform", "translateY", '0px'],
            ["transform", "scaleY", '1']
         ],
         "${_stage}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '640px'],
            ["style", "width", '960px']
         ],
         "body": [
            ["color", "background-color", 'rgba(0,0,0,0)']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1750,
         autoPlay: true,
         labels: {
            "toPortrait": 0,
            "portrait": 749.98134185315,
            "toLandscape": 1000,
            "landscape": 1749
         },
         timeline: [
            { id: "eid789", tween: [ "style", "${_stage}", "width", '640px', { fromValue: '960px'}], position: 0, duration: 749, easing: "easeOutCubic" },
            { id: "eid794", tween: [ "style", "${_stage}", "width", '960px', { fromValue: '640px'}], position: 1000, duration: 749, easing: "easeOutCubic" },
            { id: "eid56", tween: [ "transform", "${_control2}", "translateY", '318.47221px', { fromValue: '-0.99999px'}], position: 250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid66", tween: [ "transform", "${_control2}", "translateY", '-0.52778px', { fromValue: '318.47221px'}], position: 1250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid790", tween: [ "style", "${_stage}", "height", '960px', { fromValue: '640px'}], position: 0, duration: 749, easing: "easeOutCubic" },
            { id: "eid793", tween: [ "style", "${_stage}", "height", '640px', { fromValue: '960px'}], position: 1000, duration: 750, easing: "easeOutCubic" },
            { id: "eid53", tween: [ "transform", "${_control1}", "translateX", '-639.80006px', { fromValue: '0.16359px'}], position: 0, duration: 500, easing: "easeInOutQuad" },
            { id: "eid64", tween: [ "transform", "${_control1}", "translateX", '0px', { fromValue: '-639.80006px'}], position: 1000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid55", tween: [ "transform", "${_control2}", "translateX", '-320.97227px', { fromValue: '-0.83337px'}], position: 250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid65", tween: [ "transform", "${_control2}", "translateX", '-0.97224px', { fromValue: '-320.97227px'}], position: 1250, duration: 500, easing: "easeInOutQuad" },
            { id: "eid54", tween: [ "transform", "${_control1}", "translateY", '639.99996px', { fromValue: '0.99695px'}], position: 0, duration: 500, easing: "easeInOutQuad" },
            { id: "eid63", tween: [ "transform", "${_control1}", "translateY", '1.30206px', { fromValue: '639.99996px'}], position: 1000, duration: 500, easing: "easeInOutQuad" }         ]
      }
   }
},
"sheep": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {"dom":[],"symbolInstances":[]},
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '126.697988px'],
            ["style", "width", '197.73797px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         labels: {

         },
         timeline: [
         ]
      }
   }
},
"Panel1": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {"dom":[{"id":"Panel1","className":"stage_Panel1_id","type":"rect","rect":[61.00006103516,0.4000122070312,315,315],"borderRadius":["50px 50px","50px 50px","50px 50px","50px 50px"],"fill":["rgba(1,138,205,1.00)",null],"stroke":[2,"rgba(255,255,255,1.00)","solid"],"transform":[[-60.41669]],"c":[{"id":"howManyText","className":"TextCopy_id","type":"text","rect":[840.00012207031,450.00004577637,281,79],"text":"How many","align":"center","font":["Arial, Helvetica, sans-serif",53,"rgba(255,255,255,1.00)","normal","none",""],"transform":[[-820.83339,-369.00004]]},{"id":"sheepText","className":"TextCopy_id","type":"text","rect":[840.00012207031,450.00004577637,281,79],"text":"sheep?","align":"center","font":["Arial, Helvetica, sans-serif",53,"rgba(255,255,255,1.00)","normal","none",""],"transform":[[-820.83339,-290.00004]]}]}],"symbolInstances":[]},
   states: {
      "Base State": {
         "${_sheepText}": [
            ["style", "width", '281px'],
            ["transform", "translateX", '-820.83339px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '79px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["transform", "translateY", '-290.00004px'],
            ["style", "font-size", '53px']
         ],
         "${symbolSelector}": [
            ["style", "height", '318px'],
            ["style", "width", '318px']
         ],
         "${_howManyText}": [
            ["style", "width", '281px'],
            ["style", "text-align", 'center'],
            ["transform", "translateX", '-820.83339px'],
            ["style", "height", '79px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["transform", "translateY", '-369.00004px'],
            ["style", "font-size", '53px']
         ],
         "${_Panel1}": [
            ["color", "background-color", 'rgba(1,138,205,1.00)'],
            ["style", "border-top-left-radius", [0,0],{valueTemplate:'@@0@@px @@1@@px'}],
            ["transform", "translateX", '-60.41669px'],
            ["style", "border-bottom-right-radius", [0,0],{valueTemplate:'@@0@@px @@1@@px'}],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '315px'],
            ["style", "border-bottom-left-radius", [0,0],{valueTemplate:'@@0@@px @@1@@px'}],
            ["style", "height", '315px'],
            ["color", "border-color", 'rgba(255,255,255,1.00)'],
            ["transform", "translateY", '0px'],
            ["style", "border-top-right-radius", [50,50],{valueTemplate:'@@0@@px @@1@@px'}]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1999,
         autoPlay: true,
         labels: {
            "toPortrait": 250,
            "portrait": 1000,
            "toLandscape": 1250,
            "landscape": 1999
         },
         timeline: [
            { id: "eid776", tween: [ "style", "${_Panel1}", "border-bottom-left-radius", [50,50], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 250, duration: 750 },
            { id: "eid780", tween: [ "style", "${_Panel1}", "border-bottom-left-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [50,50]}], position: 1250, duration: 749 },
            { id: "eid774", tween: [ "style", "${_Panel1}", "border-top-right-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [50,50]}], position: 250, duration: 750 },
            { id: "eid781", tween: [ "style", "${_Panel1}", "border-top-right-radius", [50,50], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1250, duration: 749 }         ]
      }
   }
},
"Panel2": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {"dom":[{"id":"instructions","className":"RectangleCopy_id","type":"rect","rect":[61.00006103516,-320.59995779297,316,316],"borderRadius":["50px 50px","50px 50px","50px 50px","50px 50px"],"fill":["rgba(212,68,140,1.00)",null],"stroke":[2,"rgba(255,255,255,1.00)","solid"],"transform":[[-61,319.99996]],"c":[{"id":"line2","className":"stage_text2_id","type":"text","rect":[840.00012207031,450.00004577637,0,0],"text":"each one","align":"center","font":["Arial, Helvetica, sans-serif",39,"rgba(255,255,255,1.00)","normal","none",""],"transform":[[-747.00009,-314.00001]]},{"id":"line1","className":"stage_text2_id","type":"text","rect":[840.00012207031,450.00004577637,0,0],"text":"Touch","align":"center","font":["Arial, Helvetica, sans-serif",39,"rgba(255,255,255,1.00)","normal","none",""],"transform":[[-747.00009,-314.00001]]}]},{"id":"answer","className":"symbolStage_Panel2_answer_id","type":"text","rect":[146,59,115,201],"text":"3","align":"center","font":["Arial, Helvetica, sans-serif",204,"rgba(255,255,255,1)","normal","none","normal"],"transform":[[-44],null,null,[0.1,0.1]]}],"symbolInstances":[]},
   states: {
      "Base State": {
         "${_line2}": [
            ["transform", "translateX", '-794.20012px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '1'],
            ["style", "font-size", '53px'],
            ["style", "text-align", 'center'],
            ["style", "height", '76px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["transform", "translateY", '-291.79996px'],
            ["style", "width", '228px']
         ],
         "${symbolSelector}": [
            ["style", "height", '320px'],
            ["style", "width", '320px']
         ],
         "${_answer}": [
            ["style", "font-size", '204px'],
            ["transform", "translateX", '-44px'],
            ["transform", "scaleY", '0.1'],
            ["style", "height", '201px'],
            ["transform", "scaleX", '0.1'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '0px'],
            ["style", "width", '115px']
         ],
         "${_line1}": [
            ["transform", "translateX", '-792.2001px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '1'],
            ["style", "font-size", '53px'],
            ["style", "text-align", 'center'],
            ["style", "height", '64px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["transform", "translateY", '-354.79995px'],
            ["style", "width", '224px']
         ],
         "${_instructions}": [
            ["color", "background-color", 'rgba(212,68,140,1.00)'],
            ["style", "border-top-left-radius", [0,0],{valueTemplate:'@@0@@px @@1@@px'}],
            ["transform", "translateX", '-61px'],
            ["style", "border-bottom-right-radius", [50,50],{valueTemplate:'@@0@@px @@1@@px'}],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '316px'],
            ["style", "border-bottom-left-radius", [0,0],{valueTemplate:'@@0@@px @@1@@px'}],
            ["style", "border-top-right-radius", [0,0],{valueTemplate:'@@0@@px @@1@@px'}],
            ["style", "height", '316px'],
            ["color", "border-color", 'rgba(255,255,255,1.00)'],
            ["transform", "translateY", '319.99996px'],
            ["style", "opacity", '1']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: false,
         labels: {
            "showAnswer": 500
         },
         timeline: [
            { id: "eid998", tween: [ "transform", "${_answer}", "scaleX", '0.1', { fromValue: '0.1'}], position: 500, duration: 0 },
            { id: "eid1006", tween: [ "transform", "${_answer}", "scaleX", '1', { fromValue: '0.1'}], position: 750, duration: 500, easing: "easeOutElastic" },
            { id: "eid997", tween: [ "style", "${_answer}", "opacity", '0', { fromValue: '0'}], position: 500, duration: 0 },
            { id: "eid1008", tween: [ "style", "${_answer}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 500, easing: "easeOutElastic" },
            { id: "eid1010", tween: [ "style", "${_line1}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 250 },
            { id: "eid1011", tween: [ "style", "${_line2}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 250 },
            { id: "eid999", tween: [ "transform", "${_answer}", "scaleY", '0.1', { fromValue: '0.1'}], position: 500, duration: 0 },
            { id: "eid1007", tween: [ "transform", "${_answer}", "scaleY", '1', { fromValue: '0.1'}], position: 750, duration: 500, easing: "easeOutElastic" }         ]
      }
   }
},
"Main": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
       id:'Main',
       className:'RectangleCopy_id',
       type:'rect',
       rect:[701.00007903516,0.4000222070312,635,635],
       borderRadius:["50px 50px","50px 50px","50px 50px","50px 50px"],
       fill:['rgba(82,190,70,1.00)',null],
       stroke:[2,"rgba(255,255,255,1.00)","solid"],
       transform:[[-699.6945,1]]
   }],
   symbolInstances: [

   ]
},
   states: {
      "Base State": {
         "${_Main2}": [
            ["transform", "translateX", '-2.14441px']
         ],
         "${_Main}": [
            ["color", "background-color", 'rgba(82,190,70,1.00)'],
            ["style", "border-top-left-radius", [50,50],{valueTemplate:'@@0@@px @@1@@px'}],
            ["transform", "translateX", '-699.6945px'],
            ["style", "border-bottom-right-radius", [0,0],{valueTemplate:'@@0@@px @@1@@px'}],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '635px'],
            ["style", "border-bottom-left-radius", [50,50],{valueTemplate:'@@0@@px @@1@@px'}],
            ["style", "height", '635px'],
            ["color", "border-color", 'rgba(255,255,255,1.00)'],
            ["transform", "translateY", '1px'],
            ["style", "border-top-right-radius", [0,0],{valueTemplate:'@@0@@px @@1@@px'}]
         ],
         "${symbolSelector}": [
            ["style", "height", '640px'],
            ["style", "width", '640px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2500,
         autoPlay: false,
         labels: {
            "toPortrait": 250,
            "portrait": 1250,
            "toLandscape": 1500,
            "landscape": 2500
         },
         timeline: [
            { id: "eid816", tween: [ "style", "${_Main}", "border-top-left-radius", [44,44], { valueTemplate: '@@0@@px @@1@@px', fromValue: [50,50]}], position: 250, duration: 1000 },
            { id: "eid822", tween: [ "style", "${_Main}", "border-top-left-radius", [50,50], { valueTemplate: '@@0@@px @@1@@px', fromValue: [44,44]}], position: 1500, duration: 1000 },
            { id: "eid819", tween: [ "style", "${_Main}", "border-top-right-radius", [50,50], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 250, duration: 1000 },
            { id: "eid823", tween: [ "style", "${_Main}", "border-top-right-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [50,50]}], position: 1500, duration: 1000 },
            { id: "eid817", tween: [ "style", "${_Main}", "border-bottom-left-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [50,50]}], position: 250, duration: 1000 },
            { id: "eid821", tween: [ "style", "${_Main}", "border-bottom-left-radius", [50,50], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1500, duration: 1000 }         ]
      }
   }
},
"svgSheep": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {"dom":[{"id":"fleece","className":"stage_fleece_id","type":"image","rect":[101.48760355176,170.14693212109,493,456],"fill":["rgba(0,0,0,0)","images/fleece.svg"]},{"id":"label","className":"symbolStage_svgSheep_label_id","type":"text","rect":[46,51,0,0],"text":"0","align":"center","font":["Trebuchet MS, Arial, Helvetica, sans-serif",24,"rgba(0,0,0,1)","normal","none",""]},{"id":"head","className":"stage_head_id","type":"image","rect":[225.31261575879,158.69536351758,267,255],"fill":["rgba(0,0,0,0)","images/head.svg"]},{"id":"eyes","className":"stage_eyes_id","type":"image","rect":[194.52983987988,199.41100072461,58,13],"fill":["rgba(0,0,0,0)","images/eyes.svg"]}],"symbolInstances":[]},
   states: {
      "Base State": {
         "${_eyes}": [
            ["transform", "scaleX", '0.37755'],
            ["transform", "translateX", '-101.11533px'],
            ["transform", "scaleY", '0.40806'],
            ["transform", "translateY", '-87.69965px']
         ],
         "${_fleece}": [
            ["transform", "scaleX", '0.37306'],
            ["transform", "translateX", '-256.17266px'],
            ["transform", "scaleY", '0.37306'],
            ["transform", "translateY", '-313.26266px']
         ],
         "${_head}": [
            ["transform", "scaleX", '0.2938'],
            ["transform", "translateX", '-239.84244px'],
            ["transform", "scaleY", '0.2938'],
            ["transform", "translateY", '-170.90829px']
         ],
         "${symbolSelector}": [
            ["style", "height", '170.11536px'],
            ["style", "width", '183.91858px']
         ],
         "${_label}": [
            ["style", "width", '21px'],
            ["style", "text-align", 'center'],
            ["transform", "translateX", '12px'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "height", '17px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '0px'],
            ["style", "font-size", '24px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         labels: {
            "Label 1": 250
         },
         timeline: [
            { id: "eid953", tween: [ "transform", "${_label}", "translateX", '12px', { fromValue: '12px'}], position: 0, duration: 0, easing: "easeInBounce" },
            { id: "eid951", tween: [ "transform", "${_label}", "translateX", '6px', { fromValue: '12px'}], position: 250, duration: 250, easing: "easeInBounce" },
            { id: "eid941", tween: [ "style", "${_label}", "font-size", '70px', { fromValue: '10px'}], position: 250, duration: 250, easing: "easeInBounce" },
            { id: "eid956", tween: [ "style", "${_label}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250, easing: "easeInBounce" },
            { id: "eid954", tween: [ "transform", "${_label}", "translateY", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInBounce" },
            { id: "eid952", tween: [ "transform", "${_label}", "translateY", '-23px', { fromValue: '0px'}], position: 250, duration: 250, easing: "easeInBounce" }         ]
      }
   }
},
"log": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {"dom":[{"id":"log","className":"symbolStage_log_log_id","type":"text","rect":[2.8055534362793,0.97222137451172,686.11107254028,68.055549621582],"text":"Log","align":"auto","font":["Arial, Helvetica, sans-serif",24,"rgba(0,0,0,1)","normal","none","normal"]}],"symbolInstances":[]},
   states: {
      "Base State": {
         "${_log}": [
            ["transform", "translateX", '-2px'],
            ["style", "font-size", '18px'],
            ["style", "height", '34px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "width", '571px']
         ],
         "${symbolSelector}": [
            ["style", "height", '34px'],
            ["style", "width", '571px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         labels: {

         },
         timeline: [
         ]
      }
   }
},
"roundel": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {"dom":[{"id":"RoundRect","className":"RoundRect_id","type":"rect","rect":[5,14.00001,100.53515625,102],"borderRadius":[10,10,10,10],"fill":["rgba(192,192,192,1)",null],"stroke":[0,"rgba(0,0,0,1)","none"]},{"id":"Count","className":"Count_id","type":"text","rect":[54,66.00001,0,0],"text":"0","align":"center","font":["Arial, Helvetica, sans-serif",24,"rgba(0,0,0,1)","normal","none",""],"transform":[[-54,-42]]}],"symbolInstances":[]},
   states: {
      "Base State": {
         "${_Count}": [
            ["transform", "translateX", '-54px'],
            ["style", "font-size", '72px'],
            ["style", "text-align", 'center'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["transform", "translateY", '-42px'],
            ["style", "width", '128px']
         ],
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "border-top-left-radius", [64,64],{valueTemplate:'@@0@@px @@1@@px'}],
            ["transform", "translateX", '-5px'],
            ["style", "border-bottom-right-radius", [64,64],{valueTemplate:'@@0@@px @@1@@px'}],
            ["style", "border-top-right-radius", [64,64],{valueTemplate:'@@0@@px @@1@@px'}],
            ["style", "width", '128px'],
            ["style", "border-bottom-left-radius", [64,64],{valueTemplate:'@@0@@px @@1@@px'}],
            ["style", "height", '128px'],
            ["transform", "translateY", '-14.00001px']
         ],
         "${symbolSelector}": [
            ["style", "height", '128px'],
            ["style", "width", '128px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         labels: {

         },
         timeline: [
         ]
      }
   }
},
"status": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {"dom":[{"id":"status","className":"stage_status_id","type":"rect","rect":[0,0,0,0]}],"symbolInstances":[{"id":"status","symbolName":"log"}]},
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '34px'],
            ["style", "width", '571px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         labels: {

         },
         timeline: [
         ]
      }
   }
},
"endMessage": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {"dom":[{"id":"bottomText","className":"symbolStage_endMessage_bottomText_id","type":"text","rect":[297,46,0,0],"text":"There are three sheep","align":"center","font":["Arial, Helvetica, sans-serif",47,"rgba(255,255,255,1)","normal","none","normal"],"transform":[[-297,-46],null,null,[0.22,0.22]]}],"symbolInstances":[]},
   states: {
      "Base State": {
         "${_bottomText}": [
            ["transform", "scaleY", '0.22'],
            ["transform", "translateX", '-297px'],
            ["transform", "scaleX", '0.22'],
            ["style", "height", '73px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-46px'],
            ["style", "width", '571px']
         ],
         "${symbolSelector}": [
            ["style", "height", '73px'],
            ["style", "width", '571px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: false,
         labels: {

         },
         timeline: [
            { id: "eid983", tween: [ "style", "${_bottomText}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "easeOutElastic" },
            { id: "eid984", tween: [ "transform", "${_bottomText}", "scaleX", '1', { fromValue: '0.22'}], position: 250, duration: 500, easing: "easeOutElastic" },
            { id: "eid985", tween: [ "transform", "${_bottomText}", "scaleY", '1', { fromValue: '0.22'}], position: 250, duration: 500, easing: "easeOutElastic" }         ]
      }
   }
},
"Sheep3": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
       id:'svgSheep4',
       className:'stage_svgSheep4_id',
       type:'rect',
       rect:[339.70024350586,-10.275387370605,0,0],
       transform:[[-50.56852,27.5757],,,[0.70107,0.70107]]
   },
   {
       id:'svgSheep3',
       className:'stage_svgSheep3_id',
       type:'rect',
       rect:[182.421487,112.904272,0,0],
       transform:[[12.67512,-7.18971],,,[0.97282,0.97282]]
   },
   {
       id:'svgSheep5',
       className:'stage_svgSheep5_id',
       type:'rect',
       rect:[33.866907629395,241.39129201172,0,0],
       transform:[[46.09973,-26.77127],,,[1.19927,1.19927]]
   }],
   symbolInstances: [
   {
      id:'svgSheep5',
      symbolName:'svgSheep'
   },
   {
      id:'svgSheep3',
      symbolName:'svgSheep'
   },
   {
      id:'svgSheep4',
      symbolName:'svgSheep'
   }
   ]
},
   states: {
      "Base State": {
         "${_svgSheep5}": [
            ["transform", "scaleY", '1.19927'],
            ["transform", "scaleX", '1.19927'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '14.22871px'],
            ["transform", "translateX", '-11.90027px']
         ],
         "${_svgSheep3}": [
            ["transform", "scaleY", '0.97282'],
            ["transform", "scaleX", '0.97282'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-5.18971px'],
            ["transform", "translateX", '22.08687px']
         ],
         "${symbolSelector}": [
            ["style", "height", '440.391265px'],
            ["style", "width", '502.51325px']
         ],
         "${_svgSheep4}": [
            ["transform", "scaleY", '0.70107'],
            ["transform", "scaleX", '0.70107'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-12.40905px'],
            ["transform", "translateX", '8.64791px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: false,
         labels: {
            "fadeIn": 0
         },
         timeline: [
            { id: "eid1062", tween: [ "style", "${_svgSheep5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
            { id: "eid1063", tween: [ "style", "${_svgSheep3}", "opacity", '1', { fromValue: '0'}], position: 591, duration: 1000 },
            { id: "eid1064", tween: [ "style", "${_svgSheep4}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 1000 }         ]
      }
   }
},
"Sheep5": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {"dom":[{"id":"svgSheep","className":"symbolStage_Sheep5_svgSheep_id","type":"rect","rect":[50.145445103516,126.10686320703,0,0],"transform":[[-47.60001,8.79998]]},{"id":"svgSheep2","className":"symbolStage_Sheep5_svgSheep2_id","type":"rect","rect":[322.54545425879,90.106863207031,0,0]},{"id":"svgSheep3","className":"symbolStage_Sheep5_svgSheep3_id","type":"rect","rect":[394.54548477637,423.70689982813,0,0],"transform":[[8.24301,-108.99565],null,null,[1.14426,1.14426]]},{"id":"svgSheep4","className":"symbolStage_Sheep5_svgSheep4_id","type":"rect","rect":[201.34544205176,46.906858629395,0,0],"transform":[[-56.75389,-41.83093],null,null,[0.69467,0.69467]]},{"id":"svgSheep5","className":"symbolStage_Sheep5_svgSheep5_id","type":"rect","rect":[506.1454603623,1.3068525258789,0,0],"transform":[[-52.69048,-48.55787],null,null,[0.42603,0.42603]]}],"symbolInstances":[{"id":"svgSheep","symbolName":"svgSheep"},{"id":"svgSheep3","symbolName":"svgSheep"},{"id":"svgSheep4","symbolName":"svgSheep"},{"id":"svgSheep5","symbolName":"svgSheep"},{"id":"svgSheep2","symbolName":"svgSheep"}]},
   states: {
      "Base State": {
         "${_svgSheep5}": [
            ["transform", "scaleY", '0.42603'],
            ["transform", "scaleX", '0.42603'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-48.55787px'],
            ["transform", "translateX", '-52.69048px']
         ],
         "${_svgSheep3}": [
            ["transform", "scaleY", '1.14426'],
            ["transform", "scaleX", '1.14426'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-108.99565px'],
            ["transform", "translateX", '8.24301px']
         ],
         "${_svgSheep}": [
            ["style", "opacity", '0'],
            ["transform", "translateY", '8.79998px'],
            ["transform", "translateX", '-47.60001px']
         ],
         "${symbolSelector}": [
            ["style", "height", '495.173305px'],
            ["style", "width", '599.060369px']
         ],
         "${_svgSheep2}": [
            ["style", "opacity", '0']
         ],
         "${_svgSheep4}": [
            ["transform", "scaleY", '0.69467'],
            ["transform", "scaleX", '0.69467'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-41.83093px'],
            ["transform", "translateX", '-56.75389px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         labels: {

         },
         timeline: [
            { id: "eid1054", tween: [ "style", "${_svgSheep4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid1057", tween: [ "style", "${_svgSheep5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid1055", tween: [ "style", "${_svgSheep2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid1056", tween: [ "style", "${_svgSheep3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid1058", tween: [ "style", "${_svgSheep}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 }         ]
      }
   }
}
};

Edge.registerCompositionDefn(compId, symbols, fonts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-43260976");
