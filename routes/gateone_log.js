var express = require('express'),
    fs = require('fs'),
    url = require('url');
var router = express.Router();

/* GET users listing. */
router.get('/*', function(req, res, next) {
  console.log(req.query);
  res.json(req.query);
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  res.json(req.query);
})

module.exports = router;
