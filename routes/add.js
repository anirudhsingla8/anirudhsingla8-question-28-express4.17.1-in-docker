var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/add', function(req, res, next) {
    let sum = req.body.number1+req.body.number2
    res.send({sum});
});

module.exports = router;
