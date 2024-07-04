// modules
const express = require('express');
const router = require('./router');
const app = express();

// middleware configuration
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// api routing
router(app);
app.set('viewengine', 'ejs')
// server listen at port 9090
app.listen(9090, () => {
    console.log("server listening at port number 9090");
})// modules
const express = require('express');
const router = require('./router');
const app = express();

// middleware configuration
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// api routing
router(app);
app.set('viewengine', 'ejs')
// server listen at port 9090
app.listen(9090, () => {
    console.log("server listening at port number 9090");
})