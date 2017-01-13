var express = require('express');
var router = express.Router();
var context = require('../public/js/context');

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', context);
});

module.exports = router;
