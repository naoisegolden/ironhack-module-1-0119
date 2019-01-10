"use strict";

var array = [1, "H", true];

var object = {
  // "key: value" pairs
  foo: "bar"
}

var person = {
  name: "Naoise",
  isMarried: false,
  weight: 60,
  age: 35,
  gender: "male",
  greet: function(){
    console.log('Hello, my name is ' + this.name + " and i am " + this.age + " years old");
  }
}
// `this` is the object that calls the function
// "key" is not a function -> "property"
// "key" is a function -> "method"

//var key = prompt("What property do you want to see?");
// debugger;
//console.log(person.key);
//console.log(person[key]);

// --------------------------------------
// Coding exercise
// https://codepen.io/tawebbcn/pen/dggwBJ

// Pick a penguin from Wikipedia's List of Fictional Penguins and create an object named myPenguin with properties that represent the information listed in each column on that Wikipedia page (for example: the character's name, origin, and author).
var myPenguin = {
  character: "Kowalski",
  origin: "Madagascar",
  notes: "A crafty group of penguins who try to escape the zoo to go back to Antarctica. The penguins got their own TV series and also a movie."
}
// Use console.log() to print the penguin's name to the console as part of a welcome message, like "Hello, I'm a penguin and my name is [NAME HERE]!"
console.log(`Hello, I'm a penguin and my name is ${myPenguin.character}!`)

// Write another line of code that adds a new property to your penguin called canFly and set it to false. (Note: Don't modify your penguin-creation code that you wrote above! Do this step in a separate line of code.)
myPenguin.canFly = false;

// Add a method to your penguin called chirp that prints to the console: "CHIRP CHIRP! Is this what penguins sound like?" (Note: Again, don't modify your previous code! Do this step by writing a new line of code.)
myPenguin.chirp = function () { console.log("CHIRP CHIRP! Is this what penguins sound like?"); }

// Add another method to your penguin called sayHello that prints to the console the same message from step 20 above. But this time, be sure to use the mystical, magical, all-powerful this keyword to access your penguin's name, so that way the sayHello method could potentially work for any penguin that has a name!
myPenguin.sayHello = function () { 
  console.log(`CHIRP CHIRP! My name is ${this.character.toUpperCase()}!`); 
}

// Next, call your penguin's sayHello() method and make sure that it works! (Hint: if you need an example of what it looks like when you call a method of an object, look at console.log() -- that's how you call the log() method of the console object!)
myPenguin.sayHello();

// Without modifying any of your previous code, change the penguin's name to "Penguin McPenguinFace" and then call your penguin's sayHello() function one more time to make sure it still works.
myPenguin.character = "Penguin McPenguinFace";
myPenguin.sayHello();

// Write another method called fly, and inside that method, use an if / else statement to print "I can fly!" to the console if your penguin's canFly property is true, or "No flying for me!" if its canFly property is false.
//Hint: Remember to use the very handy this keyword to access the object that your new method is currently attached to!
myPenguin.fly = function () { console.log(this.canFly ? "I can fly!" : "No flying for me!"); }

// Call your penguin's fly() method and make sure it works!
myPenguin.fly();

// Change the canFly property to true -- again, without modifying any of your previous code!
myPenguin.canFly = true;

// Now call your penguin's fly() method again and make sure it works as expected!
myPenguin.fly();

// Write a for ... in loop to print each key to the console. (Hint: See this page for an example of this special type of loop.)
for (var key in myPenguin) {
  console.log(key);
}

// Write another for ... in loop to print the value of each key to the console. (Hint: You'll need to use bracket notation to access the values this way, instead of dot notation!)
for (var key in myPenguin) {
  console.log(myPenguin[key].toString());
}


// --------------------------------------


var person2 = {
  name: ["Breogan Naoise", "Golden Santos"]
}
// console.log(person2.name.join(" "));
// console.log(person2.name[0] + " " + person2.name[1]));

var person3 = {
  name: {
    first: "Breogan Naoise",
    last: "Golden Santos"
  }
}
// console.log(person2.name.first + " " + person2.name.last));


// --------------------------------------
// Coding exercise
// https://codepen.io/tawebbcn/pen/eLbppm


var schoolSystem = {
  schools: [
    {
      name: "Fake School 1",
      classRooms: [
        {
          teacher: { firstName: 'Marcelino', lastName: 'Padberg', age: 25 },
          students: [
            { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
            { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
            { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
            { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
            { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 }
          ]
        },
        {
          teacher: { firstName: 'Edwardo', lastName: 'Schowalter', age: 28 },
          students: [
            { firstName: 'Manley', lastName: 'Doyle', age: 18 },
            { firstName: 'Maximilian', lastName: 'Gleichner', age: 19 },
            { firstName: 'Sid', lastName: 'Rohan', age: 30 },
            { firstName: 'Catalina', lastName: 'Hilpert', age: 27 },
            { firstName: 'Gerald', lastName: 'O\'Keefe', age: 26 }
          ]
        }
      ]
    },
    {
      name: "Fake School 2",
      classRooms: [
        {
          teacher: { firstName: 'Lucas', lastName: 'Schroeder', age: 29 },
          students: [
            { firstName: 'Giuseppe', lastName: 'Hegmann', age: 24 },
            { firstName: 'Jennyfer', lastName: 'Hane', age: 19 },
            { firstName: 'Mikayla', lastName: 'Braun', age: 23 },
            { firstName: 'Rickie', lastName: 'White', age: 22 },
            { firstName: 'Rose', lastName: 'Collins', age: 30 }
          ]
        },
        {
          teacher: { firstName: 'Green', lastName: 'Sauer', age: 25 },
          students: [
            { firstName: 'Melany', lastName: 'Welch', age: 25 },
            { firstName: 'Paxton', lastName: 'Corkery', age: 22 },
            { firstName: 'Nellie', lastName: 'Hauck', age: 26 },
            { firstName: 'Eunice', lastName: 'Hirthe', age: 26 },
            { firstName: 'Aylin', lastName: 'Barrows', age: 26 }
          ]
        }
      ]
    },
    {
      name: "Fake School 3",
      classRooms: [
        {
          teacher: { firstName: 'Nikko', lastName: 'Crist', age: 42 },
          students: [
            { firstName: 'Christop', lastName: 'Hahn', age: 26 },
            { firstName: 'Newell', lastName: 'Kemmer', age: 27 },
            { firstName: 'Katheryn', lastName: 'Heller', age: 26 },
            { firstName: 'Saul', lastName: 'Heathcote', age: 20 },
            { firstName: 'Maudie', lastName: 'Haley', age: 30 }
          ]
        },
        {
          teacher: { firstName: 'Nathanael', lastName: 'Hansson', age: 50 },
          students: [
            { firstName: 'Jensen', lastName: 'Reichel', age: 21 },
            { firstName: 'Lois', lastName: 'Kulas', age: 28 },
            { firstName: 'Caterina', lastName: 'Wolff', age: 28 },
            { firstName: 'Dahlia', lastName: 'Collier', age: 24 },
            { firstName: 'Linwood', lastName: 'Langosh', age: 26 }
          ]
        }
      ]
    }
  ]
};

// Add a student with name of Lucille D. Lozano to Fake School 2, in the first classroom.
schoolSystem.schools[1].classRooms[0].students.push({ firstName: 'Lucille D.', lastName: 'Lozano' });

// Retrieve the "Fake School 3" object
console.log(schoolSystem.schools[2]);

// Retrieve the teacher with the first name of "Nathanael"
console.log(schoolSystem.schools[2].classRooms[1].teacher);

// Retrieve the student with the first name of "Saul"
console.log(schoolSystem.schools[2].classRooms[0].students[3]);

// Result of console.log(schoolSystem.schools[1].name);
debugger;
console.log(schoolSystem.schools[1].name);

// Result of console.log(schoolSystem.schools[1]);
debugger;
console.log(schoolSystem.schools[1]);

// Result of console.log(schoolSystem.schools[1].classRooms[0]);
debugger;
console.log(schoolSystem.schools[1].classRooms[0]);

// Result of console.log(schoolSystem.schools[1].classRooms[0].students[1]);
debugger;
console.log(schoolSystem.schools[1].classRooms[0].students[1]);

// Result of console.log(schoolSystem.schools[1].classRooms[0].students[1].firstName);
debugger;
console.log(schoolSystem.schools[1].classRooms[0].students[1].firstName);
