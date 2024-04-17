/*
⚠️ This JavaScript file serves as a demonstration of error handling in JavaScript.
It includes examples and explanations of how to handle errors using try-catch blocks and error objects.
*/

// Error Handling

// 🚨 Example 1: Handling errors with try-catch block
try {
  // Attempting to access an undefined variable
  console.log(undefinedVariable);
} catch (error) {
  console.error('Error caught:', error.message);
}

// 🚩 Example 2: Handling specific types of errors
try {
  // Attempting to execute an invalid operation
  throw new TypeError('Invalid operation');
} catch (error) {
  console.error('TypeError caught:', error.message);
}

// 🚧 Example 3: Rethrowing errors
function validateInput(input) {
  try {
    if (!input) {
      throw new Error('Input cannot be empty');
    }
    return input;
  } catch (error) {
    console.error('Validation error:', error.message);
    throw error; // Rethrow the error to propagate it further
  }
}

try {
  const userInput = validateInput('');
} catch (error) {
  console.error('Error after validation:', error.message);
}

// Tasks:
// 🛠️ Handle errors that may occur during data manipulation operations, such as dividing by zero.
// 🌐 Handle errors that may occur during network requests, such as server not responding or connection timeout.
// 📝 Write a try-catch block to handle errors when accessing properties of an undefined object.
// 🔄 Handle errors that may occur during iteration over an array, such as accessing an out-of-bounds index.
