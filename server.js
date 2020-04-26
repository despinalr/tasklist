var express = require('express');
var app = express();
var path = require('path');

// Routes
var index = require('./routes/index');
var tasks = require('./routes/tasks');

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/', index);
app.use('/api', tasks);

// Static Files
app.use(express.static(path.join(__dirname, 'client')));

var port = process.env.PORT || 3000;
var ip = process.env.IP || "0.0.0.0"
app.listen(port, ip, function() {
    console.log("Server listening at ", ip + ":" + port);
});