(function (window){
    //var this.graphics;
    var stageWidth = window.innerWidth;

    function SpaceShip(x,y){
        this.initialize(x,y);
    }

    //Inheritance from Container
    SpaceShip.prototype = new createjs.Container();
    SpaceShip.prototype.Container_initialize = SpaceShip.prototype.initialize;

    SpaceShip.prototype.initialize = function(x,y){
        //call to initialize() method from parent class
        this.Container_initialize();
        this._position = x;
        this.newOrientation = 0;
        this.oldOrientation = 0;
        this.addChild(new createjs.Bitmap(queue.getItem("spaceship").src));
        this.x = x;
        this.y = y;
        this.scaleX = 0.5;
        this.scaleY = 0.5;
        this.regX = 48;
        this.regY = 48;

        this.onTick = function(){}
        
        
        
        this.addEventListener("keydown",Handler.keydown,false);
        this.addEventListener("keyup",Handler.keyup,false);

        this.addEventListener("click", Handler.click, false);
        
        
    }
    
    
    SpaceShip.prototype.keydown = function(value,keyCode){
    	if(keyCode >=27 && keyCode <= 40){
    		this.newOrientation = keyCode - 38;
    		if(this.oldOrientation == this.newOrientation && value){
        		switch(this.oldOrientation){
        			case -1:
        				this.x = this.x -10;
        			break;
        			case 0:
        				this.y = this.y -10;
        			break;
        			case 1:
        			this.x = this.x +10;
        			break;
        			case 2:
        				this.y = this.y +10;
        			break;
        			default:
        			
        			break;
        		}	
    	}
        	}else{
        		this.oldOrientation = this.newOrientation;
        		this.rotation = 90 * this.newOrientation;
        	}
        	
            
    }
    
    SpaceShip.prototype.getX = function(){
    	return this.x;
    }
	SpaceShip.prototype.getY = function(){
    	return this.y;
    }
    SpaceShip.prototype.getOrientation = function(){
    	return this.oldOrientation;
    }
   

    window.SpaceShip = SpaceShip;

}(window));
