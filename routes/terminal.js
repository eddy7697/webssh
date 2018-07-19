var express     = require('express');
var router      = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('route/terminal', { title: '987' });
});

module.exports = router;
