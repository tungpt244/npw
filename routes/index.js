var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.get('/about-us', function(req, res, next) {
  res.render('about-us.html');
});

router.get('/contact', function(req, res, next) {
  res.render('contact.html');
});

router.get('/gallery', function(req, res, next) {
  res.render('gallery.html');
});

router.get('/insurance-work', function(req, res, next) {
  res.render('insurance-work.html');
});

router.get('/services', function(req, res, next) {
  res.render('services.html');
});

router.get('/spare-parts', function(req, res, next) {
  res.render('spare-parts.html');
});


module.exports = router;
