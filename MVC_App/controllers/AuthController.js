const jwt=require('jsonwebtoken');
const dal = require("../model/dal");
// secrete key to generate token
let secreteKey="its Sanika"

exports.login=(req,res)=>{
    res.render('../views/login.ejs');
}

exports.postLogin=(req,res)=>{
    let yourData=req.body;
    let username=yourData.username;
    let password=yourData.password;

   if(username=="bhorsanika0239@gmail.com" && password=="sanika")
    {
        var data={
            time:Date(),
            client:username
        }
        var token=jwt.sign(data,secreteKey);
        console.log(token);

         let model = dal.getPersonalDetails();
         res.render("../views/myProfile.ejs", model);
    }
    else
    {
        res.render("../views/linker.ejs");

    }
}