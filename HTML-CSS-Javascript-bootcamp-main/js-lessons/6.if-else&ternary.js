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
let result = number % 2 === 0 ? "Even" : "Odd";
console.log("Number is:", result);

// 😎 Write an if-else statement to check if 20.24 is positive, negative, or zero.
let number1 = 20.24;
if (number1 > 0) {
  console.log("Positive");
} else if (number1 < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// 🌟 Write an if-else statement to check if a person aged 64.5 is eligible for a senior discount (age 65 or older).
let age = 64.5;
if (age >= 65) {
  console.log("Eligible for senior discount");
} else {
  console.log("Not eligible for senior discount");
}

// 🤔 Write a ternary operator to determine if 2023 is a leap year or not.
let year = 2023;
let isLeapYear =
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? "Leap year"
    : "Not a leap year";
console.log(isLeapYear);

// 😄 Write an if-else statement to check if the password: "vmoaeASDF123421" meets these criterias:
//  - length > 8, contains uppercase, contains lowercase and contains special characters
let password = "vmoaeASDF123421";
let containsUppercase = /[A-Z]/.test(password);
let containsLowercase = /[a-z]/.test(password);
let containsSpecialChar = /[^A-Za-z0-9]/.test(password);
if (
  password.length > 8 &&
  containsUppercase &&
  containsLowercase &&
  containsSpecialChar
) {
  console.log("Password meets criteria");
} else {
  console.log("Password does not meet criteria");
}

// 🌈 Write an if-else statement to check if 25.01 is within 12 and 25
let number2 = 25.01;
if (number2 >= 12 && number2 <= 25) {
  console.log("Within range");
} else {
  console.log("Not within range");
}

// 🦄 Write an if-else statement to determine if 2024 is a century year or not (ending with 00).
let year2 = 2024;
if (year2 % 100 === 0) {
  console.log("Century year");
} else {
  console.log("Not a century year");
}

// 🎲 Write a ternary operator to determine if 532 is divisible by both 5 and 7.
let number3 = 532;
let isDivisible =
  number3 % 5 === 0 && number3 % 7 === 0 ? "Divisible" : "Not divisible";
console.log(isDivisible);
