var express = require('express');
var router = express.Router();

/* GET Lista de Usuarios. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', (req,res) => {
  console.log(req)
})

module.exports = router;
