const jwt=require('jsonwebtoken');
const dal = require("../Models/dal");
// secrete key to generate token
let secreteKey="its Ajinkya"

exports.login=(req,res)=>{
    res.render('../views/login.ejs');
}

exports.postLogin=(req,res)=>{
    let yourData=req.body;
    let username=yourData.username;
    let password=yourData.password;

   if(username=="ajinkyatambade143@gmail.com" && password=="ajinkya")
    {
        var data={
            time:Date(),
            client:username
        }
        var token=jwt.sign(data,secreteKey);
        console.log(token);

         let model = dal.getPersonalDetails();
         res.render("../views/profile.ejs", model);
    }
    else
    {
        res.render("../views/linker.ejs");

    }
}