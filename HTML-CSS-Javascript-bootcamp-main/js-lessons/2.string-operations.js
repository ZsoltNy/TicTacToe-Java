/*
🔡 This JavaScript file serves as a demonstration of string operations in JavaScript.
It includes examples and explanations of how to manipulate strings using various operations.
*/

// String Operations

// ✂️ Example 1: Concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("Full Name:", fullName);

// 🔄 Example 2: String Length
let message = "Hello, World!";
let messageLength = message.length;
console.log("Message Length:", messageLength);

// 🔄 Example 3: Accessing Characters
let str = "JavaScript";
let firstChar = str[0];
let lastChar = str[str.length - 1];
console.log("First Character:", firstChar);
console.log("Last Character:", lastChar);

// ✏️ Example 4: Changing Case
let text = "Hello, World!";
let upperCaseText = text.toUpperCase();
let lowerCaseText = text.toLowerCase();
console.log("Uppercase Text:", upperCaseText);
console.log("Lowercase Text:", lowerCaseText);

// 😎 Write code to concatenate "Hello" and "World" with a space in between.
let concatenatedString = "Hello" + " " + "World";

// 📏 Write code to find the length of the string "Supercalifragilisticexpialidocious".
let stringLength = "Supercalifragilisticexpialidocious".length;

// 🤔 Write code to access the character 'r' in the string "Programming".
let charR = "Programming"[8];

// 😄 Write code to convert the string "openAI" to lowercase.
let lowercaseString = "openAI".toLowerCase();

// 🌈 Write code to check if the string "banana" contains the substring "nan".
let containsSubstring = "banana".includes("nan");

// 🦄 Write code to replace all occurrences of "apple" with "orange" in the string "I have an apple.".
let replacedString = "I have an apple.".replace(/apple/g, "orange");

// 🎲 Write code to extract the domain name from an email address "example@email.com".
let email = "example@email.com";
let domainName = email.split("@")[1];

// 🚀 Write code to count the number of vowels (a, e, i, o, u) in the string "JavaScript is awesome!".
let vowelCount = "JavaScript is awesome!".match(/[aeiou]/gi).length;
