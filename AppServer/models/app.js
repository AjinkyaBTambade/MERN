const studentOperations = require('./dal'); // replace with the actual file name

async function runTests() {
    try {
        // Setup the database (create table and insert initial values)
        await studentOperations.setup();
        console.log('Setup complete.');

        // Insert a new student
        await studentOperations.insert({ body: { name: 'Charlie Brown', location: 'Houston', email: 'charlie@example.com' } });
        console.log('Insert complete.');

        // Get all students
        const allStudents = await studentOperations.getAll();
        console.log('All students:', allStudents);

        // Get a student by ID
        const studentById = await studentOperations.getById(1);
        console.log('Student with ID 1:', studentById);

        // Remove a student by ID
        await studentOperations.remove(1);
        console.log('Student with ID 1 removed.');

        // Get all students after removal
        const studentsAfterRemoval = await studentOperations.getAll();
        console.log('All students after removal:', studentsAfterRemoval);

    } catch (err) {
        console.error('Error:', err);
    }
}

runTests();
