const express = require('express');
const languages = require('./../public/json/Languages.json')
const lVersion = require('./../public/json/LVersion.json')
const subtopics = require('./../public/json/subtopics.json')
const script = require('../public/javascripts/script');
const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    var LangVer = lVersion.Languages
    res.render('index', {

        title: 'Languages Application : ',
        languages,
        script,
        LangVer,
        subtopics
    });


});

module.exports = router;