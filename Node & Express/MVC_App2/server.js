// server.js
const express = require('express');
const app = express();
const setupRoutes = require('./router'); // Import the router function
const path = require('path');

// Middleware configuration
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set the view engine
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// API routing
setupRoutes(app); // Use the router function and pass the app

// Server listen at port 9090
app.listen(9090, () => {
    console.log("Server listening at port number 9090");
});
