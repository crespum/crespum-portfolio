var express = require('express');
var router = express.Router();
var fs = require('fs');
var markdown = require('marked');
var projects_db = JSON.parse(fs.readFileSync('public/databases/projects.json', 'utf8'));
var socials_db = JSON.parse(fs.readFileSync('public/databases/socials.json', 'utf8'));

//var loki = require('lokijs');
//var db = new loki('projects'); 

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Crespum', projects: projects_db, socials: socials_db });
});

router.param('project', function (req, res, next, project) {
    if(projects_db.hasOwnProperty(project))
        req.project = projects_db[project];
    else return next(new Error('I have not collaborated on this project yet. If you think it may fit me, feel free to contact me.'));
    return next();
});

router.get('/projects/:project', function(req, res, next) {
    res.render('project_details', { title: req.project.title, project: req.project, markdown: markdown });
});

module.exports = router;
