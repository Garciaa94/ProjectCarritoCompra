var express = require('express');
var router = express.Router();
const Order = require('../models/Order')
const Product = require('../models/Product')

/* GET Lista de usuarios. */
router.get('/', function(req, res, next) {
  res.send('order');
});


router.post('/', async (req,res) => {
  const cart = req.body.cart;
  let products = [];
  cart.map((cartItem, idx) => {
    //   if(idx !==0 ){
        let newProduct = new Product({
            productId: cartItem.product.productId,
            price: cartItem.product.price,
            quantity: cartItem.quantity,
            productWiseTotalPrice: cartItem.productWiseTotalPrice
        })
        products.push(newProduct)
    // }
  })
  const order = new Order({
    orderId: req.body.orderId,
    email: req.body.email,
    products: products,
    address: req.body.address, 
    street: req.body.street, 
    country: req.body.country, 
    stateName: req.body.stateName, 
    zipCode: req.body.zipCode,
    paymentType: req.body.paymentType, 
    nameOnCard: req.body.nameOnCard, 
    cardNumber: req.body.cardNumber, 
    expiration: req.body.expiration, 
    cvv: req.body.cvv
  })
  try {
        const newOrder = await order.save()
        res.statusCode = 200;
        res.send();
    } catch(err) {
        console.log(err)
        res.statusCode = 503;
        res.send();
    }
})

module.exports = router;