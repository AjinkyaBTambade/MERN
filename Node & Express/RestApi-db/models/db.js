const mysql = require('mysql2')

var conUri ={
    host : "localhost",
    user : "root",
    password: "password",
    database :"transflower"
}
var conn = mysql.createConnection(conUri);
conn.connect((err)=>{
    if(!err){
        console.log("connection established");
    }
    else{
        console.log("error occured");
    }
})
module.exports=conn;