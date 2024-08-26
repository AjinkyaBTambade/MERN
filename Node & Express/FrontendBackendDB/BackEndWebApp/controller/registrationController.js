const sql = require("../model/db");

exports.register = (req, res) => {
  let user = req.body;
  var command ="insert into credentials (email,password,name,location,age) values(?,?,?,?,?)";

  sql.query(command, [user.email, user.password,user.name,user.location,user.age], (err, rows, fields) => {
      var str = JSON.stringify(rows);
      res.send(str);
  });
};
