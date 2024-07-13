const controller = require('./Controllers/Controller');
const authcontroller = require('./Controllers/AuthController');

module.exports = function(app) {
    app.get("/", controller.index);
    app.get("/login", authcontroller.login);
    app.post("/login", authcontroller.postLogin);
};
