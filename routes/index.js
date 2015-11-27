var express = require('express');
var router = express.Router();
var fs = require('fs');
var projects_db = JSON.parse(fs.readFileSync('routes/projects_db.json', 'utf8'));

//var loki = require('lokijs');
//var db = new loki('projects'); 

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Xabier Crespo' });
});

router.get('/projects', function(req, res, next) {
    res.render('projects', { title: 'Projects', projects: projects_db });
});

router.param('project', function (req, res, next, project) {
  if(projects_db.hasOwnProperty(project))
  	req.project = projects_db[project];
  else return next(new Error('I have not collaborated on this project yet. If you think it may fit me, feel free to contact me.'));
  return next();
});

router.get('/projects/:project', function(req, res, next) {
    res.render('project_details', { title: req.project.title, project: req.project });
});

module.exports = router;
