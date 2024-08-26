const dal = require("../model/dal");


// file name on which operation perform
exports.allProducts = async (req, res) => {
var productData=await dal.productData();
  res.send(productData);
};

exports.productById = async(req, res) => {
  var id = req.params.id;
  var productData = await dal.productData();

  var product = productData.find((p) => p.productId == parseInt(id));

  // check product is available or not
  if (!product) {
    res.send("there is no such product");
  } else {
    res.send(product);
  }
};
