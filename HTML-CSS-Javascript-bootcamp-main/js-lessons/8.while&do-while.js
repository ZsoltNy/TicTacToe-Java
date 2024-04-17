/*
🔄 This JavaScript file serves as a demonstration of while and do-while loops in JavaScript.
It includes examples and explanations of how to use while and do-while loops for iterative execution.
*/

// While Loop

// 🚀 Example 1: Simple while loop to count from 1 to 5
let count = 1;
while (count <= 5) {
  console.log("Count is:", count);
  count++;
}

// 🎯 Example 2: While loop to find the first power of 2 greater than 100
let powerOfTwo = 1;
while (powerOfTwo <= 100) {
  powerOfTwo *= 2;
}
console.log("First power of 2 greater than 100:", powerOfTwo);

// 📦 Example 3: While loop to iterate over elements of an array
let colors = ["red", "green", "blue", "yellow"];
let i = 0;
while (i < colors.length) {
  console.log("Color is:", colors[i]);
  i++;
}

// Do-While Loop

// 🔄 Example 4: Simple do-while loop to greet 5 times
let greetingCount = 0;
do {
  console.log("Hello, world!");
  greetingCount++;
} while (greetingCount < 5);

// 🧩 Example 5: Do-while loop to generate a random number until it's divisible by 7
let randomNumber;
do {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);
} while (randomNumber % 7 !== 0);
console.log("Random number divisible by 7:", randomNumber);

// Tasks:
// 💡 Write a while loop to calculate the factorial of 5.
// 🚗 Write a do-while loop to simulate a car racing game until one of the cars reaches 1000 meters.
// 📊 Write a while loop to calculate the sum of the digits of a given number.
// 🔍 Write a while loop to search for the first occurrence of the letter 'e' in the string "elephant" and print its index.
// 🏆 Write a do-while loop to simulate a lottery game with random numbers until the user wins by matching all numbers.