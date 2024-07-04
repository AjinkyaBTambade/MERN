const controller = require('./controller/Controller');
const authcontroller = require('./controller/Authcontroller');

module.exports = function (app) {
    app.get("/", controller.index);
    app.get("/login", authcontroller.login);
    app.post("/login", authcontroller.postLogin);

}