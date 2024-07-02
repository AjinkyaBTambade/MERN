const sql = require('../models/db');

exports.getAll = (req, res) => {
  let command = "SELECT * FROM employees";
  sql.query(command, (err, rows, fields) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(rows);
  });
};

exports.insert = (req, res) => {
    // Use parameterized query to prevent SQL injection and ensure correct data insertion
    let command = "INSERT INTO employees (firstName, lastName, email, address, password, deptid) VALUES (?, ?, ?, ?, ?, ?)";
    
    // Values to be inserted
    const values = ['Ajinkya', 'Tambade', 'aj@gmail.com', 'Tambademala', 'AJ1234',1];
  
    sql.query(command, values, (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(result);
    });
  };
  

exports.update = (req, res) => {
  let command = "UPDATE employees SET firstName='Ajinkya' WHERE id=1";
  sql.query(command, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(result);
  });
};

exports.delete = (req, res) => {
  let command = "DELETE FROM employees WHERE id=11";
  sql.query(command, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(result);
  });
};
