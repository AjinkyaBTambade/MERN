// app.js
const membersModule = require('./members');

// Example usage
console.log(membersModule.getAll());

const newMember = { "id": 4, "username": "ajay4", "email": "ajayprajapati.prajapati661@gmail.com" };
membersModule.insert(newMember);
console.log(membersModule.getAll());

console.log(membersModule.getByName("ajay2"));

membersModule.remove(2);
console.log(membersModule.getAll());

// Update the username of a member
membersModule.updateName(1, "newAjay");
console.log(membersModule.getById(1));