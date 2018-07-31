var express     = require('express');
var router      = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var queryString = req.query;


  console.log(queryString)
  res.render('route/terminal', { title: 'Pentium - SSH' });
});

module.exports = router;
