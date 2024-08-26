const authController = require("./controller/authController");
const orderController = require("./controller/orderController");
const productController = require("./controller/productController");
const registrationController = require("./controller/registrationController");

module.exports = function (app) {
    app.get("/api/orders", orderController.orders);
    app.post("/api/login",authController.auth);
    app.get("/api/product",productController.allProducts);
    app.get("/api/product/:id",productController.productById);
    app.post("/api/register", registrationController.register);

};
