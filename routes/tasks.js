var express = require('express');
var mongo = require('./mongo');
var router = express.Router();

var user = "david.espinal.ruiz@gmail.com";

router.get('/tasks', function(req, res, next) {
    mongo.gettasks(user, function(tasks) {
        res.send(tasks);
    });
});

router.post('/task', function(req, res, next) {
    var task = {
        title: req.body.title,
        done: false,
        email: user
    };

    if(!task.title) {
        res.status(400);
        res.json({
            "error": "Bad Request"
        });
    }
    else {
        mongo.savetask(task, function(task) {
            res.send(task);
        });
    }
});

router.put('/task/:id', function(req, res, next) {
    var updatedTask = {
        title: req.body.title,
        done: req.body.done
    };

    if(!updatedTask.title) {
        res.status(400);
        res.json({
            "error": "Bad Request"
        });
    }
    else {
        mongo.updatetask(req.params.id, updatedTask, function(task) {
            res.send(task);
        });
    }
});

router.delete('/task/:id', function(req, res, next) {
    mongo.deletetask(req.params.id, function(tasks) {
        res.send(tasks);
    });
});

module.exports = router;