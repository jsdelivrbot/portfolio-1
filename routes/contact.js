var express = require('express');
var router = express.Router();
var context = require('../public/js/context');
var nodemailer  = require('nodemailer'),
    sgTransport = require('nodemailer-sendgrid-transport');
    // env = require('../env');

router.get('/contact', function(req, res) {
  res.render('contact', context);
});

module.exports = router;
