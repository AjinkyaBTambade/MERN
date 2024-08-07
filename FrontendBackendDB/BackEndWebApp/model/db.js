const mysql = require("mysql2");

var conUrl = {
  host: "localhost",
  user: "root",
    password: "password",
  database: "trymysql",
};
const connection = mysql.createConnection(conUrl);
connection.connect((err, rows, fields) => {
  if (!err) {
    console.log("connection establish successfully");
  } else {
    console.log("connection not establish");
  }
});

module.exports = connection;
