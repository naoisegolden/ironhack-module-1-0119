var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "#BADA55";
ctx.strokeStyle = "rgba(0, 0, 0, 0.5)";

function clearCanvas() {
    ctx.clearRect(0, 0, 500, 500);
};

function paintBox(x, y) {
    ctx.fillRect(x, y, 100, 100);
}

var img = new Image();
img.src = "./flappy.png";

function paintImage(x, y) {
    ctx.drawImage(img, x, y);
}

var x = 0;
var y = 0;
var speed = 5;

function updateCanvas() {
    time += 0.03;
    x = 50;
    y += speed;

    clearCanvas();
    // paintBox(x, y);
    paintImage(x, y);

    animationFrameId = window.requestAnimationFrame(updateCanvas)
}

// var intervalId;
var animationFrameId;

function start() {
    // intervalId = setInterval(updateCanvas, 1)
    animationFrameId = window.requestAnimationFrame(updateCanvas)
}

function stop() {
    // clearInterval(intervalId);
    window.cancelAnimationFrame(animationFrameId);
}

function canvasClicked() {
    console.log("Canvas clicked!");
    speed = -5;
}
canvas.addEventListener("click", canvasClicked);

function keyPressed(event) {
    switch(event.keyCode) {
        case 38: // arrow up
            speed = -5;
            break;
        case 40: // arrow down
            speed = 5;
            break;
        case 32: // space bar
            stop();
            break;
    }
}
document.addEventListener('keydown', keyPressed);

