const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const port = 3000;
const fileName = 'credentials.json';

const app = express();

app.use(bodyParser.json()); // Middleware to parse JSON request bodies

// Endpoint to respond with a greeting message
app.get('/api/hello', (req, res) => {
  res.send('Hello from server');
});


// Placeholder for handling login
app.post('/api/login', (req, res) => {
    let url=req.url;
    let data = req.body;
    if(data.email==="aj@gmail.com" && data.password==="password5")
      {
        res.send("Welcome "+ data.email);
      }
      else
      {
        res.send("Invalid User....")
      }
  });


// Start the server
app.listen(port, () => {
  console.log(`HTTP Server is listening on port ${port}`);
});
