const express = require('express');
const router = require('./router'); // Import the router function
const app = express();

// Middleware configuration
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API routing
router(app); // Use the router function and pass the app

// Set the view engine
app.set('view engine', 'ejs');

// Server listen at port 9090
app.listen(9090, () => {
    console.log("Server listening at port number 9090");
});
