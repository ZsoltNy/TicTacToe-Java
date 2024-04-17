/*
📝 This JavaScript file serves as a demonstration of JavaScript functions.
It includes examples and explanations of commonly used function operations in JavaScript.
*/

// Functions
// 📋 Function Declaration
const greet = (name) => {
  console.log("Hello, " + name + "!");
};

// 🚀 Arrow Function declaration
const square = (x) => x * x;

// You could declare the above on line function as a multiline function as follows:
const square2 = (x) => {
  return x * x;
};

// 💡 Function Invocation
greet("Alice");

// 💼 Function with Return Value
console.log("Square of 5:", square(5));

// 🔄 Function with Default Parameters
function greetDefault(name = "World") {
  console.log("Hello, " + name + "!");
}

greetDefault(); // Output: Hello, World!

// 🔄 Function with Rest Parameter
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log("Sum of 1, 2, 3:", sum(1, 2, 3));

// 📝 Define a function called "double" that takes a number as an argument and returns its double.
function double(number) {
  return number * 2;
}

// 🔄 Define a function called "isEven" that takes a number as an argument and returns true if it's even, otherwise false.
function isEven(number) {
  return number % 2 === 0;
}

// 🚀 Write an arrow function called "cube" that takes a number as an argument and returns its cube.
const cube = (number) => number ** 3;

// 💡 Write a function called "getMax" that takes an array of numbers as an argument and returns the maximum number.
function getMax(numbers) {
  return Math.max(...numbers);
}

// 💼 Write a function called "calculateAverage" that takes an array of numbers as an argument and returns the average.
function calculateAverage(numbers) {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
}

// 🔄 Write a function called "capitalize" that takes a string as an argument and returns the capitalized version.
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// 🔄 Write a function called "reverseString" that takes a string as an argument and returns the reversed version.
function reverseString(string) {
  return string.split("").reverse().join("");
}

// 🚀 Write an arrow function called "isPalindrome" that takes a string as an argument and returns true if it's a palindrome, otherwise false.
const isPalindrome = (string) => string === reverseString(string);

// 💡 Write a function called "countVowels" that takes a string as an argument and returns the number of vowels.
function countVowels(string) {
  const vowels = string.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
}

// 💼 Write a function called "factorial" that takes a number as an argument and returns its factorial.
function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}
