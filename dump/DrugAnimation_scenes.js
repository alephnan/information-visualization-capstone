(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.DrugAnimation_scenes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// text
	this.instance = new lib.mcText();
	this.instance.setTransform(2003.8,291.2,1,1,0,0,0,1829.3,239);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({x:1295.8},0).wait(24).to({x:565.8},0).wait(24).to({x:-114},0).wait(24).to({x:-610},0).wait(24).to({x:-1222},0).wait(1));

	// Next button
	this.next_btn = new lib.btnNext();
	this.next_btn.setTransform(362,432.8,1,1,0,0,0,28,11.3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(120));

	// whitebubbles
	this.instance_1 = new lib.mcWhiteBubbles();
	this.instance_1.setTransform(2490.5,403.1,1,1,0,0,0,162.2,28.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({x:1782.5},0).wait(24).to({x:1052.5},0).wait(24).to({x:372.5},0).wait(24).to({x:-123.3},0).wait(24).to({x:-735.3},0).wait(1));

	// orangebubbles
	this.instance_2 = new lib.mcOrangeBubbles();
	this.instance_2.setTransform(2490.5,403.1,1,1,0,0,0,162.2,28.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({x:1782.5},0).wait(24).to({x:1052.5},0).wait(24).to({x:372.5},0).wait(24).to({x:-123.3},0).wait(24).to({x:-735.3},0).wait(1));

	// eatingman
	this.eatingMan_mc = new lib.mcEatingMan();
	this.eatingMan_mc.setTransform(545,407.9,1,1,0,0,0,86.2,50.3);

	this.timeline.addTween(cjs.Tween.get(this.eatingMan_mc).wait(23).to({x:-162.8},0).wait(24).to({x:-892.8},0).wait(24).to({x:-1572.8},0).wait(24).to({x:-2068.8},0).wait(24).to({x:-2680.8},0).wait(1));

	// smokestack
	this.instance_3 = new lib.mcSmoke();
	this.instance_3.setTransform(1901.7,136.8,1,1,0,0,0,28.8,28.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(23).to({x:1193.7},0).wait(24).to({x:463.7},0).wait(24).to({x:-216.1},0).wait(24).to({x:-712.1},0).wait(24).to({x:-1324.1},0).wait(1));

	// plantwater2
	this.instance_4 = new lib.mcTreatmentWater();
	this.instance_4.setTransform(2977.7,333.6,1,1,0,0,0,25,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(23).to({x:2269.7},0).wait(24).to({x:1539.7},0).wait(24).to({x:859.7},0).wait(24).to({x:363.7},0).wait(24).to({x:-248.1},0).wait(1));

	// plantwater
	this.wastewater_mc = new lib.mcTreatmentWater();
	this.wastewater_mc.setTransform(1777.9,321.7,1,1,0,0,0,25,13.5);

	this.timeline.addTween(cjs.Tween.get(this.wastewater_mc).wait(23).to({x:1069.9},0).wait(24).to({x:339.9},0).wait(24).to({x:-339.9},0).wait(24).to({x:-835.9},0).wait(24).to({x:-1447.9},0).wait(1));

	// wavywater
	this.wavyWater_mc = new lib.mcWavyWater();
	this.wavyWater_mc.setTransform(2490.6,393.8,1,1,0,0,0,170.5,56.1);

	this.timeline.addTween(cjs.Tween.get(this.wavyWater_mc).wait(23).to({x:1782.6},0).wait(24).to({x:1052.6},0).wait(24).to({x:372.6},0).wait(24).to({x:-123.2},0).wait(24).to({x:-735.2},0).wait(1));

	// hospitalpipemask
	this.instance_5 = new lib.mcHospitalPipeMask();
	this.instance_5.setTransform(1066.7,369.1,1,1,0,0,0,3,31.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(23).to({x:358.7},0).wait(24).to({x:-371.1},0).wait(24).to({x:-1051.1},0).wait(24).to({x:-1547.1},0).wait(24).to({x:-2159.1},0).wait(1));

	// mainpipemask
	this.instance_6 = new lib.mcMainPipeMask();
	this.instance_6.setTransform(1718.7,366.1,1,1,0,0,0,1261.9,39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(23).to({x:1010.7},0).wait(24).to({x:280.7},0).wait(24).to({x:-399.1},0).wait(24).to({x:-895.1},0).wait(24).to({x:-1507.1},0).wait(1));

	// exitpipemask
	this.instance_7 = new lib.mcExitPipeMask();
	this.instance_7.setTransform(3256,323.2,1,1,0,0,0,250.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(23).to({x:2548},0).wait(24).to({x:1818},0).wait(24).to({x:1138},0).wait(24).to({x:642},0).wait(24).to({x:30},0).wait(1));

	// exitpipe
	this.instance_8 = new lib.mcExitPipe();
	this.instance_8.setTransform(3256,323.2,1,1,0,0,0,250.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(23).to({x:2548},0).wait(24).to({x:1818},0).wait(24).to({x:1138},0).wait(24).to({x:642},0).wait(24).to({x:30},0).wait(1));

	// hospitalpipe
	this.instance_9 = new lib.mcHospitalPipe();
	this.instance_9.setTransform(1066.7,369.1,1,1,0,0,0,0,31.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(23).to({x:358.7},0).wait(24).to({x:-371.1},0).wait(24).to({x:-1051.1},0).wait(24).to({x:-1547.1},0).wait(24).to({x:-2159.1},0).wait(1));

	// mainpipe
	this.instance_10 = new lib.mcMainPipe();
	this.instance_10.setTransform(1718.7,364.9,1,1,0,0,0,1258.9,37.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(23).to({x:1010.7},0).wait(24).to({x:280.7},0).wait(24).to({x:-399.1},0).wait(24).to({x:-895.1},0).wait(24).to({x:-1507.1},0).wait(1));

	// drinkingwater
	this.drinkingWater_mc = new lib.mcDrinkingWater();
	this.drinkingWater_mc.setTransform(3636.5,259.9,1,1,0,0,0,5.2,6.3);

	this.timeline.addTween(cjs.Tween.get(this.drinkingWater_mc).wait(23).to({x:2928.5},0).wait(24).to({x:2198.5},0).wait(24).to({x:1518.5},0).wait(24).to({x:1022.5},0).wait(24).to({x:410.5},0).wait(1));

	// drinkingman
	this.instance_11 = new lib.mcDrinkingMan();
	this.instance_11.setTransform(3602.7,289,1,1,0,0,0,83.5,49.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(23).to({x:2894.7},0).wait(24).to({x:2164.7},0).wait(24).to({x:1484.7},0).wait(24).to({x:988.7},0).wait(24).to({x:376.7},0).wait(1));

	// Buildings and ground
	this.instance_12 = new lib.mcBuildingAndGround();
	this.instance_12.setTransform(1996.9,291.3,1,1,0,0,0,1982.5,163.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(23).to({x:1288.9},0).wait(24).to({x:558.9},0).wait(24).to({x:-120.9},0).wait(24).to({x:-616.9},0).wait(24).to({x:-1228.9},0).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC6600","#FFFFFF"],[0,1],10.1,-302.8,10.1,180.1).s().p("EA7DArgMh2FAAAMAAAhW/MB2FAAAMAAABW/").cp();
	this.shape.setTransform(376,92.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},119).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,-185.9,3981.4,716.2);


// symbols:
(lib.smokeSymbol6_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#54423F").s().p("AAABLQghAAgYgWQgYgXAAgeQAAgdAYgXQAYgWAhAAQAiAAAYAWQAYAXAAAdQAAAegYAXQgYAWgiAAIAAAA").cp();
	this.shape.setTransform(8.3,7.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.5,15);


(lib.smokeSymbol5_mc = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#54423F").s().p("AAAjlQBhAABFBDQBFBEAABeQAABfhFBDQhFBEhhAAQhgAAhFhEQhFhDAAhfQAAheBFhEQBFhDBgAAIAAAA").cp();
	this.shape_1.setTransform(23.5,23);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,47,46);


(lib.smokeSymbol4_mc = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#54423F").s().p("Ag0A2QgWgXAAgfQAAgfAWgXQAXgWAdAAQAeAAAXAWQAWAXAAAfQAAAfgWAXQgXAXgeAAQgdAAgXgXIAAAA").cp();
	this.shape_2.setTransform(7.5,7.8);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,15.5);


(lib.smokeSymbol3_mc = function() {
	this.initialize();

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#54423F").s().p("AEEAAQAABqhNBMQhMBLhrAAQhqAAhNhLQhMhMAAhqQAAhpBMhMQBNhLBqAAQBrAABMBLQBNBMAABpIAAAA").cp();
	this.shape_3.setTransform(26,25.8);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,52,51.5);


(lib.smokeSymbol2_mc = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#54423F").s().p("AA8A4QgZAYgjAAQgiAAgZgYQgZgXAAghQAAggAZgXQAZgYAiAAQAjAAAZAYQAZAXAAAgQAAAhgZAXIAAAA").cp();
	this.shape_4.setTransform(8.5,8);

	this.addChild(this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17,16);


(lib.smokeSymbol1_mc = function() {
	this.initialize();

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#54423F").s().p("ADKDKQhUBVh2AAQh1AAhVhVQhUhUAAh2QAAh1BUhVQBVhUB1AAQB2AABUBUQBVBVAAB1QAAB2hVBUIAAAA").cp();
	this.shape_5.setTransform(28.8,28.8);

	this.addChild(this.shape_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57.5,57.5);


(lib.mcWhiteBubbles = function() {
	this.initialize();

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F9F9F9").ss(2).p("AA8AAQAAAZgSASQgSARgYAAQgYAAgSgRQgRgSAAgZQAAgXARgSQASgSAYAAQAYAAASASQASASAAAXIAAAA").cp();
	this.shape_6.setTransform(318.3,33.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F9F9F9").ss(2).p("AAAhXQAkAAAZAbQAbAZAAAjQAAAkgbAZQgZAbgkAAQgjAAgZgbQgbgZAAgkQAAgjAbgZQAZgbAjAAIAAAA").cp();
	this.shape_7.setTransform(300.3,21.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F9F9F9").ss(2).p("ACciaQBABAAABaQAABbhABBQhBBAhbAAQhaAAhAhAQhBhBAAhbQAAhaBBhAQBAhBBaAAQBbAABBBBIAAAA").cp();
	this.shape_8.setTransform(268,34.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F9F9F9").ss(2).p("AAxAAQAAAUgPAOQgOAPgUAAQgTAAgOgPQgPgOAAgUQAAgTAPgOQAOgPATAAQAUAAAOAPQAPAOAAATIAAAA").cp();
	this.shape_9.setTransform(236.2,4.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#F9F9F9").ss(2).p("AA8AAQAAAZgSASQgSARgYAAQgYAAgSgRQgRgSAAgZQAAgYARgSQASgRAYAAQAYAAASARQASASAAAYIAAAA").cp();
	this.shape_10.setTransform(239.9,18.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#F9F9F9").ss(2).p("AA2AAQAAAWgQAQQgQAQgWAAQgVAAgQgQQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAQAQAAAVIAAAA").cp();
	this.shape_11.setTransform(5.5,30.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#F9F9F9").ss(2).p("AAAg2QAWAAAQARQAQAPAAAWQAAAXgQAQQgQAQgWAAQgVAAgQgQQgQgQAAgXQAAgWAQgPQAQgRAVAAIAAAA").cp();
	this.shape_12.setTransform(17.7,12.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#F9F9F9").ss(2).p("AAgAAQAAANgJAKQgKAKgNAAQgMAAgKgKQgKgKAAgNQAAgMAKgKQAKgKAMAAQANAAAKAKQAJAKAAAMIAAAA").cp();
	this.shape_13.setTransform(190.1,18.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#F9F9F9").ss(2).p("AAAhbQAmAAAbAbQAbAbAAAlQAAAmgbAbQgbAbgmAAQglAAgbgbQgbgbAAgmQAAglAbgbQAbgbAlAAIAAAA").cp();
	this.shape_14.setTransform(222,17.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#F9F9F9").ss(2).p("AA1AAQAAAWgPAQQgRAPgVAAQgUAAgRgPQgPgQAAgWQAAgUAPgQQARgQAUAAQAVAAARAQQAPAQAAAUIAAAA").cp();
	this.shape_15.setTransform(215.5,37);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#F9F9F9").ss(2).p("ABGAAQAAAdgUAVQgVAVgdAAQgcAAgVgVQgUgVAAgdQAAgcAUgVQAVgUAcAAQAdAAAVAUQAUAVAAAcIAAAA").cp();
	this.shape_16.setTransform(195.2,28.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#F9F9F9").ss(2).p("ABghfQAoAoAAA3QAAA4goAoQgoAog4AAQg3AAgogoQgogoAAg4QAAg3AogoQAogoA3AAQA4AAAoAoIAAAA").cp();
	this.shape_17.setTransform(166.7,27.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#F9F9F9").ss(2).p("ABThSQAiAjAAAvQAAAxgiAiQgiAigxAAQgvAAgjgiQgigjAAgwQAAgvAigjQAjgiAvAAQAwAAAjAiIAAAA").cp();
	this.shape_18.setTransform(121.4,21.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#F9F9F9").ss(2).p("AA8AAQAAAZgRASQgSARgZAAQgYAAgSgRQgRgSAAgZQAAgXARgSQASgSAYAAQAZAAASASQARASAAAXIAAAA").cp();
	this.shape_19.setTransform(99.3,33.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#F9F9F9").ss(2).p("ABAg/QAaAaAAAlQAAAlgaAbQgbAaglAAQgkAAgbgaQgagbAAglQAAglAagaQAbgbAkAAQAlAAAbAbIAAAA").cp();
	this.shape_20.setTransform(80.8,22.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#F9F9F9").ss(2).p("AAAjdQBcAABBBBQBBBBAABbQAABbhBBCQhBBBhcAAQhaAAhChBQhBhBAAhcQAAhbBBhBQBChBBaAAIAAAA").cp();
	this.shape_21.setTransform(48.2,27.3);

	this.addChild(this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,324.4,57);


(lib.mcWavyWater = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EB844A").s().p("AUsnGQAwAPBJACIAygDQA8gJAogeIAegMQAngNApgBIAAOKIgSANI5aBmI7ThvIgSgVIAAuAIAagCQAcgCAJADQAVAFA0AmIAhAQQAvAPBKACIAygDQA8gJAogeIAkgRQAvgRA2ABIAZABQAbACALADQAbAIAuAcIAgAQQAxAPBIACIA0gDQA6gJAogeIAjgRQAsgQAzAAIAbABQAbACAKADQAUAFA0AfIAhAQQAwAPBIACIAzgDQA7gJAogeIAlgRQAvgRA0ABIAZABQAbACALADQAbAIAuAcIAgAQQAxAPBJACIAzgDQA6gJAogeIAlgRQAsgQAxAAIAXABQAYACAKADQAUAFAzAfIAhAQQAwAPBJACIAzgDQA7gJAogeIAkgRQAvgRA2ABIAZABQAcACAKADQAbAIAuAcIAhAQ").cp();
	this.shape_22.setTransform(170.5,60.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EB844A").s().p("AZZn4QAmgNAqgBIAAOjIgSAOI5aBmI7UhwIgRgUIAAuaIAagCQAbgCAKADQAUAFA1AmIAhAQQAvAPBJACIAzgDQA7gJAogeIAlgRQAvgRA2ABIAZABQAbACAKADQAcAIAtAcIAhAQQAwAPBJACIAzgDQA7gJAogeIAjgRQAsgQAzAAIAaABQAcACAKADQAUAFA0AfIAhAQQAvAPBJACIAzgDQA7gJAogeIAlgRQAvgRA0ABIAZABQAbACALADQAbAIAuAcIAgAQQAxAPBIACIA0gDQA6gJAogeIAlgRQAtgPAwgBIAXABQAYACAKADQAUAFAzAfIAhAQQAwAPBJACIAzgDQA7gJAogeIAkgRQAvgRA3ABIAZABQAbACAKADQAbAIAuAcIAhAQQAwAPBJACIAzgDQA7gJAogeIAegM").cp();
	this.shape_23.setTransform(170.5,59.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EB844A").s().p("AZZoIQAmgNAqgBIAAPDIgSAOI5aBmI7UhwIgRgUIAAu6IAagCQAbgCAKADQAUAFA1AmIAhAQQAvAPBJACIAzgDQA7gJAogeIAlgRQAvgRA2ABIAZABQAbACAKADQAcAIAtAcIAhAQQAwAPBJACIAzgDQA7gJAogeIAjgRQAsgQAzAAIAaABQAcACAKADQAUAFA0AfIAhAQQAvAPBJACIAzgDQA7gJAogeIAlgRQAvgRA0ABIAZABQAbACALADQAbAIAuAcIAgAQQAxAPBIACIA0gDQA6gJAogeIAlgRQAtgPAwgBIAXABQAYACAKADQAUAFAzAfIAhAQQAwAPBJACIAzgDQA7gJAogeIAkgRQAvgRA3ABIAZABQAbACAKADQAbAIAuAcIAhAQQAwAPBJACIAzgDQA7gJAogeIAegM").cp();
	this.shape_24.setTransform(170.5,57.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EB844A").s().p("AapomIAAPkIgSANI5aBmI7ThvIgSgVIAAvaIAagCQAcgCAJADQAVAFA0AmIAhAQQAvAPBKACIAygDQA8gJAogeIAkgRQAvgRA2ABIAZABQAbACALADQAbAIAuAcIAgAQQAxAPBIACIA0gDQA6gJAogeIAjgRQAsgQAzAAIAbABQAbACAKADQAUAFA0AfIAhAQQAwAPBIACIAzgDQA7gJAogeIAlgRQAvgRA0ABIAZABQAbACALADQAbAIAuAcIAgAQQAxAPBJACIAzgDQA6gJAogeIAlgRQAsgQAxAAIAXABQAYACAKADQAUAFAzAfIAhAQQAwAPBJACIAzgDQA7gJAogeIAkgRQAvgRA2ABIAZABQAcACAKADQAbAIAuAcIAhAQQAwAPBJACIAygDQA8gJAogeIAegMQAngNApgBIAAAA").cp();
	this.shape_25.setTransform(170.5,56.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EB844A").s().p("AZZoJQAmgNAqgBIAAPGIgSANI5aBmI7UhvIgRgVIAAu8IAagCQAbgCAKADQAUAFA1AmIAhAQQAvAPBJACIAzgDQA7gJAogeIAlgRQAvgRA2ABIAZABQAbACAKADQAcAIAtAcIAhAQQAwAPBJACIAzgDQA7gJAogeIAjgRQAsgQAzAAIAaABQAcACAKADQAUAFA0AfIAhAQQAvAPBJACIAzgDQA7gJAogeIAlgRQAvgRA0ABIAZABQAbACALADQAbAIAuAcIAgAQQAxAPBIACIA0gDQA6gJAogeIAlgRQAtgPAwgBIAXABQAYACAKADQAUAFAzAfIAhAQQAwAPBJACIAzgDQA7gJAogeIAkgRQAvgRA3ABIAZABQAbACAKADQAbAIAuAcIAhAQQAwAPBJACIAzgDQA7gJAogeIAegM").cp();
	this.shape_26.setTransform(170.5,57.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EB844A").s().p("AZZn6QAmgNAqgBIAAOoIgSANI5aBmI7UhvIgRgVIAAueIAagCQAbgCAKADQAUAFA1AmIAhAQQAvAPBJACIAzgDQA7gJAogeIAlgRQAvgRA2ABIAZABQAbACAKADQAcAIAtAcIAhAQQAwAPBJACIAzgDQA7gJAogeIAjgRQAsgQAzAAIAaABQAcACAKADQAUAFA0AfIAhAQQAvAPBJACIAzgDQA7gJAogeIAlgRQAvgRA0ABIAZABQAbACALADQAbAIAuAcIAgAQQAxAPBIACIA0gDQA6gJAogeIAlgRQAtgPAwgBIAXABQAYACAKADQAUAFAzAfIAhAQQAwAPBJACIAzgDQA7gJAogeIAkgRQAvgRA3ABIAZABQAbACAKADQAbAIAuAcIAhAQQAwAPBJACIAzgDQA7gJAogeIAegM").cp();
	this.shape_27.setTransform(170.5,59.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22}]}).to({state:[{t:this.shape_23}]},4).to({state:[{t:this.shape_24}]},5).to({state:[{t:this.shape_22},{t:this.shape_25}]},5).to({state:[{t:this.shape_26}]},5).to({state:[{t:this.shape_27}]},5).to({state:[{t:this.shape_22}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,9,341,103.3);


(lib.mcTreatmentWater = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EB844A").s().p("AgIhtQAXAAAvAZQAuAYAUgCQArgDArgjQAWgRANgQIABAUQAABnhJBHQhKBJhnAAQhmAAhJhJQhKhHAAhnIABgOQABAHAdAYQAnAfAnACQATABAqgXQAsgYAbAAIAAAA").cp();
	this.shape_28.setTransform(25,13.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EB844A").s().p("ADdhuQAGgGAHgFQAGgCAFgDQACgBADgBQAAAKAAAKQgDBag8BAQgGAIgJAIQhDBBheADQgIABgFAAQhjgChGhDQgDgDgDgDQhIhGAAhmIABgOIAAABQADAGAaASQABABACABQAiAXAjAFQAFAAAEAAQASABAhgPQAGgCAGgDQAfgNAWgEQADAAADgBQAGgBAHABQATAAAjAOQAJADAIAEQAdAMATADQALACAIgBQAggDAigUQAKgGAKgGIAAAA").cp();
	this.shape_29.setTransform(25,13.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EB844A").s().p("ADRhtQALgFAJgGQAGgEAFgEQABABAAAAQAEACACABQABABABABQAAAAABAAQAAALgBAKQgEBYg9A+QgCADgDADQgEAFgGAFQhDA/hdADQgDAAgCAAQgEAAgGAAQhhgDhGhEQgDgDgCgCQhGhGgBhkIABgOIAAAAIABgBQACAGAaAOQABAAABABQABAAACABQAjATAjAEQABAAABAAQAEAAAFAAQASAAAfgKQACgBACAAQAFgCAGgCQAegJAVgCQABgBACAAQABAAACAAQACAAACAAQAGAAAFAAQAUACAgAJQACAAADABQAIACAIADQAcAIARAAQACABABAAQAKAAAJgBQAggFAggQQABAAABgBIAAAA").cp();
	this.shape_30.setTransform(25,13.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EB844A").s().p("AgIhtQAVAAAyAJQAtAJAVgCQArgEArgSQAVgKANgIIABAUQAABnhJBHQhKBJhnAAQhmAAhJhJQhKhHAAhnIABgPQAAAEAfANQAmAQAnADQAUABAqgJQAsgJAaAAIAAAA").cp();
	this.shape_31.setTransform(25,13.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EB844A").s().p("ADkh4QAIgFAGgEQADAEACAEQACADABACQAAAKgBAKQgGBWg9A/QgHAIgIAHQhFA9hdACQgFAAgHAAQhhgDhFhEQgDgCgDgDQhGhGAAhlIABgOQACAFAcAPQACABABABQAkATAkADQAEAAAFAAQATAAAhgKQAGgCAGgCQAggJAWgCQADgBADAAQAGAAAFAAQAWABAjAKQAIACAIADQAgAJARABQALAAAIgBQAigFAhgRQALgFAIgGIAAAA").cp();
	this.shape_32.setTransform(25,13.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EB844A").s().p("ADZhtQAEgDAEgCQAHgGAHgFQADABACAAQACAAABABQABAAACAAQAAAHAAAGQAAAEgBADQgDBWg5A+QgHAIgIAIQgCABgBACQhFA/hbAEQgIAAgFAAQhkgChGhEQgCgCgDgDQhHhGgBhlIABgPQADAGAaASQABABABABQABAAABABQAjAXAkAEQADAAADAAQABAAABAAQASAAAjgPQADgBAEgCQABgBADAAQAggNAVgDQAEgBADAAQADgBAEABQADAAACAAQAUACAjANQAFACAFACQADACAEABQAeAMATACQAGAAAFAAQAEAAAFgBQAhgFAhgVQAFgDAFgDIAAAA").cp();
	this.shape_33.setTransform(25,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28}]}).to({state:[{t:this.shape_29}]},4).to({state:[{t:this.shape_30}]},5).to({state:[{t:this.shape_31},{t:this.shape_28}]},5).to({state:[{t:this.shape_32}]},5).to({state:[{t:this.shape_33}]},5).to({state:[{t:this.shape_28}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50.1,27);


(lib.mcText = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Testing has confirmed more than 100 different pharmaceuticals in surface\nwaters. Fish, mollusks and algae are adversely affected by contamination.", "13px Myriad Pro", "#756964");
	this.text.textAlign = "center";
	this.text.lineHeight = 15;
	this.text.lineWidth = 415;
	this.text.setTransform(3447,422.2);

	this.text_1 = new cjs.Text("Testing has confirmed more than 100 different pharmaceuticals in surface\nwaters. Fish, mollusks and algae are adversely affected by contamination.", "13px Myriad Pro", "#756964");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 15;
	this.text_1.lineWidth = 440;
	this.text_1.setTransform(2811.2,422.2);

	this.text_2 = new cjs.Text("Testing has confirmed more than 100 different pharmaceuticals in surface\nwaters. Fish, mollusks and algae are adversely affected by contamination.", "13px Myriad Pro", "#756964");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 15;
	this.text_2.lineWidth = 420;
	this.text_2.setTransform(2324.3,422.2);

	this.text_3 = new cjs.Text("Sewage treatment plants were designed to remove disease-causing\nmicrobes and pathogens from water - not pharmaceuticals.\n", "13px Myriad Pro", "#756964");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 15;
	this.text_3.lineWidth = 403;
	this.text_3.setTransform(1630.1,422.2);

	this.text_4 = new cjs.Text("U.S. hospitals and long-term care facilities also contribute to the problem. They throw away\n250 million pounds of unused drugs and contaminated packaging annually, The Associated\nPress estimates. Most goes into landfills or down drains, toward drinking water supplies.", "13px Myriad Pro", "#756964");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 15;
	this.text_4.lineWidth = 543;
	this.text_4.setTransform(914.8,422.2);

	this.text_5 = new cjs.Text("Most pharmaceuticals in the environment come from consumers.\nMany drugs end up in toilets, unmetabolized by the body or thrown away.", "13px Myriad Pro", "#756964");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 15;
	this.text_5.lineWidth = 417;
	this.text_5.setTransform(208.3,422.4);

	this.text_6 = new cjs.Text("CONSUMPTION OF WATER\nWITH TRACES OF DRUGS", "20px Myriad Pro", "#766A65");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 17;
	this.text_6.lineWidth = 229;
	this.text_6.setTransform(3437.6,3.6);

	this.text_7 = new cjs.Text("DRINKING WATER\nTREATMENT PLANT", "20px Myriad Pro", "#766A65");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 17;
	this.text_7.lineWidth = 174;
	this.text_7.setTransform(2800.3,3.6);

	this.text_8 = new cjs.Text("SURFACE WATER", "20px Myriad Pro", "#766A65");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 17;
	this.text_8.lineWidth = 156;
	this.text_8.setTransform(2340.4,0);

	this.text_9 = new cjs.Text("WASTEWATER\nTREATMENT PLANT", "20px Myriad Pro", "#766A65");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 17;
	this.text_9.lineWidth = 185;
	this.text_9.setTransform(1631,1);

	this.text_10 = new cjs.Text("HEALTH CARE INDUSTRY", "20px Myriad Pro", "#766A65");
	this.text_10.lineHeight = 32;
	this.text_10.lineWidth = 244;
	this.text_10.setTransform(803.9,0);

	this.text_11 = new cjs.Text("DRUG CONSUMPTION", "20px Myriad Pro", "#766A65");
	this.text_11.lineHeight = 20;
	this.text_11.lineWidth = 188;
	this.text_11.setTransform(104.3,1);

	this.addChild(this.text_11,this.text_10,this.text_9,this.text_8,this.text_7,this.text_6,this.text_5,this.text_4,this.text_3,this.text_2,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,3658.6,478);


(lib.mcOrangeBubbles = function() {
	this.initialize();

	// Layer 1
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#EB844A").ss(2).p("AA2AAQAAAWgQAQQgQAQgWAAQgVAAgQgQQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAQAQAAAVIAAAA").cp();
	this.shape_34.setTransform(5.5,30.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#EB844A").ss(2).p("AA8AAQAAAZgSASQgSARgYAAQgYAAgSgRQgRgSAAgZQAAgXARgSQASgSAYAAQAYAAASASQASASAAAXIAAAA").cp();
	this.shape_35.setTransform(318.3,33.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#EB844A").ss(2).p("AAAhXQAkAAAZAbQAbAZAAAjQAAAkgbAZQgZAbgkAAQgjAAgZgbQgbgZAAgkQAAgjAbgZQAZgbAjAAIAAAA").cp();
	this.shape_36.setTransform(300.3,21.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#EB844A").ss(2).p("ACciaQBABAAABaQAABbhABBQhBBAhbAAQhaAAhAhAQhBhBAAhbQAAhaBBhAQBAhBBaAAQBbAABBBBIAAAA").cp();
	this.shape_37.setTransform(268,34.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#EB844A").ss(2).p("AAxAAQAAAUgPAOQgOAPgUAAQgTAAgOgPQgPgOAAgUQAAgTAPgOQAOgPATAAQAUAAAOAPQAPAOAAATIAAAA").cp();
	this.shape_38.setTransform(236.2,4.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#EB844A").ss(2).p("AA8AAQAAAZgSASQgSARgYAAQgYAAgSgRQgRgSAAgZQAAgYARgSQASgRAYAAQAYAAASARQASASAAAYIAAAA").cp();
	this.shape_39.setTransform(239.9,18.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#EB844A").ss(2).p("AAAg2QAWAAAQARQAQAPAAAWQAAAXgQAQQgQAQgWAAQgVAAgQgQQgQgQAAgXQAAgWAQgPQAQgRAVAAIAAAA").cp();
	this.shape_40.setTransform(17.7,12.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#EB844A").ss(2).p("AAgAAQAAANgJAKQgKAKgNAAQgMAAgKgKQgKgKAAgNQAAgMAKgKQAKgKAMAAQANAAAKAKQAJAKAAAMIAAAA").cp();
	this.shape_41.setTransform(190.1,18.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#EB844A").ss(2).p("AAAhbQAmAAAbAbQAbAbAAAlQAAAmgbAbQgbAbgmAAQglAAgbgbQgbgbAAgmQAAglAbgbQAbgbAlAAIAAAA").cp();
	this.shape_42.setTransform(222,17.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#EB844A").ss(2).p("AA1AAQAAAWgPAQQgRAPgVAAQgUAAgRgPQgPgQAAgWQAAgUAPgQQARgQAUAAQAVAAARAQQAPAQAAAUIAAAA").cp();
	this.shape_43.setTransform(215.5,37);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#EB844A").ss(2).p("ABGAAQAAAdgUAVQgVAVgdAAQgcAAgVgVQgUgVAAgdQAAgcAUgVQAVgUAcAAQAdAAAVAUQAUAVAAAcIAAAA").cp();
	this.shape_44.setTransform(195.2,28.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#EB844A").ss(2).p("ABghfQAoAoAAA3QAAA4goAoQgoAog4AAQg3AAgogoQgogoAAg4QAAg3AogoQAogoA3AAQA4AAAoAoIAAAA").cp();
	this.shape_45.setTransform(166.7,27.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#EB844A").ss(2).p("ABThSQAiAjAAAvQAAAxgiAiQgiAigxAAQgvAAgjgiQgigjAAgwQAAgvAigjQAjgiAvAAQAwAAAjAiIAAAA").cp();
	this.shape_46.setTransform(121.4,21.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#EB844A").ss(2).p("AA8AAQAAAZgRASQgSARgZAAQgYAAgSgRQgRgSAAgZQAAgXARgSQASgSAYAAQAZAAASASQARASAAAXIAAAA").cp();
	this.shape_47.setTransform(99.3,33.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#EB844A").ss(2).p("ABAg/QAaAaAAAlQAAAlgaAbQgbAaglAAQgkAAgbgaQgagbAAglQAAglAagaQAbgbAkAAQAlAAAbAbIAAAA").cp();
	this.shape_48.setTransform(80.8,22.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#EB844A").ss(2).p("AAAjdQBcAABBBBQBBBBAABbQAABbhBBCQhBBBhcAAQhaAAhChBQhBhBAAhcQAAhbBBhBQBChBBaAAIAAAA").cp();
	this.shape_49.setTransform(48.2,27.3);

	this.addChild(this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,324.4,57);


(lib.mcMainPipeMask = function() {
	this.initialize();

	// Layer 1
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("EDFJgGFIABLxMhotAAfMhR0gAKIgErPIihAAIAALZMjNOAAAIAAqrIA8AAIAAJvMDLWAAAIAArZIEYAAIAELPMBQ5AAKMBnxgAeIgBq2IA8AA").cp();
	this.shape_50.setTransform(1261.9,39.5);

	this.addChild(this.shape_50);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2523.8,79);


(lib.mcMainPipe = function() {
	this.initialize();

	// Layer 1
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(6).p("EjEsgEgIAAKMMDMSAAAIAArYIDcAAIAFLOMBRVAAKMBoQgAeIgCrT");
	this.shape_51.setTransform(1258.9,39);

	this.addChild(this.shape_51);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2517.8,75.5);


(lib.mcHospitalPipeMask = function() {
	this.initialize();

	// Layer 1
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAek9IAAJ7Ig7AAIAAp7IA7AA").cp();
	this.shape_52.setTransform(3,31.9);

	this.addChild(this.shape_52);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,6,63.8);


(lib.mcHospitalPipe = function() {
	this.initialize();

	// Layer 1
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(6).p("AAAk9IAAJ7");
	this.shape_53.setTransform(0,31.9);

	this.addChild(this.shape_53);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mcExitPipe = function() {
	this.initialize();

	// Layer 1
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#756964").ss(6).p("EgjEAAAMBGJAAA");
	this.shape_54.setTransform(276.2,0);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(6).p("AkAAAIIBAA");
	this.shape_55.setTransform(25.8,0);

	this.addChild(this.shape_55,this.shape_54);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mcEatingMan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_119 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119));

	// bathroomwall
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#766964").s().p("An9KSIP7AAIAAvyIv7kxIAAUj").cp();
	this.shape_56.setTransform(-44.8,-85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_56}]},48).to({state:[]},67).to({state:[]},4).wait(1));

	// glasses
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#766964").ss().p("AgRAAIAjAA");
	this.shape_57.setTransform(-182.4,-71.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#766964").ss(2).p("AhmgeICiAAIARAMQARASAAAp");
	this.shape_58.setTransform(-158,-65.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#766964").ss().p("ABFAAQAAAdgUAWQgVAVgcAAQgbAAgUgVQgVgWAAgdQAAgcAVgWQAUgVAbAAQAcAAAVAVQAUAWAAAcIAAAA").cp();
	this.shape_59.setTransform(-175,-67.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#766964").ss().p("AgvgyQAUgVAbAAQAcAAAUAVQAVAWAAAcQAAAdgVAWQgUAVgcAAQgbAAgUgVQgVgWAAgdQAAgcAVgWIAAAA").cp();
	this.shape_60.setTransform(-189.9,-67.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},42).to({state:[]},77).wait(1));

	// BATHROOMDOOR
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#766964").s().p("ADzH9IneAAIgHv5IHlAAIAAP5").cp();
	this.shape_61.setTransform(-121.6,-70.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_61}]},42).to({state:[]},12).to({state:[]},51).to({state:[{t:this.shape_61}]},2).to({state:[]},12).wait(1));

	// manwithpill
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#766964").s().p("AAYAAQAAAJgHAHQgHAHgKAAQgIAAgHgHQgHgHAAgJQAAgIAHgIQAHgHAIAAQAKAAAHAHQAHAHAAAJIAAAA").cp();
	this.shape_62.setTransform(-168.8,-103.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#766964").s().p("AgrgmIAqAAQAoADAAAPIAFAUQABAUgWAOQgUAMgUgRQgagTAAgwIAAAA").cp();
	this.shape_63.setTransform(-152.6,-110.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#766964").s().p("AkJiXQgeAhAFAmIARATQAVAXAaATQBRA5BbgIQgMgQgLgVQgWgvAIgkIAuATQAwAKAXgvQAIgZgEgYQgKgyg9ABIAZgYQAhgXAyAFIgEAqQAHAtAwAOIAqABQAngKgKgyIANANQAPARAJAUQAgBAgcBHQgIARgLAQQgWAigOgCIAmAGQAuAJAnARQB8A4AJB2IrIAAQgbgbgfguQhAhegWhfQgJhKAIgVQAKgcAagbQA1g4BVAAIBoAAIAWgeIBTBHIgSAQIgVAAIgggkIgLAUIAAAMIAdAHIgEAVIg5ACIgIgKIADggIhJAAQgQAJgOARIAAAA").cp();
	this.shape_64.setTransform(-164.8,-90);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("ABLAAQAAAegWAWQgWAWgfAAQgeAAgWgWQgWgWAAgeQAAgdAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAdIAAAA").cp();
	this.shape_65.setTransform(-168.4,-104);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AhAg8IBBAKQBCAPgEAVIAFAaQgEAggmAOQggAMgggdQglghALhEIAAAA").cp();
	this.shape_66.setTransform(-152,-109.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62}]},6).to({state:[]},24).to({state:[]},89).wait(1));

	// house toilet table
	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#766964").s().p("AmrjEINXAAIAABKIhKAAIAAE/Iq7AAIAAlBIhSAAIAAhI").cp();
	this.shape_67.setTransform(-157.2,-38.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#766964").s().p("AiUAbQAJAoANAiQAqBrBKgCIBWACIAAjVIBrAAIgJgVIgPlmIBQgIQBUgFAUANIAAFkIgVAsIgmAIIhzCFICMAAIAADuIhXAAIAAh2Ig1AAIAaB2Im0AAIAcjdQgggUggggQhBhBAAg+IC8AAIAGAg").cp();
	this.shape_68.setTransform(-42.3,-58.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#766964").s().p("AVVlCI1imsI1HGeIAsB1IBignIAAPxICBAAIAAwWIQ4lQIDiBQIAIUWIAhAAIAA0SINyEVIAAP9IBmAAIAAvmIBYAjIAnhu").cp();
	this.shape_69.setTransform(-117.5,-94.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67}]}).wait(120));

	// man
	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AAtgtQAUATAAAaQAAAagUAUQgSATgbAAQgZAAgTgTQgUgUAAgaQAAgaAUgTQATgTAZAAQAbAAASATIAAAA").cp();
	this.shape_70.setTransform(-146.8,-100.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AAugtQATATAAAaQAAAagTAUQgUATgaAAQgaAAgTgTQgTgUAAgaQAAgaATgTQATgTAaAAQAaAAAUATIAAAA").cp();
	this.shape_71.setTransform(-159.8,-100.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#766964").s().p("AhwjKQgyAyAABHQAABHAxAvQicAWhBBkQghAxgBAuILhAAQADhZhTg3Qg/grhrgUQAcgYAQggQAQgiAAgmQAAhHgygyQgzgzhHAAQhFAAgyAzIAAAA").cp();
	this.shape_72.setTransform(-154.3,-89.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70}]}).to({state:[]},6).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70}]},24).to({state:[]},12).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70}]},77).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-254.1,-169.4,273.2,150.2);


(lib.mcDrinkingWater = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EB844A").s().p("AAQgdIgogfIgNAPIAuAtIgBA3IgBAGQAQAAAPgIIgIg3IgOgb").cp();
	this.shape_73.setTransform(3.9,6.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EB844A").s().p("AAigFQACAFABAGIAEAdQgBAIgBAHQgGAEgHADQgJAEgKAAQAAgBgBgDQgBgCgBgDQgDgFgBgHIgBgiIgPgZIgIgKIgLgLIgBAAIgEgFIAJgMIAFgDIAPAGIAcAWIAEAHQAIAKAFAKIAAAA").cp();
	this.shape_74.setTransform(4.2,6.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EB844A").s().p("AApAAQABABAAADIAEAYQgBAEgBAEQgDAHgEAGQgDACgEACQgEACgDACQgLAEgKAAQgBAAgBgCQAAAAAAgBQgBAAgBgBQgEgDgFgEQgBgBgBgBIgDgWIgBgMIgBgEIgBgRIgDgLIgHgLIgLgLIgBgBIgEgEIACgDIACgFIAEgFIABAAIAGgCIARACIAAAAIAPAKIAQANIAFAEQAAACACABQALAMAFAKQAAADAAADIAAAA").cp();
	this.shape_75.setTransform(4.7,6.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EB844A").s().p("AABg1IgSgIIgMAAIgOACIgEAGIgCAGIADAIIAFADIAHAJIAGAOIABALIgHAVIAAAQIAHAYQAKADAJAAQARAAAQgJQAPgJAKgPIgFgfQAAgLgWgVIgWgT").cp();
	this.shape_76.setTransform(5.3,6.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EB844A").s().p("AAmgKQAEAHAAAEIAFAfQgEAIgEAGQgGAFgHAEQgJAFgKABQgCAAgDgBQgCgCgBAAQgGgDgHgFIgEgXIAAgNIgBgCIAAgSIgDgLIgHgLIgCgDIgPgOIADgDIACgFIAEgFIAGgCIAGAAIALADIARAIIAUATQAKALAFAJIAAAA").cp();
	this.shape_77.setTransform(4.7,6.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EB844A").s().p("AAjgCQACAEABAGIAEAfQgBAEAAAEQgDACgCACQgGAEgHADQgGACgGABQgBgBgCgCIAAAAQgBgBgCgBQgBgCgBgBQgDgFgBgFIgCgkIgBgCIgHgOIgFgJIgLgNIgOgNIADgDIACgFIAFgFIAEgDIABABIAOAGIAPAKIANALIAGAIQAGAIAFAIQABADABADIAAAA").cp();
	this.shape_78.setTransform(4.3,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73}]}).to({state:[{t:this.shape_74}]},4).to({state:[{t:this.shape_75}]},5).to({state:[{t:this.shape_76},{t:this.shape_73}]},5).to({state:[{t:this.shape_77}]},5).to({state:[{t:this.shape_78}]},5).to({state:[{t:this.shape_73}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.2,7.8,12.4);


(lib.mcDrinkingMan = function() {
	this.initialize();

	// Layer 1
	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("ABHAAQAAAegVAVQgVAVgdAAQgcAAgVgVQgVgVAAgeQAAgdAVgVQAVgVAcAAQAdAAAVAVQAVAVAAAdIAAAA").cp();
	this.shape_79.setTransform(116.5,19.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#756964").s().p("AB+jLQhUgahLBAIAPACQASAFAKAKQAnAfgdBLQgOANgTAFQgqALglglIADArQAKAwAmAeQgzAEg4gPQhxgdgahXQACgJAFgMQAJgYAQgPQAygxBYA4IA3hzIiug9IgpBWIAfAWQg1AGgyAbQhmA4ALBqIAjBjQAxBuBLA6ILTAAQgMgvgpgvQhRhdiQABQAngZAXguQAuhZhOhoQgbgagpgMIAAAA").cp();
	this.shape_80.setTransform(119.8,28.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#756964").s().p("ADrgtIh9AAIgogtIgDgWIAYAAIgCgPIgzAAIgEgUIAMgKIBZAAIAGgZIjgAAIAEAXIBPAAIAMAgIg2AAIACALIATAIIgpA1IhzACIAACcIhPAAIAABQICHAAIAigXIAAh9IAvAAIATAbIAVAQIAaACIAYgIIAfgQIAVgVIAAgMIBJAAIAABIIBSgCIAAhpIgWgh").cp();
	this.shape_81.setTransform(25.8,68.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#756964").s().p("Al5hoIg1AAIAAhQINcAAIAABHIhkAAIAAEqIrDAAIAAkh").cp();
	this.shape_82.setTransform(123.9,79.9);

	this.addChild(this.shape_82,this.shape_81,this.shape_80,this.shape_79);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,167,98.4);


(lib.mcBuildingAndGround = function() {
	this.initialize();

	// Layer 1
	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AjUjSQBZhXB7AAQB9AABYBXQBYBYAAB6QAAB7hYBYQhYBXh9AAQh7AAhZhXQhYhXAAh8QAAh6BYhYIAAAA").cp();
	this.shape_83.setTransform(2963.2,190.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAAkNQBvAABPBPQBQBQAABuQAABvhQBPQhPBQhvAAQhvAAhPhQQhPhPAAhvQAAhuBPhQQBPhPBvAAIAAAA").cp();
	this.shape_84.setTransform(1763.5,182.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#756964").s().p("ABVvuIsHAAIAAfLICYASIgL89IHtAAIAAckIDJgZIAA2eIGCAAIAAW3ICggOIAA4gIpeAAIAAmW").cp();
	this.shape_85.setTransform(1053.5,115.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#756964").s().p("Aj4rGICqAAIAACSIiqAAIAABKICqAAIAACSIiqAAIAABOICqAAIAACYIiqAAIAABHICqAAIAACTIiqAAIAABHICqAAIAACSIiVAAIgDBGICYAAIAACdIiqAAIgHDmIImhNIgQiZIkAAAIAAiSIDUgDIAAhEIjUgDIAAiSIC8AAIAHhHIjDgDIAAiXICVAAIAAhDIiVAAIAAicICrAAIAYhCIjDAAIAAiTIDDAAIgHhDIi8AAIAAikIC8AAIALhEIoEAAIAuBE").cp();
	this.shape_86.setTransform(1089.5,138.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#756964").s().p("AATtFIDKAAIALigIoSAgIAOCAIC1AAIAAC2Ii1AAIAABBIC1AAIAACrIi1AAIAAA8IC1AAIAAC2Ii1AAIAABDIC1AAIAACsIi1AAIAAA5IC1AAIAAC4Ii1AAIAAA8IC1AAIAACyIi1AAIAAA8IC1AAIAACxIjgAAIAAC5IKPAjIAAjZIkqAAIAAiwIC4AAIAAg9Ii/AAIAAi1IC7AAIAAg8Ii4AAIAAi1IC8AAIAAg8IjDAAIAAisIDDAAIAAhDIi/AAIAAiyIC7AAIAAhDIi0AAIAAioIC/AAIAAhIIjKAAIAAiv").cp();
	this.shape_87.setTransform(1027.1,114.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#756964").s().p("APkLVIAAvKIvwlhIukFBIgGPqIiAAAIAAu6IhbAjIgwhkISzmuITQGmIgdByIhbgdIgHOlIhfAJ").cp();
	this.shape_88.setTransform(3599.9,137.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#756964").s().p("AgFhgIAADBIAMAAIAAjBIgMAA").cp();
	this.shape_89.setTransform(1113.7,50.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#756964").s().p("AgFhPIAACfIALAAIAAifIgLAA").cp();
	this.shape_90.setTransform(1087.4,49.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#756964").s().p("AADjcIg1GNIA1AsIAwmdIgwgc").cp();
	this.shape_91.setTransform(2982.9,111.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#756964").s().p("AhEjSIBBGoIBIA1IhcoVIgtA4").cp();
	this.shape_92.setTransform(3019.5,115.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#756964").s().p("AgtpaQAdDABOBgIB6BZIBkA6IAAHOIjQikIgDEIIkxkIIAAELIk+kEIAAEIIk6kPIAANPIJxAAQgWgVgQgnQghhNAdhXQABgOAGgVQAMgpAXgjQBJhuCYAAIASgGQAZgDAaALQBSAmA6CsIgxBvQg4BzgfAWILYgPIAAonIlpkIIAIk8IAygZQA8giAygtQCjiQAJjHIAViuIBPAAIAAgvInxirIn5CvIgHArIBWAAIABAyQACA+AJA8IAAAA").cp();
	this.shape_93.setTransform(2964.8,112.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#756964").s().p("ACIuiIA5dFImBAAIA59FIEPAA").cp();
	this.shape_94.setTransform(1888.4,116.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#756964").s().p("AjsoHIF6EvIAAkvIFoEsIAAksIHMFhIAAKuI+DgFIAAwKIFoEsIAAkcIFtEfIAAkv").cp();
	this.shape_95.setTransform(1762.4,157.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#756964").s().p("AitjMIAAGZIBUAAIAAixICrAAIAACxIBcAAIAAmZIhYAAIAAClIirAEIAAipIhYAA").cp();
	this.shape_96.setTransform(1101.5,20.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#756964").s().p("EBl9AJGMjL5gAYIAAxzMDL5AAAIAASL").cp();
	this.shape_97.setTransform(3312.4,268.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#756964").s().p("ECzSAIiMlmjAAbIAAxcMFmjgAdIAARe").cp();
	this.shape_98.setTransform(1147.5,264.5);

	this.addChild(this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,3965,326.8);


(lib.btnNext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.text_12 = new cjs.Text("NEXT", "bold 15px Myriad Pro", "#F9F9F9");
	this.text_12.lineHeight = 15;
	this.text_12.lineWidth = 52;

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF0000").s("#000000").ss(1,1,1).p("ADNB6ImZAAIAAjzIGZAAIAADz").cp();
	this.shape_99.setTransform(20.5,12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_12,p:{color:"#F9F9F9"}}]}).to({state:[{t:this.text_12,p:{color:"#FF0000"}}]},1).to({state:[{t:this.shape_99},{t:this.text_12,p:{color:"#FF0000"}}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56.1,22.6);


(lib.mcSmoke = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// circle6
	this.instance = new lib.smokeSymbol6_mc();
	this.instance.setTransform(117.3,-90.4,1,1,0,0,0,8.3,7.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).to({alpha:1},3).wait(30).to({alpha:0},4).wait(1));

	// circle5
	this.instance_1 = new lib.smokeSymbol5_mc();
	this.instance_1.setTransform(91,-69.9,1,1,0,0,0,23.5,23);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({alpha:1},3).wait(30).to({alpha:0},4).to({_off:true},1).wait(3));

	// circle4
	this.instance_2 = new lib.smokeSymbol4_mc();
	this.instance_2.setTransform(103,-38.6,1,1,0,0,0,7.5,7.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).to({alpha:1},3).wait(30).to({alpha:0},4).to({_off:true},1).wait(6));

	// circle3
	this.instance_3 = new lib.smokeSymbol3_mc();
	this.instance_3.setTransform(73,-23.6,1,1,0,0,0,26,25.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).to({alpha:1},4).wait(30).to({alpha:0},4).to({_off:true},1).wait(9));

	// circle2
	this.instance_4 = new lib.smokeSymbol2_mc();
	this.instance_4.setTransform(45,-2.9,1,1,0,0,0,8.5,8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({alpha:1},3).wait(31).to({alpha:0},4).to({_off:true},1).wait(12));

	// circle1
	this.instance_5 = new lib.smokeSymbol1_mc();
	this.instance_5.setTransform(28.8,28.8,1,1,0,0,0,28.8,28.8);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},3).wait(32).to({alpha:0},4).to({_off:true},1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.5,57.5);


(lib.mcExitPipeMask = function() {
	this.initialize();

	// Layer 1
	this.instance_6 = new lib.mcExitPipe();
	this.instance_6.setTransform(250.3,0,1,1,0,0,0,250.3,0);

	this.addChild(this.instance_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;