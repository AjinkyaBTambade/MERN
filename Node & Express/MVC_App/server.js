// modules
const express= require('express');
const router=require('./router');
const app=express();

// api routing
router(app);

// server listen at port 9090
app.listen(9090,()=>{
    console.log("server listening at port number 9090");
})