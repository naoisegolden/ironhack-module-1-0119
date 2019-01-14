console.log("one line");

// setTimeout(callback, milliseconds);
setTimeout(function() {
    console.log("2 seconds have past");
}, 2000);

function oneSecHasPast() {
    console.log("1 second has past");
}
setInterval(oneSecHasPast, 1000);

console.log("another line");

// -------------

var myInterval = setInterval(function() {
    console.log("a second has past");
}, 1000);

setTimeout(function() {
    clearInterval(myInterval);
}, 5000);

// -------------

var timeoutId = setTimeout(function() {
    console.log("Three seconds have past");
}, 3000);

setTimeout(function() {
    clearTimeout(timeoutId);
}, 1000);


// Exercise: logs 10 seconds and then it logs "stop the timer".
// 1 seconds
// 2 seconds
// ...
// 9 seconds
// 10 seconds
// stop the timer

var seconds = 0;
var timer = setInterval(function () {
    seconds++;
    console.log(`${seconds} seconds`);
}, 1000);

setTimeout(function () {
    clearInterval(timer);
    console.log('stop timer');
}, 10000);

// ---------

var seconds = 0;
var intervalId = setInterval(function () {
    seconds++;
    console.log(`${seconds} seconds`);

    if (seconds > 10) {
        clearInterval(intervalId);
        console.log('stop timer');
    }
}, 1000);
