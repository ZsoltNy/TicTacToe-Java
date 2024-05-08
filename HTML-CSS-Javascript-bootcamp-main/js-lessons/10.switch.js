/*
🔀 This JavaScript file serves as a demonstration of the switch statement in JavaScript.
It includes examples and explanations of how to use the switch statement for multi-way branching.
*/

// Switch Statement

// 🛤️ Example 1: Simple switch statement to determine the day of the week
let day = 3;
let dayName;
switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}
console.log("Day of the week:", dayName);

// Tasks:
// 🎨 Write a switch statement to determine the type of a given geometric shape ("circle", "square", "triangle", "rectangle").
let shape = "circle";
switch (shape) {
  case "circle":
    console.log("This is a circle.");
    break;
  case "square":
    console.log("This is a square.");
    break;
  case "triangle":
    console.log("This is a triangle.");
    break;
  case "rectangle":
    console.log("This is a rectangle.");
    break;
  default:
    console.log("Unknown shape.");
}

// 🚗 Write a switch statement to determine the type of a vehicle based on its fuel type ("gasoline", "diesel", "electric", "hybrid").
let fuelType = "electric";
switch (fuelType) {
  case "gasoline":
    console.log("This is a gasoline vehicle.");
    break;
  case "diesel":
    console.log("This is a diesel vehicle.");
    break;
  case "electric":
    console.log("This is an electric vehicle.");
    break;
  case "hybrid":
    console.log("This is a hybrid vehicle.");
    break;
  default:
    console.log("Unknown fuel type.");
}

// 🎵 Write a switch statement to determine the genre of a song ("pop", "rock", "hip-hop", "jazz", "country").
let songGenre = "rock";
switch (songGenre) {
  case "pop":
    console.log("This is a pop song.");
    break;
  case "rock":
    console.log("This is a rock song.");
    break;
  case "hip-hop":
    console.log("This is a hip-hop song.");
    break;
  case "jazz":
    console.log("This is a jazz song.");
    break;
  case "country":
    console.log("This is a country song.");
    break;
  default:
    console.log("Unknown genre.");
}

// 🎮 Write a switch statement to determine the platform of a video game ("PlayStation", "Xbox", "Nintendo", "PC").
let platform = "Nintendo";
switch (platform) {
  case "PlayStation":
    console.log("This game is available on PlayStation.");
    break;
  case "Xbox":
    console.log("This game is available on Xbox.");
    break;
  case "Nintendo":
    console.log("This game is available on Nintendo.");
    break;
  case "PC":
    console.log("This game is available on PC.");
    break;
  default:
    console.log("Unknown platform.");
}

// 📚 Write a switch statement to determine the category of a book ("fiction", "non-fiction", "fantasy", "mystery").
let bookCategory = "mystery";
switch (bookCategory) {
  case "fiction":
    console.log("This is a fiction book.");
    break;
  case "non-fiction":
    console.log("This is a non-fiction book.");
    break;
  case "fantasy":
    console.log("This is a fantasy book.");
    break;
  case "mystery":
    console.log("This is a mystery book.");
    break;
  default:
    console.log("Unknown category.");
}

// 📱 Make a simple calculator (+, -, /, *) using a switch statement
let operator = "+";
let num1 = 10;
let num2 = 5;
let result;
switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "/":
    result = num1 / num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  default:
    console.log("Invalid operator.");
}
console.log("Result:", result);
