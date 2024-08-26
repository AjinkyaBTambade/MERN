// modules
const express = require("express");
const cors = require("cors");
const router=require("./router");
const app = express();

// middleware configuration
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


router(app);
app.listen(5050, () => {
  console.log("server is listen at port:5050");
});
