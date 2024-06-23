const mysql = require('mysql2');

// Connection pool configuration
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password', // replace with your actual password
    database: 'transflower', // replace with your actual database name
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise(); // Use promise wrapper to enable async/await
