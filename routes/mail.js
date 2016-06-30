var express = require('express');
var router = express.Router();
var context = require('../public/js/context');
var nodemailer  = require('nodemailer'),
    sgTransport = require('nodemailer-sendgrid-transport'),
    env = require('../env');

router.get('/mail', function(req, res) {
  res.render('mail', context);
});

module.exports = router;
