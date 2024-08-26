// module
const jwt = require("jsonwebtoken");
const sql = require("../model/db");

// secretekey for genetaing jwt token
const secretKey = "AJ Here";

exports.auth= (req, res) => {

      let user = req.body;

      var command = "select email,password from credentials where email=? && password=?";
        sql.query(command, [user.email, user.password], (err, rows, fields) => {
             if (rows.length > 0) {
               if (rows) {
                 let data = {
                   time: Date(),
                   client: user.email,
                 };
                 let token = jwt.sign(data, secretKey);
                 console.log(token);
                 res.send(token);
               }
             } else {
               res.send("invalid user");
             }
         
        }); 
}
