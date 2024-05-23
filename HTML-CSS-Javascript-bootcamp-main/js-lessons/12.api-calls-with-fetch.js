/*
📡 This JavaScript file serves as a demonstration of making API calls with the fetch function in JavaScript.
It includes examples and explanations of how to use fetch to retrieve data from a server.
*/

// Most used types of http calls: get, post, put, delete

fetch("http://localhost:8080/api/todos")
  .then((response) => response.json())
  .then((data) => console.log("Todos:", data));

// 📦 Sending data to a REST API with POST method
fetch("http://localhost:8080/api/todos", {
  method: "POST",
  body: JSON.stringify({
    task: "New Task",
    completed: false,
    description: "Task Description",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));

// 🗺️ Update existing data in the API
fetch("http://localhost:8080/api/todos/1", {
  method: "PUT",
  body: JSON.stringify({
    task: "Updated Task",
    completed: true,
    description: "Updated Task Description",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));

// 🎮 Delete data from the API
fetch("http://localhost:8080/api/todos/1", {
  method: "DELETE",
}).then((response) => console.log("Deleted"));

// Tasks:
// 🎈 Fetch a list of todos from the JSONPlaceholder API
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => console.log("Todos:", data));

// 🎆 Fetch comments for a specific post from the JSONPlaceholder API
fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
  .then((response) => response.json())
  .then((data) => console.log("Comments for post 1:", data));

// 🎑 Fetch posts by a specific user from the JSONPlaceholder API
fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
  .then((response) => response.json())
  .then((data) => console.log("Posts by user 1:", data));
