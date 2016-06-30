var express = require('express');
var router = express.Router();
var context = require('../public/js/proccontext');


/* GET proc page. */

router.get('/process', function(req, res) {
  res.render('proc', proccontext);
});

module.exports = router;
