var express = require('express');
var router = express.Router();
var context = require('../public/js/context');
var nodemailer  = require('nodemailer'),
    sgTransport = require('nodemailer-sendgrid-transport');

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', context);
});

router.get('/upknown', function(req, res) {
  res.render('upknown', context);
});
router.get('/mocktail', function(req, res) {
  res.render('mocktail', context);
});
router.get('/ascendeur', function(req, res) {
  res.render('ascendeur', context);
});
router.get('/techstars', function(req, res) {
  res.render('techstars', context);
});
router.get('/hexeater', function(req, res) {
  res.render('hexeater', context);
});
router.get('/poster', function(req, res) {
  res.render('poster', context);
});
router.get('/refracted', function(req, res) {
  res.render('refracted', context);
});
router.get('/about', function(req, res) {
  res.render('about', context);
});

module.exports = router;
