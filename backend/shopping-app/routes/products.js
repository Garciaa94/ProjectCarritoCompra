const express = require('express');
var router = express.Router();
//const getProductById = require('../data/getProductById');

//MODELS
const Product = require('../models/Product');


//GET PRODUCTS
router.get('/', async (req, res, next)  => {
    //res.send('order');
    const productsFromDB = await Product.find();
    res.json(productsFromDB);
  });
  



// POST PRODUCT

router.post('/', async (req,res) => {
    console.log(req.body);
  const product = new Product({
    id: req.body.id, 
    title: req.body.title, 
    price: req.body.price, 
    description: req.body.description,
    category: req.body.category, 
    image: req.body.image
  })
  try {
      const newProduct = await product.save()
      res.statusCode = 200;
      res.send();
  } catch(err) {
      console.log(err)
      res.statusCode = 503;
      res.send();
  }
})

module.exports = router;