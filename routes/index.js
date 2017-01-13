var express = require('express');
var router = express.Router();
var context = require('../public/js/context');

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', context);
});

router.get('/projects', function(req, res) {
  res.render('projects', context);
});

router.get('/', function(req, res) {
  res.render('', context);
});

router.get('/about', function(req, res) {
  res.render('about', context);
});

module.exports = router;
