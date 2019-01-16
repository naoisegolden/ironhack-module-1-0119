'use strict';

function startGame() {
    // Initialize instances, variables and auxiliary functions
    var canvas = document.getElementById('canvas');
    var game = new Game(canvas);
    var onKeyDown = function (event) {
        switch (event.keyCode) {
            case 38: game.keyUp(); break;
            case 40: game.keyDown(); break;
        }
    }

    // Add event listeners
    document.addEventListener('keyup', onKeyDown);

    // Start the game
    game.start();
}

window.addEventListener('load', startGame);