// Import the express module
const express = require("express");

// Import the dotenv module to manage environment variables
const dotenv = require("dotenv");

// Import the morgan module for HTTP request logging
const morgan = require("morgan");

// Load environment variables from a .env file into process.env
dotenv.config({ path: "config.env" });

// Create an instance of an Express application
const app = express();

// Check if the application is running in development mode
if (process.env.NODE_ENV === 'development') {
    // Use morgan middleware for logging HTTP requests in 'dev' format
    app.use(morgan("dev"));
    // Log a message to the console indicating the app is in development mode
    console.log("App in development mode");
}

// Define a route handler for the root URL ("/")
app.get("/", (req, res) => {
    // Send a response with the text "First App With Morgan" when the root URL is accessed
    res.send("First App With Morgan");
});

// Get the port number from environment variables or use 3000 as a default
const PORT = process.env.PORT || 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
    // Log a message to the console when the server starts
    console.log(`First App running on port ${PORT} and in mode ${process.env.NODE_ENV}`);
});