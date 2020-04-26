var express = require('express');
var router = express.Router();

// Get all Tasks
router.get('/tasks', function(req, res, next) {
    var obj = {
        val1: 1,
        val2: "dos",
        val3: true
    };
    res.send(obj);
});

module.exports = router;