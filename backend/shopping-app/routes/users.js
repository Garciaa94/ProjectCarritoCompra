var express = require('express');
var router = express.Router();

/* GET Lista de Usuarios. */
router.get('/', function(req, res, next) {
  res.send('responder con un recurso');
});

router.post('/', (req,res) => {
  console.log(req)
})

module.exports = router;
