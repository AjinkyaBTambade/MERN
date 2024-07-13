const controller=require('./Controllers/Controller');
const controller=require('./Controllers/AuthController')

// routing api at server side

module.exports=function(app){
    app.get("/", controller.index);
    app.get("/login", authcontroller.login);
    app.post("/login", authcontroller.postLogin);
}