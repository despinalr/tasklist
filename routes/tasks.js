var express = require('express');
var mongo = require('./mongo');
var router = express.Router();

// Get all Tasks
router.get('/tasks', function(req, res, next) {
    mongo.tasks("david.espinal.ruiz@gmail.com", function(tasks) {
        res.send(tasks);
    });
});

module.exports = router;