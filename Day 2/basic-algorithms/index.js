// Exercises from https://github.com/ironhack-labs/lab-javascript-basic-algorithms

// Names and Input (1 to 4)

var hacker1 = "Naoise";
console.log("The driver's name is " + hacker1);

var hacker2 = prompt("What is your name?");
console.log("The navigator's name is " + hacker2);

// Conditionals (5)

if (hacker1.length > hacker2.length) {
  // console.log("The Driver has the longest name, it has " + hacker1.length + " characters")
  console.log(`The Driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
  console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`)
} else {
  console.log(`wow, you both got equally long names, ${hacker2.length} characters!!`)
}

// Loops (6 to 8)

var upperCaseName = hacker1.toUpperCase();
var result = "";
for (var i = 0; i < upperCaseName.length; i++) {
  result += upperCaseName[i] + " ";
}
console.log(result);

var reverse = "";
for (var i = hacker2.length; i > 0; i--) {
  reverse += hacker2[i-1];
}
console.log(reverse);

// Alternative:
// var nameArray = hacker2.split("");
// console.log(nameArray.reverse().join(""));

var comparison = hacker1.localeCompare(hacker2);
if (comparison < 0) {
  console.log("The driver's name goes first");
} else if (comparison > 0) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}