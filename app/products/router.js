const router = require("express").Router(); // import router from expressJS depedency
const productController = require("./controller"); // import controller product

router.post("/products", productController.store);

module.exports = router;
