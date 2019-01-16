'use strict';

function Enemy(canvas, y, speed) {
    this.x = canvas.width;
    this.y = y;
    this.size = 20;
    this.speed = speed;
    this.ctx = canvas.getContext('2d');
}

Enemy.prototype.draw = function() {
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
}

Enemy.prototype.update = function() {
    this.x -= this.speed;
}

Enemy.prototype.isInScreen = function() {
    return this.x + this.size >= 0;
}

Enemy.prototype.die = function() {
    this.x = -999;
}