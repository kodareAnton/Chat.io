var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send('Hej Hej du är connectad');
});



module.exports = router;
