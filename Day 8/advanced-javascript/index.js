var obj1 = {
    name: "Naoise",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

function outsideGreet(isExcited, myName) {
    console.log(`Hello ${myName}, my name is ${this.name}${isExcited ? "!!" : ""}`);
}

var obj2 = {
    name: "Breogan"
};

obj1.greet();
outsideGreet(true);
outsideGreet.call(obj2, true, "Donald");
outsideGreet.apply(obj2, [true, "Donald"]); // 'a' for apply and for array

function someFunction() {
    console.log(arguments);
    outsideGreet.apply(obj2, arguments)
}
someFunction();
someFunction(true);
someFunction(true, "Donald");

var obj2Greet = outsideGreet.bind(obj2);
obj2Greet(true, "Donald");

// ---------------

// Super common to have to bind(this) to async callbacks/handlers

class Chronometer {
    constructor() {
        this.seconds = 0;
    }
    startTimer() {
        // var self;
        setTimeout(function() {
            debugger; // what is `this`?

            // self.seconds++;
            this.seconds++;
        }.bind(this), 1000);
    }
}

var chronometer = new Chronometer();
chronometer.startTimer();