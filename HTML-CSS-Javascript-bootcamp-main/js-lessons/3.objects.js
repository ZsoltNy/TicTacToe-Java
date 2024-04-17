/*
🌟 This JavaScript file serves as a demonstration of objects in JavaScript.
It includes examples and explanations of how to create and manipulate objects.
*/

// Objects

// 🎨 Example 1: Creating an object
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  color: "blue",
  isElectric: false,
};

console.log("Car details:", car);

// 🏠 Example 2: Accessing object properties
console.log("Car brand:", car.brand);
console.log("Car model:", car["model"]);

// 🔄 Example 3: Modifying object properties
car.color = "red";
console.log("Updated car details:", car);

// ➕ Example 4: Adding new properties to an object
car.price = 25000;
console.log("Car with price:", car);

// ✂️ Example 5: Deleting properties from an object
delete car.isElectric;
console.log("Car without electric property:", car);

// 🚗 Create an object representing your dream car.
let dreamCar = {
  make: "Ford",
  model: "Mustang",
  color: "black",
  year: 1967,
  fuelType: "gas",
};

// 🚥 Access and print the color of your dream car.
console.log("Color of dream car:", dreamCar.color);

// 🛣️ Modify the year of your dream car to 2025.
dreamCar.year = 2025;

// 🌟 Add a new property to your dream car object representing its horsepower.
dreamCar.horsepower = 500;

// 🏎️ Delete the property representing the fuel type from your dream car object.
delete dreamCar.fuelType;

// 🚦 Create an object representing your favorite book with properties for title, author, and number of pages.
let favoriteBook = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  pages: 281,
};

// 📚 Access and print the title of your favorite book.
console.log("Death is my profession", favoriteBook.title);

// 📖 Modify the author of your favorite book to your favorite author.
favoriteBook.author = "Robert Merle";
