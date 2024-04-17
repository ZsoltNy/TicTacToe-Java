/*
📦 This JavaScript file serves as a demonstration of arrays in JavaScript.
It includes examples and explanations of how to use arrays to store and manipulate collections of data.
*/

// Array Declaration and Initialization

// 📋 Example 1: Declaration and initialization of an array
let fruits = ["apple", "banana", "orange", "mango"];
console.log("Fruits array:", fruits);

// 🧺 Example 2: Accessing elements of an array
console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);
console.log("Last fruit:", fruits[fruits.length - 1]);

// 🔄 Example 3: Modifying elements of an array
fruits[1] = "grape";
console.log("Modified fruits array:", fruits);

// Array Methods

// ➕ Example 4: Adding elements to the end of an array
fruits.push("strawberry");
console.log("Fruits after push:", fruits);

// ➖ Example 5: Removing elements from the end of an array
let removedFruit = fruits.pop();
console.log("Fruits after pop:", fruits);
console.log("Removed fruit:", removedFruit);

// ➡️ Example 6: Adding elements to the beginning of an array
fruits.unshift("kiwi");
console.log("Fruits after unshift:", fruits);

// ⬅️ Example 7: Removing elements from the beginning of an array
let shiftedFruit = fruits.shift();
console.log("Fruits after shift:", fruits);
console.log("Shifted fruit:", shiftedFruit);

// 🔁 Example 8: Reversing the order of elements in an array
let reversedFruits = fruits.reverse();
console.log("Reversed fruits array:", reversedFruits);

// 🔄 Example 9: Concatenating arrays
let moreFruits = ["pear", "pineapple"];
let allFruits = fruits.concat(moreFruits);
console.log("All fruits array:", allFruits);

// Tasks:
// 🍴 Create an array containing your favorite food items and print it.
// 🛒 Add a new food item to your array and print the updated array.
// 🥢 Remove the third food item from your array and print the updated array.
// 🥤 Create an array containing your favorite drinks and concatenate it with your food array. Print the resulting array.
// 🍽️ Reverse the order of elements in your food array and print it.
// 🍳 Remove the last element from your food array and print both the updated array and the removed element.
// 🍦 Remove the first element from your drinks array and print both the updated array and the removed element.
// 🎂 Check if "pizza" is included in your food array and print the result.
