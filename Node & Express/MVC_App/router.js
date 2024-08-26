const routes = require('./controllers/HomeController');

module.exports=function(app){
    app.get('/',routes.home);
    app.get('/about',controller.about);
    app.get('/contact',controller.contactus);
    app.get('/service',controller.services);
    app.get('/index',controller.services);


}