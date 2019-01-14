var numbers = [1, 2, 3];
var foods = ["pizza", "sandwiches", "ice cream"];

// for(var i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

numbers.forEach(function(number, i) {
    console.log(number);
    // console.log(numbers[i]);
})

// Double values
var doubleNumbers = [];
numbers.forEach(function (number, i) {
    // console.log("Beetlejuice");
    // numbers[i] = number * 2;
    // numbers[i] *= 2;
    doubleNumbers.push(number * 2);
})
// console.log(numbers);
// console.log(doubleNumbers);

// ---------

var numbers = [1, 2, 3];
var tripleNumbers = numbers.map(function(number) {
    return number * 3;
});
// console.log(numbers);
// console.log(tripleNumbers);

// ---------

// Exercise
var foods = ["pizza", "sandwiches", "ice cream"];
var foodsUppercase = foods.map(function(food) {
    return food.toUpperCase();
});
console.log(foods);
console.log(foodsUppercase);

// ---------

var students = [
    { name: "Pedro", firstProject: 8, secondProject: 6 },
    { name: "Nico", firstProject: 8, secondProject: 6 },
    { name: "Matias", firstProject: 8, secondProject: 6 }
];

var finalGrades = students.map(function(student) {
    return (student.firstProject + student.secondProject + student.thirdProject) / 3;
});
console.log(finalGrades); // [7, 7, 7]

// ---------

var numbers = [1, 2, 3];
var addedNumbers = numbers.reduce(function(accumulator, number) {
    return accumulator + number;
});
var average = addedNumbers / numbers.length;

// ---------

// Exercise
var students = [
    { name: "Pedro", grades: [8, 6, 6] },
    { name: "Pedro", grades: [8, 6, 6] },
    { name: "Pedro", grades: [8, 6, 6] }
];
var finalGrades = students.map(function (student) {
    var addedGrades = student.grades.reduce(function (accum, grade) {
        return accum + grade;
    });
    var average = addedGrades / student.grades.length

    return average;
});
console.log(finalGrades); // [6.6666667, 6.6666667, 6.6666667]

// var finalGrades = [];
// for(student of students) {
//     var addedGrades = 0;
//     for(grade of student.grades) {
//         addedGrades += grade;
//     }
//     var average = finalGrades / student.grades.length;
//     finalGrades.push(average);
// }
// console.log(finalGrades);

// ---------

var numbers = [1, 2, 3, 4, 5, 6];
var oddNumbers = numbers.filter(function(number) {
    return number % 2 === 1;
});
var evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log(oddNumbers); [1, 3, 5];
console.log(evenNumbers); [2, 4, 6];

// ---------

var numbers = [2, 4, 9, 3, 1, 8, 7, 5, 11, 13, 24];
numbers.sort();
console.log(numbers);
// [1, 11, 13, 2, 24, 3, 4, 5, …]

numbers.sort(function(a, b) {
    // +1 -> a > b     / a - b > 0 -> swap 
    // -1 -> a < b     / a - b < 0 -> no swap
    // 0 -> a === b    / a - b === 0 -> no swap

    return (a - b);
});
console.log(numbers);
// [1, 2, 3, 4, 5, 7, 8, 9, …]

// ---------

var words = ["Hello", "Goodbye", "First", "A", "a", "Second", "Third"];
words.sort();

words.sort(function(a, b) {
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
    }

    if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
    }

    return 0;
});

// ---------

var reversedNumbers = [];
// numbers.forEach(function(number, index) {
//     reversedNumbers.push(numbers[numbers.length - index]);
// })
// console.log(reversedNumbers);

// numbers.reverse();
var reversedNumbers = numbers.reverse();

console.log(numbers);
console.log(reversedNumbers);

// ---------

var words = ["Hello", "Goodbye", "First", "A", "a", "Second", "Third"];
words.splice(3, 2, "Apple", "apple");
