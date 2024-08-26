const express=require('express');
const app=express();

// middleware configuration
app.use(express.static("public"));

// http request mapping
app.get('/',(req,res)=>{
    res.sendFile('index.html');
});

// server listning
app.listen(6900,()=>{
    console.log("server listen at port 6900");
});