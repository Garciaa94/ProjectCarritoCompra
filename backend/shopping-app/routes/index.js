var express = require('express');
var router = express.Router();

/* GET Pagina de inicio. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tienda' });
});

module.exports = router;
