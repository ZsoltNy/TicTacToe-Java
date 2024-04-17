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
// 🚗 Write a switch statement to determine the type of a vehicle based on its fuel type ("gasoline", "diesel", "electric", "hybrid").
// 🎵 Write a switch statement to determine the genre of a song ("pop", "rock", "hip-hop", "jazz", "country").
// 🎮 Write a switch statement to determine the platform of a video game ("PlayStation", "Xbox", "Nintendo", "PC").
// 📚 Write a switch statement to determine the category of a book ("fiction", "non-fiction", "fantasy", "mystery").
// 📱 Make a simple calculator (+, -, /, *) using a switch statement