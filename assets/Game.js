(function(window){
	var _stage;
	var _queue;
	var _scoreTable;
	function Game(){

	}

	Game.prototype.pause = function(){
		_stage.pause();
	}

	Game.prototype.updateScore = function(scoreTable){
		var score = "SCORE:\n";

		for(element in scoreTable){
			score += element+":"+scoreTable[element]+"\n";
		}
		_scoreTable = score;
	}

	Game.prototype.showShop = function(){
		console.log("Showing Shop");
	}

	Game.prototype.showChat = function(){
		$("#chatBox").toggle();
	}

	Game.prototype.appendMessage = function(data){

		$("#display ul").append("<li><b>"+data.user+":</b>"+data.message+"<li>");
		$("#display").animate({scrollTop: $("#display").height()*$("#display li").size()},"slow");
		$("#chatBox").show();
	};

	Game.prototype.start = function(stage,queue){
		
		document.addEventListener("keydown",Handler.keydown, false);
		document.addEventListener("click",Handler.click, false);
		
		_stage = stage;
		_queue = queue;
		_stage.removeAllChildren();
		sky = new createjs.Shape();
		
		createjs.Ticker.setFPS(30);
		createjs.Ticker.addListener("tick",window);

		sky.graphics.f("#009DFF").dr(0,0,_stage.canvas.width,_stage.canvas.height);
		_stage.addChild(sky);
		createjs.Ticker.addEventListener("tick",function(event){
			stage.update();
			scoreContainer.text = _scoreTable;
		});

		scoreContainer = new createjs.Text("SCORE: 0","20px Verdana","#000");
		scoreContainer.x = window.innerWidth - 200;
		scoreContainer.y = 50;
		_stage.addChild(scoreContainer);
		
		// Testando nave
		spaceship = new SpaceShip(); 
		spaceship.x = 50;
		spaceship.y = 50;
		_stage.addChild(spaceship);
		
		
	}

	window.Game = Game;
}(window));