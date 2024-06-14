const fs = require('fs').promises;
const fileName = 'members.json';

// Helper function to read members from the file
const readMembersFromFile = async () => {
  try {
    const data = await fs.readFile(fileName, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading the file:', err);
    return [];
  }
};

// Helper function to write members to the file
const writeMembersToFile = async (members) => {
  try {
    const data = JSON.stringify(members, null, 2);
    await fs.writeFile(fileName, data, 'utf8');
  } catch (err) {
    console.error('Error writing to the file:', err);
  }
};

// Function to get all members
const getAll = async () => {
  return await readMembersFromFile();
};

// Function to get a member by username
const getByName = async (name) => {
  const members = await readMembersFromFile();
  return members.find((person) => person.username === name);
};

// Function to get a member by ID
const getById = async (id) => {
  const members = await readMembersFromFile();
  return members.find((person) => person.id === id);
};

// Function to remove a member by ID
const remove = async (id) => {
  let members = await readMembersFromFile();
  members = members.filter((person) => person.id !== id);
  await writeMembersToFile(members);
};

// Function to insert a new member
const insert = async (person) => {
  const members = await readMembersFromFile();
  members.push(person);
  await writeMembersToFile(members);
  console.log('Member has been added.');
  console.log(await getAll());
};

// Function to update a member's username by ID
const updateName = async (id, newName) => {
  const members = await readMembersFromFile();
  const member = members.find((person) => person.id === id);
  if (member) {
    member.username = newName;
    await writeMembersToFile(members);
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
