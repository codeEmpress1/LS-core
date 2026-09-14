// Question 1
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

function isQuestion (str) {
  return str.endsWith('?');
}

console.log(isQuestion(str1));
console.log(isQuestion(str2));

// Question 2
function isQuestion2 (str) {
  return str[str.length - 1] === '?';
}

console.log(isQuestion2(str1));
console.log(isQuestion2(str2));

// Question 3
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
console.log(Object.keys(ages).includes('Spot'));

// Question 4
let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
console.log(
  munstersDescription[0].toUpperCase() + munstersDescription.slice(1).toLowerCase()
);

// Question 5
console.log(false == '0'); // true
console.log(false === '0'); // false

// Question 6
let ages2 = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };
console.log(Object.assign(ages2, additionalAges));

// Question 7
let str3 = "Few things in life are as important as house training your pet dinosaur.";
let str4 = "Fred and Wilma have a pet dinosaur named Dino.";
console.log(str3.includes('Dino'));
console.log(str4.includes('Dino'));

// Question 8
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
let flinstone2 = flintstones.push("Dino");

// Question 9
let flinstone3 = flintstones.push("Dino", "Hoppy");

// Question 10
let advice = "Few things in life are as important as house training your pet dinosaur.";
console.log(advice.slice(0, advice.indexOf('house')));