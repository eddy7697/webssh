var express = require('express'),
    fs = require('fs'),
    url = require('url');
var router      = express.Router(); 

/* GET users listing. */
router.get('/', function(req, res, next) {
  var gateoneLogString;
  var gateoneLog;

  gateoneLogString = '[' + fs.readFileSync('./log/gateone_log.txt', 'utf8').slice(0, -1) + ']';
  gateoneLog = JSON.parse(gateoneLogString);

  gateoneLog.forEach(element => {
    var logObj = {
      callerId: element.operatorId, // potato id
      callerType: 0, 
      targetId: element.serverId, // server id
      targetType: 2, 
      belongId: "",
      belongType: 1,
      name: element.serverId, // server name
      taskId: element.id, // uuid 
      "X-Forwarded-For": "", // 
      ip: element.from,
      hostname: element.host,
      pid: 0,
      level: 30,
      msgCode: 611,
      inputParams: element, // what ever you have
      outputParams: {},
      msg: 'webssh access log',
      time: element.timestamp
    }
    // console.log(JSON.stringify(logObj) + "\n")
    fs.appendFile('./log/test.log', JSON.stringify(logObj) + "\n", function () {
      res.end();
    });
  });

  // fs.appendFile('./log/test.log', accessLog, function () {
  //   res.end();
  // });

  res.json(gateoneLog);
});

module.exports = router;
