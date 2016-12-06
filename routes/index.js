var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('viewer.html', {
        title: "danmaku"
    });
});

module.exports = router;