var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET emit page. */
router.get('/', function (req, res, next) {
    var config = JSON.parse(fs.readFileSync(__dirname + './../public/jsons/config.json'));
    res.render('emit.jade', {
        title: 'Emitter',
        sizes: config.sizes,
        modes: config.modes,
        colors: config.colors,
        inits: config.inits
    });
});
module.exports = router;
