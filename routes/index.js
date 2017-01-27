var express = require('express');
var router = express.Router();
var context = require('../public/js/context');

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', context);
});

router.get('/secret', function(req, res) {
  res.render('secret', context);
});

router.get('/projects', function(req, res) {
  res.render('projects', context);
});

router.get('/clients', function(req, res) {
  res.render('clients', context);
});

router.get('/writing', function(req, res) {
  res.render('writing', context);
});

router.get('/resources', function(req, res) {
  res.render('resources', context);
});

router.get('/bio', function(req, res) {
  res.render('bio', context);
});

router.get('/work/wineux', function(req, res) {
  res.render('work/wineux', context);
});

router.get('/work/winevr', function(req, res) {
  res.render('work/winevr', context);
});

router.get('/work/mocktail', function(req, res) {
  res.render('work/mocktail', context);
});

router.get('/work/upknownid', function(req, res) {
  res.render('work/upknownid', context);
});

router.get('/work/activities', function(req, res) {
  res.render('work/activities', context);
});

module.exports = router;
