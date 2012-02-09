/***********************
* Adobe Edge Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

//Edge symbol: 'stage'
(function(symbolName) {






Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function(sym, e) {
    // insert code to be run at timeline play here
//    $("body").css("background-color", "#ffff00");

    window.doStageLayout = function() {
//	    jQuery("body").css("background-color", "#ff0000");
   	    var stage = sym.$('stage');
    	var log = $(sym.lookupSelector("status"));

        // prevent jerkiness when switching landscape-portrait
    	var zoom = 0.5;
    	stage.css({zoom:zoom, "-moz-transform": "scale("+zoom+")", "-moz-transform-origin": "0 0"});


    	var w = $(window).width();
    	var h = $(window).height();
    	var portrait = (w < h);

    	zoom = portrait ? Math.min(h/960, w/640) : Math.min(w/960, h/640);

    	stage.css({zoom:zoom, "-moz-transform": "scale("+zoom+")", "-moz-transform-origin": "0 0"});

        var m = sym.getSymbol("Main2");
        var c1 = sym.getSymbol("control1");
        var c2 = sym.getSymbol("control2");
        if(sym.portrait === undefined) {
            var state = portrait ? "portrait" : "landscape";
            sym.stop(state);
            c1.stop(state);
            c2.stop(state);
            m.stop(state);
            sym.portrait = portrait;
        }
    	else if(portrait !== sym.portrait) {
            var dest = portrait ? "toPortrait" : "toLandscape";
    		sym.play(dest);
    		c1.play(dest);
    		c2.play(dest);
    		m.play(dest);
            sym.portrait = portrait;
       }
       var tm = (h - (portrait?960:640)*zoom)/2;
       stage.css({"margin-left": "auto", "margin-right":"auto", "margin-top":tm});

       clearTimeout(window.timerId);
    };
    
    if(sym.portrait === undefined) {
   	window.timerId = setTimeout("window.doStageLayout()",100);
	$(window).resize(window.doStageLayout);
	$(window).bind("orientationchange", window.doStageLayout);
	var screen1 = sym.getSymbol("Sheep3");
	screen1.play("fadeIn");
    }


    

});
//Edge binding end





Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 749.98134185315, function(sym, e) {
// insert code here
sym.stop();

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1749.9502449417, function(sym, e) {
// insert code here
sym.stop();

});
//Edge binding end










































})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'sheep'
(function(symbolName) {










































})("sheep");
//Edge symbol end:'sheep'

//=========================================================

//Edge symbol: 'Panel1'
(function(symbolName) {


















Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
// insert code here
sym.stop();

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1999, function(sym, e) {
// insert code here
sym.stop();

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
// insert code here
sym.stop();

});
//Edge binding end























})("Panel1");
//Edge symbol end:'Panel1'

//=========================================================

//Edge symbol: 'Panel2'
(function(symbolName) {

































Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
// insert code here
sym.stop();

});
//Edge binding end






Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
// insert code here
// stop the timeline at the given position (ms or label)
sym.stop(0);

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
sym.stop();
// insert code here

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
// insert code here
// stop the timeline at the given position (ms or label)
sym.stop(0);

});
//Edge binding end





})("Panel2");
//Edge symbol end:'Panel2'

//=========================================================

//Edge symbol: 'Main'
(function(symbolName) {


















Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
// insert code here
sym.stop();

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
// insert code here
sym.stop();

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
// insert code here
sym.stop();

});
//Edge binding end























})("Main");
//Edge symbol end:'Main'

//=========================================================

//Edge symbol: 'log'
(function(symbolName) {








































})("log");
//Edge symbol end:'log'

//=========================================================

//Edge symbol: 'svgSheep'
(function(symbolName) {

    // Sheep counter
    var sheepCount = 3;
    var count = 0;
    var updateCount = function() {
        var pos = this.getPosition();
        if(this.getPosition() === 0) {
            this.play("showCount");
            count = Math.min(sheepCount, count+1);
            this.$('label').html(count);
            if(count === sheepCount) {
                var stageSymbol = comp.getStage();
                var log = stageSymbol.getSymbol("endMessage");
                log.play();
                var answer = stageSymbol.getSymbol('control2');
                answer.play("showAnswer");
            }
        }
    }

    Symbol.bindElementAction(compId, symbolName, "${_head}", "click", function(sym, e) {
       // insert code for mouse clicks here
        updateCount.call(sym);
    });
//Edge binding end

    Symbol.bindElementAction(compId, symbolName, "${_fleece}", "click", function(sym, e) {
       // insert code for mouse clicks here
        updateCount.call(sym);

    });
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {

// insert code here
sym.stop();

});
//Edge binding end


Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
// insert code here// stop the timeline at the given position (ms or label)
sym.stop();

});
//Edge binding end



Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
// insert code here
sym.stop();

});
//Edge binding end











Symbol.bindElementAction(compId, symbolName, "${_eyes}", "click", function(sym, e) {
   // insert code for mouse clicks here
    updateCount.call(sym);

});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${_label}", "click", function(sym, e) {
   // insert code for mouse clicks here
    updateCount.call(sym);

});
//Edge binding end





})("svgSheep");
//Edge symbol end:'svgSheep'

//=========================================================

//Edge symbol: 'roundel'
(function(symbolName) {




















})("roundel");
//Edge symbol end:'roundel'

//=========================================================

//Edge symbol: 'Status'
(function(symbolName) {




















})("Status");
//Edge symbol end:'Status'

//=========================================================

//Edge symbol: 'status'
(function(symbolName) {




















})("status");
//Edge symbol end:'status'

//=========================================================

//Edge symbol: 'endMessage'
(function(symbolName) {
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
// insert code here
sym.stop(0);

});
//Edge binding end












})("endMessage");
//Edge symbol end:'endMessage'

//=========================================================

//Edge symbol: 'Sheep3'
(function(symbolName) {









Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
// insert code to be run at timeline end here
sym.stop();

});
//Edge binding end


})("Sheep3");
//Edge symbol end:'Sheep3'

//=========================================================

//Edge symbol: 'Sheep5'
(function(symbolName) {
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
// insert code here
sym.stop();

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
// insert code here
sym.stop();

});
//Edge binding end





})("Sheep5");
//Edge symbol end:'Sheep5'

})(jQuery, AdobeEdge, "EDGE-43260976");