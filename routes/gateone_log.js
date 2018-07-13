var express = require('express'),
    fs = require('fs'),
    url = require('url');
var router = express.Router();

/* GET users listing. */
router.get('/*', function(req, res, next) {
  var token = req.query.token;
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');


  // return JSON.parse(window.atob(base64));
  res.json(JSON.parse(Buffer.from(base64, 'base64')));
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  res.json(req.query);
})

module.exports = router;
