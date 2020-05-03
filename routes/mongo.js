var mongojs = require('mongojs');
var db = mongojs('mongodb://despinalr:lpdp451789@ds029456.mlab.com:29456/tasklist', ['tasks']);

db.on('connect', function () {
	console.log('Connected to Database!!!')
});

exports.tasks = function(user, callback) {
    db.tasks.find({ email: user }, function(err, tasks) {
        if(err) {
            res.send(err);
        }
        callback(tasks);
    });
};

