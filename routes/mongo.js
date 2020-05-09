var mongojs = require('mongojs');
var db = mongojs('mongodb://despinalr:lpdp451789@ds029456.mlab.com:29456/tasklist', ['tasks']);

db.on('connect', function () {
	console.log('Connected to Database!!!');
});

exports.gettasks = function(user, callback) {
    db.tasks.find({ email: user }, function(err, tasks) {
        if(err) {
            console.log(err);  
        }
        callback(tasks);
    });
};

exports.savetask = function(task, callback) {
    db.tasks.save(task, function(err, task) {
        if(err) {
            console.log(err);  
        }
        callback(task);
    });
};

exports.deletetask = function(id, callback) {
    db.tasks.remove({_id: mongojs.ObjectId(id)}, function(err, task) {
        if(err) {
            console.log(err);
        }
        callback(task);
    });
};

exports.updatetask = function(id, task, callback) {
    db.tasks.update({_id: mongojs.ObjectId(id)}, {$set: task}, {}, function(err, response) {
        if(err) {
            console.log(err);
        }
        callback(response);
    });
};
