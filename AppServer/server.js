const express=require('express');
const routes=require('./router');
const app=express();
//middleware configuration
app.use(express.urlencoded({extended:true}));
app.use(express.json());

routes(app);
app.listen(7000,()=>{
    console.log("App server is listening on port 7000");
})