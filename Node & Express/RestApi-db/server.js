const express = require('express');
const bodyParser = require('body-parser');
const employeeController = require('./controllers/employeeController');

const app = express();
app.use(bodyParser.json());

app.get('/api/employees', employeeController.getAll);
app.post('/api/employees', employeeController.insert);
app.put('/api/employees', employeeController.update);
app.delete('/api/employees', employeeController.delete);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
