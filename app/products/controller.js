const Product = require("./model");

async function store(req, res, next) {
  // capture all data form from client
  let payload = req.body;

  // create new Product with payload var
  let product = new Product(payload);

  // then save to database
  await product.save();

  // send response to client
  return res.json(product);
}

module.exports = { store };
