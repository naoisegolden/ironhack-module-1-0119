'use strict';

function startGame() {
    // Variables and auxiliary functions
    var canvas = document.getElementById('canvas');
    var gameEnded = function () {
        game.stop();
        showGameScreen();
    }
    var onKeyDown = function (event) {
        switch (event.keyCode) {
            case 38: game.keyUp(); break;
            case 40: game.keyDown(); break;
        }
    }


    // Instance of game
    var game = new Game(canvas, gameEnded);

    // Add event listeners
    document.addEventListener('keyup', onKeyDown);

    // Start the game
    game.start();
}

window.addEventListener('load', startGame);