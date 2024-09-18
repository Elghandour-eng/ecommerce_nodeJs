// Import the express module
const express = require("express");

// Create an instance of an Express application
const app = express();

// Define a route handler for the root URL ("/")
app.get("/", (req, res) => {
    // Send a response with the text "First App" when the root URL is accessed
    res.send("First App");
});

// Start the server and listen on port 8000
app.listen(8000, () => {
    // Log a message to the console when the server starts
    console.log("First App");
});

