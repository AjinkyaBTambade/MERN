var authController=require('./controllers/authcontroller');
var userController=require('./controllers/usercontroller');

//HTTP request mapping is done using routing technique
module.exports=function(app){
    app.route('/api/tasks')
            .get(userController.getAll)  // get all tasks
            .post(userController.insert) //insert new task
            
    app.route('/api/tasks/:id')
             .delete(userController.remove)  //remove existing task whose id =12
             .put(userController.update)   //update existing task whose id =12
             .get(userController.getById)  //get  existing task whose id =12

    app.route('/api/login')
            .post(authController.login);
    app.route('/api/register')
            .post(authController.register);
};



//Single Responsibility Principle
//Loosely Coupled , highly Cohesive  ------SOC
//DRY : Do not repeat your self

//Hollywood Principle: Don't call me,. I will call you.
