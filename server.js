var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var tasks = require('./routes/tasks');

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Static Files
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Routes
app.use('/', index);
app.use('/api', tasks);

var port = process.env.PORT || 3000;
var ip = process.env.IP || "0.0.0.0"
app.listen(port, ip, function() {
    console.log("Server listening at ", ip + ":" + port);
});
