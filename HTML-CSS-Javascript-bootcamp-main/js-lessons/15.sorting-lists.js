/*
🔤 This JavaScript file serves as a demonstration of sorting lists in JavaScript.
It includes examples and explanations of how to sort arrays using various methods.
*/

// Sorting Lists

// 🔄 Example 1: Sorting numbers in ascending order
const numbers = [5, 2, 9, 1, 7];
console.log("Original numbers:", numbers);
numbers.sort((a, b) => a - b);
console.log("Sorted numbers (ascending):", numbers);

// 🔄 Example 2: Sorting strings in alphabetical order
const fruits = ["apple", "orange", "banana", "grape"];
console.log("Original fruits:", fruits);
fruits.sort();
console.log("Sorted fruits (alphabetical):", fruits);

// 🔄 Example 3: Sorting objects by a specific property
const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 18 },
    { name: "Charlie", age: 22 },
];
console.log("Original students:", students);
students.sort((a, b) => a.age - b.age);
console.log("Sorted students by age:", students);

// 🔄 Example 4: Sorting objects by a specific property in descending order
const books = [
    { title: "JavaScript Basics", pages: 150 },
    { title: "HTML & CSS Essentials", pages: 200 },
    { title: "Python for Beginners", pages: 180 },
];
console.log("Original books:", books);
books.sort((a, b) => b.pages - a.pages);
console.log("Sorted books by pages (descending):", books);

// Tasks:
// 📚 Sort the list of your favorite movies alphabetically.
// 🍔 Sort the list of your favorite foods by the length of their names (shortest to longest).
// 🎶 Sort a list of your favorite songs by their release year (oldest to newest).
// 🎨 Sort a list of paintings by the artist's last name.
// 🌳 Sort a list of trees by their height (tallest to shortest).
// 🖼️ Sort a list of art pieces by the value of their bids (highest to lowest).
// 🌐 Sort a list of countries by their population (most populous to least populous).
// 📅 Sort a list of events by their start date.
