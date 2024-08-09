const jwt = require("jsonwebtoken");
const dal=require("../model/dal");

// secretekey for genetaing jwt token
const secretKey = "AJ Here";

exports.orders = async (req, res) => {

  // key to store token
  let authKey = "authentication";
  let token = req.header(authKey);
  let extractedUser = jwt.verify(token, secretKey);
  var orders = await dal.orderData();

  if (extractedUser.client == "ajthewarrior2123@gmail.com") {
    res.send(orders);
    console.log(orders);
  } else {
    res.send("unauthorized request");
  }
};

// query-------
