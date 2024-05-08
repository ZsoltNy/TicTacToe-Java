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
let number = 5;
let factorial = 1;
while (number > 1) {
  factorial *= number;
  number--;
}
console.log("Factorial of 5:", factorial);

// 🚗 Write a do-while loop to simulate a car racing game until one of the cars reaches 1000 meters.
let car1Distance = 0;
let car2Distance = 0;
do {
  car1Distance += Math.floor(Math.random() * 100) + 1; // Random distance for car 1
  car2Distance += Math.floor(Math.random() * 100) + 1; // Random distance for car 2
} while (car1Distance < 1000 && car2Distance < 1000);
console.log("Car 1 distance:", car1Distance);
console.log("Car 2 distance:", car2Distance);

// 📊 Write a while loop to calculate the sum of the digits of a given number.
let num = 1234;
let sum = 0;
while (num > 0) {
  sum += num % 10;
  num = Math.floor(num / 10);
}
console.log("Sum of digits:", sum);

// 🔍 Write a while loop to search for the first occurrence of the letter 'e' in the string "elephant" and print its index.
let word = "elephant";
let index = 0;
while (index < word.length) {
  if (word[index] === "e") {
    console.log("Index of 'e':", index);
    break;
  }
  index++;
}

// 🏆 Write a do-while loop to simulate a lottery game with random numbers until the user wins by matching all numbers.
let winningNumbers = [3, 7, 12, 19, 25];
let userNumbers;
let match = false;
do {
  userNumbers = [
    Math.floor(Math.random() * 20) + 1,
    Math.floor(Math.random() * 20) + 1,
    Math.floor(Math.random() * 20) + 1,
    Math.floor(Math.random() * 20) + 1,
    Math.floor(Math.random() * 20) + 1,
  ];
  match = true;
  for (let i = 0; i < winningNumbers.length; i++) {
    if (winningNumbers[i] !== userNumbers[i]) {
      match = false;
      break;
    }
  }
} while (!match);
console.log("You won! Numbers:", userNumbers);
