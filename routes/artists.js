var express = require('express');
var router = express.Router();
var context = require('../public/js/context');

router.get('/artists', function(req, res) {
  res.render('artists', context);
});

module.exports = router;
