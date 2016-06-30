var express = require('express');
var router = express.Router();
var context = require('../public/js/upknowncontext');


/* GET proc page. */

router.get('/upknown', function(req, res) {
  res.render('upknown', upknowncontext);
});

module.exports = router;
