var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt')
const User = require('../models/User')

router.get('/', function(req, res, next) {
  res.send('login');
});

router.post('/', async (req,res) => {
  try {
      const user = await User.findOne({email: req.body.email})
      console.log(user)
      if(!user) {
          res.statusCode = 404;
          res.send();
      } else {
          bcrypt.compare(req.body.password, user.password, function(err, result) {
              if(result) {
                  res.statusCode = 200;
                  res.send(user)
              } else {
                  console.log(err)
                  res.statusCode = 403;
                  res.send();
              }
          })
      }
  } catch(err) {
    console.log(err)
    res.statusCode = 503;
    res.send();
  }
})

module.exports = router;