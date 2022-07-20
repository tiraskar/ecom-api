const products = require("../data.json");
const fs = require("fs");

const returnAllProducts = (req, res) => {
  const { category } = req.query;
  if (category) {
    const selectedProducts = products.filter((product) => {
      return product.category === category;
    });
    res.json(selectedProducts);
    return;
  }
  res.json(products);
};

const returnSingleProduct = (req, res) => {
  const { productId } = req.params;
  const selectProduct = products.filter((product) => {
    return product.productId === Number(productId);
  });
  res.json(selectProduct);
};

const createProduct = (req, res) => {
  products.push(req.body);
  console.log(products);
  fs.writeFileSync("./data.json", JSON.stringify(products), () => {
    console.log("Data written");
  });
  res.send("Data Received");
};

module.exports = { returnAllProducts, returnSingleProduct, createProduct };
