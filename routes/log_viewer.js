var express     = require('express');
var router      = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('route/log_viewer', { title: '98765' });
});

module.exports = router;
