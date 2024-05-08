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
const favoriteMovies = [
  "Inception",
  "The Dark Knight",
  "Interstellar",
  "Pulp Fiction",
];
console.log("Original favorite movies:", favoriteMovies);
favoriteMovies.sort();
console.log("Sorted favorite movies (alphabetical):", favoriteMovies);

// 🍔 Sort the list of your favorite foods by the length of their names (shortest to longest).
const favoriteFoods = ["pizza", "sushi", "burger", "tacos"];
console.log("Original favorite foods:", favoriteFoods);
favoriteFoods.sort((a, b) => a.length - b.length);
console.log(
  "Sorted favorite foods by name length (shortest to longest):",
  favoriteFoods
);

// 🎶 Sort a list of your favorite songs by their release year (oldest to newest).
const favoriteSongs = [
  { title: "Bohemian Rhapsody", year: 1975 },
  { title: "Hotel California", year: 1976 },
  { title: "Smells Like Teen Spirit", year: 1991 },
];
console.log("Original favorite songs:", favoriteSongs);
favoriteSongs.sort((a, b) => a.year - b.year);
console.log(
  "Sorted favorite songs by release year (oldest to newest):",
  favoriteSongs
);

// 🎨 Sort a list of paintings by the artist's last name.
const paintings = [
  { title: "Starry Night", artist: "Vincent van Gogh" },
  { title: "Mona Lisa", artist: "Leonardo da Vinci" },
  { title: "The Persistence of Memory", artist: "Salvador Dali" },
];
console.log("Original paintings:", paintings);
paintings.sort((a, b) => {
  const lastNameA = a.artist.split(" ")[1];
  const lastNameB = b.artist.split(" ")[1];
  return lastNameA.localeCompare(lastNameB);
});
console.log("Sorted paintings by artist's last name:", paintings);

// 🌳 Sort a list of trees by their height (tallest to shortest).
const trees = [
  { name: "Redwood", height: 300 },
  { name: "Sequoia", height: 250 },
  { name: "Oak", height: 20 },
];
console.log("Original trees:", trees);
trees.sort((a, b) => b.height - a.height);
console.log("Sorted trees by height (tallest to shortest):", trees);

// 🖼️ Sort a list of art pieces by the value of their bids (highest to lowest).
const artPieces = [
  { name: "The Scream", bid: 150000 },
  { name: "Guernica", bid: 200000 },
  { name: "Mona Lisa", bid: 1000000 },
];
console.log("Original art pieces:", artPieces);
artPieces.sort((a, b) => b.bid - a.bid);
console.log("Sorted art pieces by bid value (highest to lowest):", artPieces);

// 🌐 Sort a list of countries by their population (most populous to least populous).
const countries = [
  { name: "China", population: 1444216107 },
  { name: "India", population: 1393409038 },
  { name: "United States", population: 331002651 },
];
console.log("Original countries:", countries);
countries.sort((a, b) => b.population - a.population);
console.log(
  "Sorted countries by population (most populous to least populous):",
  countries
);

// 📅 Sort a list of events by their start date.
const events = [
  { name: "Conference", startDate: "2024-05-15" },
  { name: "Workshop", startDate: "2024-06-10" },
  { name: "Seminar", startDate: "2024-04-20" },
];
console.log("Original events:", events);
events.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
console.log("Sorted events by start date:", events);
