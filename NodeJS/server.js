const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
const fileName = 'data.json';

app.use(express.json()); // Middleware to parse JSON request bodies

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

    


// // Placeholder for handling login
// app.post('/api/login', (req, res) => {
//   const { username, password } = req.body;

//   // Implement login functionality here
//   // For now, we'll just send back the received username and password
//   res.json({ username, password });
// });

// Start the server
app.listen(port, () => {
  console.log(`HTTP Server is listening on port ${port}`);
});
