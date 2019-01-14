function Viking(name, health, strength) {
    Soldier.call(this, name);

    this.health = health;
    this.strength = strength;
}

Viking.prototype.battleCry = function () {
    console.log('Arrr');
}

var v1 = new Viking("Thor", 3, 20);
// v1.battleCry in v1.__proto__.battleCry

// ------------

function Viking(name, health, strength) {
    Soldier.call(this, name);

    this.health = health;
    this.strength = strength;

    this.battleCry = function () {
        console.log('Arrr');
    }
}

var v1 = new Viking("Thor", 3, 20);
// v1.battleCry not in v1.__proto__.battleCry
// Much less efficient, check https://jsperf.com/prototype-vs-this

// ------------

// Also other problems related to inheritance:

function Soldier() {
    this.battleCry = function() {
        console.log('Soldier battlecry');
    }
}

function Viking() {
    Soldier.call(this);
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.battleCry = function() {
    console.log('Viking battlecry');
}

var v1 = new Viking();
v1.battleCry(); // "Soldier battlecry" (not "Viking battlecry")
