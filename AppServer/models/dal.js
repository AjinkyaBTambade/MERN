const sql = require('./db');

// Function to get all students
exports.getAll = async function() {
    const command = "SELECT * FROM students";
    try {
        const [rows, fields] = await sql.query(command);
        return rows;
    } catch (err) {
        throw err;
    }
};

// Function to get a student by ID
exports.getById = async function(id) {
    const command = "SELECT * FROM students WHERE id = ?";
    try {
        const [rows, fields] = await sql.query(command, [id]);
        return rows;
    } catch (err) {
        throw err;
    }
};

// Function to insert a new student
exports.insert = async function(req) {
    const { name, location, email } = req.body;
    const command = "INSERT INTO students (name, location, email) VALUES (?, ?, ?)";
    try {
        const [rows, fields] = await sql.query(command, [name, location, email]);
        return rows;
    } catch (err) {
        throw err;
    }
};

// Function to remove a student by ID
exports.remove = async function(id) {
    const command = "DELETE FROM students WHERE id = ?";
    try {
        const [rows, fields] = await sql.query(command, [id]);
        return rows;
    } catch (err) {
        throw err;
    }
};

// Function to create the students table and insert some values (for setup purposes)
exports.setup = async function() {
    const createTable = `
        CREATE TABLE IF NOT EXISTS students (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            location VARCHAR(255),
            email VARCHAR(255) NOT NULL
        )
    `;
    const insertData = `
        INSERT INTO students (name, location, email) VALUES 
        ('Ajinkya Tamabde', 'Pune', 'aj@gmail.com'),
        ('Shridhar Patil', 'Hinjewadi', 'shri@gmailcom'),
        ('Aditya Tamabde', 'Awasari', 'adi@gmail.com')
    `;
    try {
        await sql.query(createTable);
        await sql.query(insertData);
    } catch (err) {
        throw err;
    }
};
