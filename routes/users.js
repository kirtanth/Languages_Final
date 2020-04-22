var express = require('express');
var router = express.Router();
var languages = require('./../public/json/Languages.json')
var lVersion = require('./../public/json/LVersion.json')
var subtopics = require('./../public/json/subtopics.json')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/lan', function(req, res) {
    res.json(languages)
});

module.exports = router;