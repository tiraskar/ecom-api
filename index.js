const express = require("express");
const cors = require("cors");
const productAPIRoutes = require("./routes/productapi");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("/public"));
app.use("/api/products", productAPIRoutes);

app.listen(4000, () => {
  console.log("Server started in port 4000");
});
