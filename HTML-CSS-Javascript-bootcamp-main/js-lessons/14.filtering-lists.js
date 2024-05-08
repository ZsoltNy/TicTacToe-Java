/*
🔍 This JavaScript file serves as a demonstration of list filtering in JavaScript.
It includes examples and explanations of how to use array.filter() method to filter lists based on certain criteria.
*/

// List Filtering

// 🎯 Example 1: Filter even numbers from a list
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// 📌 Example 2: Filter names starting with 'J' from a list
const names = ["John", "Alice", "James", "Jessica", "Bob", "Jenny"];
const jNames = names.filter((name) => name.startsWith("J"));
console.log("Names starting with 'J':", jNames);

// 🍎 Example 3: Filter fruits with 'apple' in their name from a list
const fruits = ["apple", "banana", "orange", "grape", "apple pie", "pineapple"];
const appleFruits = fruits.filter((fruit) => fruit.includes("apple"));
console.log("Fruits with 'apple':", appleFruits);

// 🌟 Example 4: Filter students who passed the exam (grade >= 50) from a list of scores
const examScores = [65, 30, 80, 45, 90, 55];
const passedStudents = examScores.filter((score) => score >= 50);
console.log("Passed students:", passedStudents);

// Tasks:
// 🤓 Filter numbers greater than 100 from the list: [99, 101, 56, 200, 89, 120]
const numbersList = [99, 101, 56, 200, 89, 120];
const filteredNumbers = numbersList.filter((number) => number > 100);
console.log("Numbers greater than 100:", filteredNumbers);

// 😊 Filter words with more than 5 characters from the list: ["apple", "banana", "kiwi", "grapefruit", "orange", "pear"]
const wordsList = ["apple", "banana", "kiwi", "grapefruit", "orange", "pear"];
const filteredWords = wordsList.filter((word) => word.length > 5);
console.log("Words with more than 5 characters:", filteredWords);

// 🚗 Filter cars with a mileage of less than 50000 from the list of objects: [{ brand: "Toyota", mileage: 60000 }, { brand: "Ford", mileage: 45000 }, { brand: "Honda", mileage: 30000 }]
const carsList = [
  { brand: "Toyota", mileage: 60000 },
  { brand: "Ford", mileage: 45000 },
  { brand: "Honda", mileage: 30000 },
];
const filteredCars = carsList.filter((car) => car.mileage < 50000);
console.log("Cars with mileage less than 50000:", filteredCars);

// 💡 Filter movies released after 2015 from the list of objects: [{ title: "Inception", year: 2010 }, { title: "Interstellar", year: 2014 }, { title: "La La Land", year: 2016 }, { title: "The Martian", year: 2015 }]
const moviesList = [
  { title: "Inception", year: 2010 },
  { title: "Interstellar", year: 2014 },
  { title: "La La Land", year: 2016 },
  { title: "The Martian", year: 2015 },
];
const filteredMovies = moviesList.filter((movie) => movie.year > 2015);
console.log("Movies released after 2015:", filteredMovies);

// 🎵 Filter songs with 'love' in their title from the list of objects: [{ title: "Love Story", artist: "Taylor Swift" }, { title: "Shape of You", artist: "Ed Sheeran" }, { title: "Roar", artist: "Katy Perry" }]
const songsList = [
  { title: "Love Story", artist: "Taylor Swift" },
  { title: "Shape of You", artist: "Ed Sheeran" },
  { title: "Roar", artist: "Katy Perry" },
];
const filteredSongs = songsList.filter((song) => song.title.includes("Love"));
console.log("Songs with 'love' in their title:", filteredSongs);

// 💼 Filter employees with salaries greater than $50000 from the list of objects: [{ name: "Alice", salary: 60000 }, { name: "Bob", salary: 45000 }, { name: "Charlie", salary: 75000 }]
const employeesList = [
  { name: "Alice", salary: 60000 },
  { name: "Bob", salary: 45000 },
  { name: "Charlie", salary: 75000 },
];
const filteredEmployees = employeesList.filter(
  (employee) => employee.salary > 50000
);
console.log("Employees with salaries greater than $50000:", filteredEmployees);

// 🚀 Filter rockets with a launch date before 2000 from the list of objects: [{ name: "Falcon Heavy", launchDate: 2018 }, { name: "Saturn V", launchDate: 1967 }, { name: "SpaceX Starship", launchDate: 2020 }]
const rocketsList = [
  { name: "Falcon Heavy", launchDate: 2018 },
  { name: "Saturn V", launchDate: 1967 },
  { name: "SpaceX Starship", launchDate: 2020 },
];
const filteredRockets = rocketsList.filter(
  (rocket) => rocket.launchDate < 2000
);
console.log("Rockets launched before 2000:", filteredRockets);

// 🍕 Filter pizza toppings containing 'cheese' from the list: ["pepperoni", "mushroom", "extra cheese", "onion", "bell pepper"]
const pizzaToppingsList = [
  "pepperoni",
  "mushroom",
  "extra cheese",
  "onion",
  "bell pepper",
];
const filteredPizzaToppings = pizzaToppingsList.filter((topping) =>
  topping.includes("cheese")
);
console.log("Pizza toppings containing 'cheese':", filteredPizzaToppings);
