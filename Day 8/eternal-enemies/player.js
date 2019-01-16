'use strict';

function Player(canvas, lives) {
    this.size = 50;
    this.x = 20;
    this.y = (canvas.height - this.size) / 2;
    this.direction = 0;
    this.speed = 5;
    this.lives = lives || 3;
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
}

Player.prototype.setDirection = function(direction) {
    if (direction === 'up') {
        this.direction = -1;
    } else if (direction === 'down') {
        this.direction = 1;
    }
}

Player.prototype.draw = function() {
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
}

Player.prototype.update = function() {
    this.y += this.direction * this.speed;

    // Fixes weird bug if keydown
    // this.y = Math.min(Math.max(0, this.y + this.direction * this.speed), this.canvas.height - this.size);

    // if (this.y <= 0) {
    //     // past the top
    //     this.setDirection('down');
    // } else if (this.y >= this.canvas.height - this.size) {
    //     // past the bottom
    //     this.setDirection('up');
    // }

    if ((this.y <= 0) || (this.y >= this.canvas.height - this.size)) {
        // past the top or the bottom
        this.direction *= -1;
    }
}

Player.prototype.checkCollideWithEnemy = function(enemy) {
    var collidesRight = this.x + this.size / 2 > enemy.x - enemy.size / 2;
    var collidesLeft = this.x - this.size / 2 < enemy.x + enemy.size / 2;
    var collidesTop = this.y - this.size / 2 < enemy.y + enemy.size / 2;
    var collideBottom = this.y + this.size / 2 > enemy.y - enemy.size / 2;

    return collidesRight && collidesLeft && collidesTop && collideBottom;
}

Player.prototype.loseLife = function() {
    this.lives--;
    console.log(`Player lives: ${this.lives}`);
}

Player.prototype.isDead = function() {
    return this.lives <= 0;
}