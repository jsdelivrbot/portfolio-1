var express = require('express');
var router = express.Router();
var context = require('../public/js/context');
var nodemailer  = require('nodemailer'),
    sgTransport = require('nodemailer-sendgrid-transport'),
    env = require('../env');

router.get('/mailconfirm', function(req, res) {
  res.render('mailconfirm', context);
});

module.exports = router;
