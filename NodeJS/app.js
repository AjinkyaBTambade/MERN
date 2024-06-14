const { getAll, getByName, getById, remove, insert, updateName } = require('./members');

// Example usage
(async () => {
  // Insert a new member
  await insert({ id: 5, username: "Ajinkya", email: "ajinkya@gmail.com" });

  // Get all members
  console.log(await getAll());

  // Get member by username
  console.log(await getByName("Ajinkya"));

  // Get member by ID
  console.log(await getById(2));

  // Update member's username by ID
  await updateName(2, "Shridhar");
  console.log(await getAll());

  // Remove member by ID
  await remove(4);
  console.log(await getAll());
})();
