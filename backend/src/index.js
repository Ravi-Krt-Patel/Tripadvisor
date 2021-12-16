const express = require('express');
const ProductController = require("./controllers/product.controller")



const app = express();
app.use(express.json());

app.use("/product", ProductController);

module.exports = app;