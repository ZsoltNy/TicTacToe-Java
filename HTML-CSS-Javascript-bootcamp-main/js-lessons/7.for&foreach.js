/*
🌀 This JavaScript file serves as a demonstration of for and forEach loops in JavaScript.
It includes examples and explanations of how to use these loops for iteration.
*/

// For Loops

// 🔁 Example 1: Basic for loop
for (let i = 0; i < 5; i++) {
  console.log("Iteration", i);
}

// 🎯 Example 2: For loop to iterate over an array
const colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log("Color at index", i, ":", colors[i]);
}

// 📚 Example 3: Nested for loop
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log("i:", i, "j:", j);
  }
}

// ForEach Loops

// 🔄 Example 4: forEach loop to iterate over an array
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
  console.log("Number:", number);
});

// 🎉 Example 5: forEach loop with index
const fruits_example = ["apple", "banana", "orange"];
fruits_example.forEach((fruit, index) => {
  console.log("Fruit at index", index, ":", fruit);
});

// 🌟 Example 6: Using forEach with arrow function
const logItem = (item) => {
  console.log("Item:", item);
};

const arr = [1, 2, 3];
arr.forEach(logItem);

// Tasks:
// 🧩 Write a for loop to print numbers from 10 to 1 in reverse order.
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 🚀 Write a forEach loop to iterate over the array ["apple", "banana", "cherry"] and print "I like <fruit>" for each fruit.
let fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit) => {
  console.log("I like " + fruit);
});

// 💡 Write a for loop to find the sum of numbers from 1 to 10.
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("Sum of numbers from 1 to 10:", sum);

// 🍕 Write a forEach loop to iterate over an array of your favorite foods and print each one.
let favoriteFoods = ["pizza", "sushi", "burger"];
favoriteFoods.forEach((food) => {
  console.log(food);
});

// 🎸 Write a for loop to iterate over a list of your favorite songs and print their names.
let favoriteSongs = [
  "Bohemian Rhapsody",
  "Stairway to Heaven",
  "Hotel California",
];
for (let i = 0; i < favoriteSongs.length; i++) {
  console.log(favoriteSongs[i]);
}

// 🏖️ Write a forEach loop to iterate over an array of holiday destinations and print "I want to visit <destination>".
let holidayDestinations = ["Paris", "Maldives", "Bora Bora"];
holidayDestinations.forEach((destination) => {
  console.log("I want to visit " + destination);
});

// 🎯 Write a for loop to iterate over an array of your friends' names and print "Happy birthday, <name>!".
let friendsNames = ["Alice", "Bob", "Charlie"];
for (let i = 0; i < friendsNames.length; i++) {
  console.log("Happy birthday, " + friendsNames[i] + "!");
}

// 🎵 Write a forEach loop to iterate over an array of music albums and print their titles.
let musicAlbums = ["Thriller", "Dark Side of the Moon", "Abbey Road"];
musicAlbums.forEach((album) => {
  console.log(album);
});
