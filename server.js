var express = require('express'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV || 'development';

var app = express();

var config = require('./server/config/config')[env];

require('./server/config/express')(app,config);
require('./server/config/mongoose')(config);
require('./server/config/routes')(app);

app.listen(config.port);

console.log('Express server listening on: ' + config.port);