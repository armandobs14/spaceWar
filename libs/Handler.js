(function(window) {
	function Handler(){}
	Handler.click = function(event) {
		var target = event.target;
		var posX = spaceship.getX();
		var posY = spaceship.getY();
		var orientation = spaceship.getOrientation(); 
		console.log(orientation);
	 	bullet = new Bullet(posX,posY,orientation);
		stage.addChild(bullet);
	}
	
	Handler.keydown = function(event){
		switch(event.keyCode){
			
			case 32: //SpaceKey
				console.log("Space");
			break;
			default:
				spaceship.keydown(true, event.keyCode);
				//spaceship.setOrientation(event.keyCode);
			break;
		}
		spaceship.keydown(false);
	}
	window.Handler = Handler;
}(window));