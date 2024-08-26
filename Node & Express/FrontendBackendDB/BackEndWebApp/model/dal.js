const sql = require("../model/db");

exports.orderData = async () => {
  var command = "select * from orders";
   return new Promise((resolve, reject) => {
      sql.query(command, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
};



exports.productData = async () => {
var command = "select * from products";
return new Promise((resolve,reject)=>{
sql.query(command, (err, rows) => {
    if(err)
    {
        reject(err);
    }
  else {
          resolve(rows);
        }
  }); 
});
}
