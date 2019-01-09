"use strict";

// global scope vs local scope
var global = 'global';
var anotherGlobal = 'also global';

function anyFunction() {

  var global = "function scoped";
  // console.log(global);
  // console.log(anotherGlobal);
  // console.log(window.global);
  debugger;
  var scoped = "also function scoped";

  function scopedFunction() {
    console.log(global);
    console.log(scoped);
    global = "nested function scoped";
    window.global = "overwrite global";
    debugger;
  }

  debugger;
  scopedFunction();
}

debugger;

// variable hoisting

var declared = "value";

function anotherFunction() {
  // console.log(declared);
  debugger;
  var declared = "scoped value";
}

debugger;
anotherFunction();

// function hoisting

debugger;
function sayMyName(name) {
  console.log("My name is " + name);
}

var sayMyName2 = function(name) {
  console.log(`My name is ${name}`);
}

// Immediately-invoked function expression
// or
// Self-executing anonymous function
(function () {  
  // whatever I declare here is not in the global scope
})();
