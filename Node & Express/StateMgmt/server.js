const express = require('express');
const expressSession = require('express-session');
const fs = require('fs');
const path = require('path');

const app = express();
const oneDay = 1000 * 60 * 60 * 24;

// Load product data
const productData = JSON.parse(fs.readFileSync(path.join(__dirname, 'products.json'), 'utf8'));

// Middleware configuration
var sessionMiddleware = expressSession({
    secret: 'cart',
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false
});

// Use session middleware
app.use(sessionMiddleware);

// Get the cart
app.get("/api/cart", (req, res) => {
    if (req.session.cart) {
        res.send(req.session.cart);
    } else {
        req.session.cart = [];
        res.send(req.session.cart);
    }
});

// Add item to the cart
app.get("/api/addtocart/:id", (req, res) => {
    const product = productData.find(p => p.id === req.params.id);
    if (!product) {
        return res.status(404).send('Product not found');
    }
    if (!req.session.cart) {
        req.session.cart = [];
    }
    let item = { "productid": req.params.id, quantity: 1, name: product.name, price: product.price };
    req.session.cart.push(item);
    res.send(req.session.cart);
});

// Remove item from the cart
app.get("/api/removefromcart/:id", (req, res) => {
    if (req.session.cart) {
        req.session.cart = req.session.cart.filter((data) => data.productid != req.params.id);
    }
    res.send(req.session.cart);
});

// Checkout (clear the cart)
app.get("/api/checkout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            res.status(500).send("Failed to destroy session");
        } else {
            res.send("Session destroyed, cart checked out");
        }
    });
});

// Start the server
app.listen(9000, () => {
    console.log("Server is listening on port 9000");
});
