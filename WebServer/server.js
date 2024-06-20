const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Middleware configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Add this to handle URL-encoded data

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/api/hello", (req, res) => {
    let person = { "fullname": "Sachin Tendulkar", "location": "Mumbai" };
    res.send(person);
});

app.post("/api/login", (req, res) => {
    let fileName = path.join(__dirname, 'credentials.json');
    fs.readFile(fileName, (err, data) => {
        if (err) throw err;
        let credentials = JSON.parse(data.toString());
        let userData = req.body;
        let userFound = credentials.find((user) => user.email === userData.email && user.password === userData.password);

        if (userFound) {
            res.sendFile(path.join(__dirname, 'public', 'welcome.html'));
        } else {
            res.sendFile(path.join(__dirname, 'public', 'login.html'));
        }
    });
});

app.post("/api/register", (req, res) => {
    let fileName = path.join(__dirname, 'credentials.json');
    fs.readFile(fileName, (err, data) => {
        if (err) throw err;

        let credentials = JSON.parse(data.toString());
        let newUser = req.body;
        credentials.push(newUser);

        fs.writeFile(fileName, JSON.stringify(credentials, null, 2), (err) => {
            if (err) throw err;
            res.sendFile(path.join(__dirname, 'public', 'welcome.html'));
        });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
