const express = require("express");
const router = express.Router();
const {
  returnAllProducts,
  returnSingleProduct,
  createProduct,
} = require("../controller/productController");

router.get("/", returnAllProducts);
router.get("/:productId", returnSingleProduct);
router.post("/", createProduct);

module.exports = router;
