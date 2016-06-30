var express = require('express');
var router = express.Router();
var context = require('../public/js/context');

router.get('/success', function(req, res) {
  res.render('success', context);
});

module.exports = router;
