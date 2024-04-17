/*
This JavaScript file serves as a demonstration of if-else statements and the ternary operator in JavaScript.
It includes examples and explanations of how to use if-else statements and the ternary operator for conditional execution.
*/

// If-Else Statements

// 🚦 Example 1: Simple if-else statement
let temperature = 25;
if (temperature > 30) {
  console.log("It's hot outside!");
} else {
  console.log("It's not too hot outside.");
}

// 💼 Example 2: If-else if-else statement
let timeOfDay = "morning";
if (timeOfDay === "morning") {
  console.log("Good morning!");
} else if (timeOfDay === "afternoon") {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

// 📏 Example 3: Nested if-else statement
let age = 17;
let hasID = true;
if (age >= 18) {
  if (hasID) {
    console.log("You can enter the club.");
  } else {
    console.log("You need to bring your ID.");
  }
} else {
  console.log("You are too young to enter the club.");
}

// Ternary Operator

// 🔄 Example 4: Ternary Operator
let number = 10;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log("Number is:", result);

// Tasks:
// 😎 Write an if-else statement to check if 20.24 is positive, negative, or zero.
// 🌟 Write an if-else statement to check if a person aged 64.5 is eligible for a senior discount (age 65 or older).
// 🤔 Write a ternary operator to determine if 2023 is a leap year or not.
// 😄 Write an if-else statement to check if the password: "vmoaeASDF123421" meets these criterias:
//	- length > 8, contains uppercase, contains lowercase and contains special characters
// 🌈 Write an if-else statement to check if 25.01 is within 12 and 25
// 🦄 Write an if-else statement to determine if 2024 is a century year or not (ending with 00).
// 🎲 Write a ternary operator to determine if 532 is divisible by both 5 and 7.
