( function(window) {
		function Bullet(x, y, orientation) {
			this.initialize(x, y, orientation);
		}

		//Inheritance from Container
		Bullet.prototype = new createjs.Container();
		Bullet.prototype.Container_initialize = Bullet.prototype.initialize;
		Bullet.prototype.Container_tick = Bullet.prototype._tick;

		Bullet.prototype.initialize = function(posX, posY, orientation) {
			//call to initialize() method from parent class
			this.Container_initialize();

			this._width = 6;
			this._height = 10;
			this._color = "#000";
			this._posX = posX;
			this._posY = posY;
			this._orientation = orientation;

			this.graphics = new createjs.Graphics();
			this.graphics.f(this._color);
			this.graphics.dr(this._posX, this._posY, this._width, this._height);

			this.addChild(new createjs.Shape(this.graphics));
			this.regY = this._height;
			this.regX = 3;
			this.addEventListener("click", Handler.click, false);

			this.onTick = function() {
				
				
				switch(this._orientation) {
					case -1:
						this.x = this.x - 10;
						break;
					case 0:
						this.y = this.y - 10;
						break;
					case 1:
						this.x = this.x + 10;
						break;
					case 2:
						this.y = this.y + 10;
						break;
					default:

						break;
				}
			}
		}

		Bullet.prototype._tick = function() {
			this.Container_tick();
		}

		window.Bullet = Bullet;

	}(window));
