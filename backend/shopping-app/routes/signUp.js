var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt')
const User = require('../models/User')

const saltRounds = 10;

router.get('/', function(req, res, next) {
  res.send('signup');
});

router.post('/', async (req,res) => {
  bcrypt.genSaltSync(saltRounds)
  const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds)
  const user = new User({
    firstName: req.body.firstName, 
    lastName: req.body.lastName, 
    email: req.body.email, 
    phone: req.body.phone, 
    password: hashedPassword, 
    address: req.body.address, 
    street: req.body.street, 
    country: req.body.country, 
    stateName: req.body.stateName, 
    zipCode: req.body.zipCode
  })
  try {
      const newUser = await user.save()
      res.statusCode = 200;
      res.send();
  } catch(err) {
      console.log(err)
      res.statusCode = 503;
      res.send();
  }
})

module.exports = router;
