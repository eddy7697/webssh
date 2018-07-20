var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // var token = req.query.token;
  // var filePath = './log/gateone_log.txt';
  // var gateoneLog;
  // var headerUrl = token.split('.')[0],
  //     base64Url = token.split('.')[1],
  //     secretUrl = token.split('.')[2];
  // var header = headerUrl.replace('-', '+').replace('_', '/'),
  //     base64 = base64Url.replace('-', '+').replace('_', '/'),
  //     secret = secretUrl.replace('-', '+').replace('_', '/');

  // gateoneLog = JSON.stringify(JSON.parse(Buffer.from(base64, 'base64'))).concat(',');  

  // fs.appendFile(filePath, gateoneLog, function () {
  //   res.end();
  // });
  console.log(req);
  res.render('index', { title: 'Express' });
});

module.exports = router;
