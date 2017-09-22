var express = require('express');
var router = express.Router();
var context = require('../public/js/context');

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', {layout: 'main_aframe.handlebars'});
});

router.get('/secret', function(req, res) {
  res.render('secret', context);
});

router.get('/contact', function(req, res) {
  res.render('contact', context);
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

router.get('/about', function(req, res) {
  res.render('about', context);
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

router.get('/work/enter', function(req, res) {
  res.render('work/enter', context);
});

router.get('/work/virgin-chatbot', function(req, res) {
  res.render('work/virgin-chatbot', context);
});

router.get('/clients/keota', function(req, res) {
  res.render('work/keota', {layout: 'keota'});
});

router.get('/medialab', function(req, res) {
  res.render('work/secret/medialab', context);
});

  router.get('/medialab/acf', function(req, res) {
    res.render('work/secret/medialab/acf', context);
  });
  router.get('/medialab/upknown', function(req, res) {
    res.render('work/secret/medialab/upknown', context);
  });
  router.get('/medialab/wine', function(req, res) {
    res.render('work/secret/medialab/wine', context);
  });
  router.get('/medialab/resume', function(req, res) {
    res.render('work/secret/medialab/resume', context);
  });
  router.get('/medialab/mocktail', function(req, res) {
    res.render('work/secret/medialab/mocktail', context);
  });

router.get('/superpedestrian', function(req, res) {
  res.render('work/secret/superpedestrian', context);
});

router.get('/product', function(req, res) {
  res.render('work/product/product', context);
});

  router.get('/product/mocktail', function(req, res) {
    res.render('work/product/mocktail', context);
  });

  router.get('/product/wine', function(req, res) {
    res.render('work/product/wine', {layout: 'main-jquery'});
  });

  router.get('/product/upknown', function(req, res) {
    res.render('work/product/upknown', context);
  });

module.exports = router;
