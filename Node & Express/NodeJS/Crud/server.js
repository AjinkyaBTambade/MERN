// server.js
const express = require('express');
const bodyParser = require('body-parser');
const members = require('./members');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/api/members', async (req, res) => {
    const allMembers = await members.getAll();
    res.json(allMembers);
});

app.get('/api/members/:id', async (req, res) => {
    const member = await members.getById(req.params.id);
    if (member) {
        res.json(member);
    }
    else {
        res.status(404).send('Member not found');
    }
});

app.post('/api/members', async (req, res) => {
    await members.insert(req.body); 
    res.status(201).send('Member added');
});

app.put('/api/members/:id', async (req, res) => {
    await members.updateName(req.params.id, req.body.username);
    res.send('Member updated');
});

app.delete('/api/members/:id', async (req, res) => {
    await members.remove(req.params.id);
    res.send('Member removed');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
