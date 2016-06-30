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

router.get('/process', function(req, res) {
  res.render('proc', context);
});

router.get('/contact', function(req, res) {
  res.render('contact', context);
});

router.get('/success', function(req, res) {
  res.render('success', context);
});

router.get('/artists', function(req, res) {
  res.render('artists', context);
});

router.get('/mail', function(req, res) {
  res.render('mail', context);
});

router.get('/mailconfirm', function(req, res) {
  res.render('mailconfirm', context);
});

router.post('/contact', function (req, res) {
  var mailer = nodemailer.createTransport(sgTransport({auth: {api_key: process.env['sendgrid'], api_id: 'xPjVryJtTFGSIlgKI5_N0A'} }));
  var email = {
      to: ['design@mocktail.ink'],
      from: req.body.email,
      subject: 'Project Request from ' + req.body.name,
      text: 'Start Message',
      html: '<p><b>' + req.body.name + '</p></b><p>' + req.body.email + '</p><p>' + req.body.description + '</p><p>' + req.body.checkbox1 + req.body.checkbox2 + req.body.checkbox3 + req.body.checkbox4 + req.body.soundcloud,
  };
  mailer.sendMail(email, function(err, res) {
      if (err) {
          console.log(err)
      }
      console.log(res);
  });
  res.redirect('/success');
});

module.exports = router;
