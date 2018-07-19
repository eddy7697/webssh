var express = require('express'),
    fs = require('fs'),
    url = require('url');
var router      = express.Router(); 

/* GET users listing. */
router.get('/', function(req, res, next) {
  var gateoneLogString;

  gateoneLogString = '[' + fs.readFileSync('./log/gateone_log.txt', 'utf8').slice(0, -1) + ']';

  res.json(JSON.parse(gateoneLogString));
});

module.exports = router;
