"use strict";

function greet() {
  console.log(`Hello my name is ${this.name}`);
}

var person1 = {
  name: "Naoise",
  greet: greet
}

var person2 = {
  name: "Anna",
  greet: greet
}

// var person3 = person1;
// person3.name = "Axel";
// debugger;
// console.log(person3.name);
// console.log(person1.name);

var person3 = Object.create(person1);
person3.name = "Axel";
// debugger;
console.log(person3.name);
console.log(person1.name);

// ---------------

function createPerson(nameInput) {
  var person = {
    name: nameInput,
    greet: function() {
      console.log(`Hello my name is ${this.name}`);
    }
  };
  return person;
}

// function createPerson(nameInput) {
//   return {
//     name: nameInput,
//     greet: function() {
//       console.log(`Hello my name is ${this.name}`);
//     }
//   };
// }

var person4 = createPerson("Naoise");
// var person5 = createPerson("Anna");
// var person6 = createPerson("Franci");
// var person7 = createPerson("Axel");

// debugger;

// ---------------

function Person(name, ageInput) {
  var age = ageInput;

  // this.name = name === undefined ? "Pepito" : name;
  this.name = name || "Pepito";
  this.greet = function() {
    console.log(`Hello my name is ${this.name}`);
  }
}

var person8 = new Person("Naoise", 35);
var person9 = new Person("Franci");
var person10 = new Person("Anna");

// debugger;
// console.log(person8.name);
// console.log(person8.age);

// -----------

function Car(model, color) {
  this.model = model;
  this.color = color;
  this.speak = function() {
    console.log(`I am a ${this.color} ${this.model}`);
  }
}

Car.close = function() {
  console.log("Chip chip");
}

Car.prototype.start = function() {
  console.log("Brrrrrum");
}

var car1 = new Car("Ferrari Testa Rossa", "pink");

// debugger;
// car1.speak();
// car1.start();
// car1.close();

// -----------

// JavaScript types are also classes. They all inherit from Object.

// var array = [];
// var array = new Array();

// str.toUpperCase();
// String.prototype.toUpperCase()

// You can even overwrite their prototype!
String.prototype.sayMyName = function () {
  console.log("HEISENBERG!");
}
// "any string".sayMyName();

// -----------

function Vehicle(model) {
  this.model = model;
  this.numberOfWheels = 4;

  // Non-prototype method
  this.checkWheels = function() {
    console.log(`I have ${this.numberOfWheels} wheels`);
  }
}

// Prototype method
Vehicle.prototype.defineYourself = function () {
  console.log(`I am a ${this.model}`);
}

function Car(model, numWheels, color) {
  Vehicle.call(this, model); // super()

  this.color = color;
  this.numberOfWheels = numWheels;
}

// Inherit from Vehicle
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// Overwrite non-prototype method
Car.prototype.checkWheels = function () {
  console.log(`I am a car with ${this.numberOfWheels} wheels`);
}
// Overwrite prototype method
Car.prototype.defineYourself = function () {
  console.log(`I am a ${this.color} ${this.model}`);
}

var car1 = new Car("Volkswagen Clio", 4, "green");
// What will car1.checkWheels() log?
// What will car1.defineYourself() log?

// debugger;
