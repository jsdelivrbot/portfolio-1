var express = require('express');
var router = express.Router();
var context = require('../public/js/upknowncontext');


/* GET page. */

router.get('/upknown', function(req, res) {
  res.render('upknown', context);
});

module.exports = router;
