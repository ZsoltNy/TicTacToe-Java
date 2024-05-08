/*
⏳ This JavaScript file serves as a demonstration of basic asynchronous programming concepts in JavaScript.
It includes examples and explanations of how to use async functions, promises, and async/await syntax.
*/

// 📦 Example 1: Using a Promise to get a potentially big data while letting
// the other parts of the program without waiting for potentially time
// consuming operation to finish
const fetchData_example = () => {
  return new Promise((resolve, reject) => {
    const wasOperationSuccessful = true;
    setTimeout(() => {
      wasOperationSuccessful
        ? resolve("Data fetched successfully!")
        : reject("There was a problem while trying to fetch the data");
    }, 3000);
  });
};

// Using the function that returns a Promise with .then() syntax
fetchData_example()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// ⏱ Example 2: Using async/await with a Promise
// async => makes a function return a promise
// await => makes an async function wait for a promise
// Everything after await is placed in an event queue
const fetchDataAsync = async () => {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

fetchDataAsync();

// 🚀 Example 3: Chaining promises with async/await
const fetchUserData_example = async () => {
  try {
    const userId = await getUserId();
    const userData = await getUserData(userId);
    console.log(userData);
  } catch (error) {
    console.error(error);
  }
};

const getUserId = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(123);
    }, 2000);
  });
};

const getUserData = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: userId, name: "John", age: 30 });
    }, 1500);
  });
};

fetchUserData();

// 😎 Write an async function to simulate fetching user data from an API with a delay of 3 seconds.
async function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, username: "john_doe", email: "john@example.com" });
    }, 3000);
  });
}

// 📏 Write a promise-based function to perform a mathematical operation (e.g., add, subtract) with a delay of 2 seconds.
function performOperation(a, b, operation) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let result;
      switch (operation) {
        case "add":
          result = a + b;
          break;
        case "subtract":
          result = a - b;
          break;
        default:
          result = "Invalid operation";
      }
      resolve(result);
    }, 2000);
  });
}

// 😄 Write an async function to make a network request using fetch API and handle the response.
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// 🌈 Write a promise-based function to generate a random number between 1 and 10 with a delay of 1 second.
function generateRandomNumber() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      resolve(randomNumber);
    }, 1000);
  });
}
