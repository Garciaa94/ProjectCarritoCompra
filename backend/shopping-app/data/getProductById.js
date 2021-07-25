const Product = require('../models/Product');

module.exports = async function getProductById(id) {
  const productFromDB = await Product.findById(id);
  return ProductFromDB;
};

module.exports = async function delproductById(id) {
  const productFromDB = await Product.findByIdAndDelete(id);
  return productFromDB;
};