// Question 1
let advice = "Few things in life are as important as house training your pet dinosaur.";
console.log(advice.replaceAll('important', 'urgent'));

// Question 2
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.slice().reverse());
console.log(numbers);
console.log([...numbers].sort((a, b) => b - a));

// Question 3
let numbers_ = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true
console.log(numbers_.includes(number1))
console.log(numbers_.includes(number2))


// Question 4
let famousWords = "seven years ago...";
console.log("Four score and " + famousWords);
console.log(`Four score and ${famousWords}`);

// Question 5
// Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5]
console.log(numbers.splice(2, 1));
console.log(numbers)

// Question 6
let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);
console.log(flintstones.concat(["Barney", "Betty"], ["Bambam", "Pebbles"]))

// Question 7
let flintstones_ = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
for (let [key, value] of Object.entries(flintstones_)) {
 if (key === "Barney") {
  console.log([key, value])
 }
}

// Question 8
let numberArr = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
console.log(Array.isArray(numberArr))
console.log(Array.isArray(table))

// Question 9
let title = "Flintstone Family Members";
let spaces = Math.floor((40 - title.length)/2)
console.log(spaces)
console.log(title.padStart(title.length + spaces, " "))

// Question 10
// Write a one-line expression to count the number of lower-case t characters in each of the following strings:
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
console.log(statement1.split("").filter(char => char === "t").length)
console.log(statement2.split("").filter(char => char === "t").length)