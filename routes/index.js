var express = require('express');
var passport = require('passport');
var router = express.Router();

var env = {
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID || 'Jw1DQ7TeU3RP8jP03ZLd2dnO0eeyEhiP',
  AUTH0_DOMAIN: process.env.AUTH0_DOMAIN || 'ovirnyi.eu.auth0.com',
  AUTH0_CALLBACK_URL: process.env.AUTH0_CALLBACK_URL || 'https://peaceful-ocean-31239.herokuapp.com/callback'
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', env: env });
});

router.get('/login',
  function(req, res){
    res.render('login', { env: env });
  });

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.get('/callback',
  passport.authenticate('auth0', { failureRedirect: '/url-if-something-fails' }),
  function(req, res) {
    res.redirect(req.session.returnTo || '/user');
  });


module.exports = router;
