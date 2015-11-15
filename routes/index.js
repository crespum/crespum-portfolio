var express = require('express');
var router = express.Router();

//var loki = require('lokijs');
//var db = new loki('projects'); 

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Xabier Crespo' });
});

router.get('/projects', function(req, res, next) {
    res.render('projects', { title: 'Projects' });
});

module.exports = router;
