// Question 1
let numbers = [1, 2, 3, 4];
// while (numbers.length > 0) {
//   console.log(numbers)
//   numbers.shift()
// }

// for (let i = 0; i > numbers.length, i++;) {
//   numbers.pop()
// }

// numbers.length = 0
// numbers.splice(0)
console.log(numbers)

// Question 2
console.log([1, 2, 3] + [4, 5]); //1,2,34,5

// Question 3
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1); // "hello there"

// Question 4
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1); // [{ first: "42" }, { second: "value2" }, 3, 4, 5]

// Question 5
function isColorValid(color) {
  return (color === "blue" || color === "green");
}
const isColorValid2 = color => (color === "blue" || color === "green");

// Question 6
let arr = [1, 2, 3];
let newArr = arr;

const num = arr[0];
let newNum = num;

function double(num) {
  return num * 2;
}

double(newNum);
// varibale -- arr, newArr, num, newNum, double, num
// primitives -- 1, 2, 3, 0, num, num, newNum, 2, newNum
// objects -- arr, newArr, double