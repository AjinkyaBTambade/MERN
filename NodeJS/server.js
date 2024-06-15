const express = require('express');
const bodyParser=require('body-parser')
const fs = require('fs');
const port = 3000;
const fileName = 'data.json';

var app = express();

app.use(bodyParser.json()); // Middleware to parse JSON request bodies

// Endpoint to respond with a greeting message
app.get('/api/hello', (req, res) => {
  res.send('Hello from server');
});

// Endpoint to read and send the content of data.json
app.get('/api/people', (req, res) => {
  let filename ="data.json";
  fs.readFile(filename,(err, data)=>{
                                     let strPeople=data.toString();
                                     let people =JSON.parse(strPeople);
                                     res.json(people);
  })
});

    


// Placeholder for handling login
app.post('/api/login', (req, res) => {
  let url = req.url;
  let data = req.body;
  console.log(data);  // Log the received data

  // Implement login functionality here
  // For now, we'll just send back the received username and password
  res.send("Post Request Handled Successfully");
});


// Start the server
app.listen(port, () => {
  console.log(`HTTP Server is listening on port ${port}`);
});
