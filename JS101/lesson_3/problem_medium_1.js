import { text } from "node:stream/consumers";

// Question 1
let text1 = "The Flintstones Rock!";
let count = 0;
do {
  console.log(text1);
  text1 = " " + text1;
  count++;
} while (count < 10);

// Question 2
let munstersDescription = "The Munsters are creepy and spooky.";
console.log(munstersDescription.split(""
).map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join("")
)

// Question 3
function factors(number) {
  let divisor = number;
  let factors = [];

  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

// Question 4

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement); // mutates the array
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement); // does not mutate
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

// Question 5
console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);

// Question 6
let nanArray = [NaN];

console.log(nanArray[0] === NaN); // false

// Question 7
let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8); // 34

// Question 8
let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

// Question 10
function foo(param="no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}
console.log(bar(foo())) // "no"

