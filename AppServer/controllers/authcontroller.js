
exports.login=(req, res)=>{
    let user=req.body;
    let message="";
    if(user.email==="ravi.tambade@transflower.in" && user.password==="ibm"){
        message="Welcome "+ user.email;
    }
    else{
        message="Invalid User";
    }
    res.send(message);
};

exports.register=(req, res)=>{
    res.send("new user registrations...")
}