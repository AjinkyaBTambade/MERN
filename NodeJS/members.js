// members.js
var members = [
    { "id": 1, "username": "ajay", "email": "ajayprajapati.prajapati661@gmail.com" },
    { "id": 2, "username": "ajay2", "email": "ajayprajapati.prajapati661@gmil.com" },
    { "id": 3, "username": "ajay3", "email": "ajayprajapati.prajapati661@gmail.com" }
  ];
  
  // Function to get all members
  var getAll = function() {
    return members;
  };
  
  // Function to get a member by username
  var getByName = function(name) {
    var foundPerson = members.find((person) => person.username === name);
    return foundPerson;
  };
  
  // Function to get a member by ID
  var getById = function(id) {
    var foundPerson = members.find((person) => person.id === id);
    return foundPerson;
  };
  
  // Function to remove a member by ID
  var remove = function(id) {
    members = members.filter((person) => person.id !== id);
  };
  
  // Function to insert a new member
  var insert = function(person) {
    members.push(person);
  };
  
  // Function to update a member's username by ID
  var updateName = function(id, newName) {
    var member = members.find((person) => person.id === id);
    if (member) {
      member.username = newName;
    }
  };
  
  // Exporting the functions to be used in other files
  module.exports = {
    getAll,
    getByName,
    getById,
    remove,
    insert,
    updateName
  };