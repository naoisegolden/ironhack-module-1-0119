'use strict';

function Game(canvas, gameEndedHandler) {
    this.ctx = canvas.getContext('2d');
    this.player = new Player(canvas);
    this.enemies = [];
    this.animation;
    this.gameEndedHandler = gameEndedHandler;

    this._clearCanvas = function() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    this._drawCanvas = function() {
        this.player.draw();
        this.enemies.forEach(function(enemy) {
            enemy.draw();
        })
    }

    this._updateGame = function() {
        // Updates player
        this.player.update();

        // Randomly create new enemy, 2% probability on every frame
        if (Math.random() > 0.98) {
            this._createEnemy();
        }

        // Prunes enemies outside the canvas
        this.enemies = this.enemies.filter(function(enemy) {
            return enemy.isInScreen();
        });

        // Updates enemies
        this.enemies.forEach(function(enemy) {
            enemy.update();

            // check if player collided with enemy
            if (this.player.checkCollideWithEnemy(enemy)) {
                this.player.loseLife();
                enemy.die();
            }
        }.bind(this));
    }

    this._createEnemy = function() {
        var speed = Math.random() * 4 + 3;
        var y = Math.random() * canvas.height;

        this.enemies.push(new Enemy(canvas, y, speed));
    }
}

Game.prototype.start = function() {
    function loop() {
        this._updateGame();
        this._clearCanvas();
        this._drawCanvas();

        this.animation = window.requestAnimationFrame(loop.bind(this));

        // Check for game over
        if (this.player.isDead()) {
            // this.stop();
            this.gameEndedHandler();
            console.log('Game Over!');
        }
    }

    this.animation = window.requestAnimationFrame(loop.bind(this));
}

Game.prototype.stop = function () {
    window.cancelAnimationFrame(this.animation);
}

Game.prototype.keyUp = function() {
    this.player.setDirection('up');
}

Game.prototype.keyDown = function() {
    this.player.setDirection('down');
}