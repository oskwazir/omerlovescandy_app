var express = require('express'),
    stylus = require('stylus'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV || 'development';
var dbConnection = process.env.DB_CONNECT || 'mongodb://localhost/candy';

var app = express();

function compile(str, path){
    return stylus(str).set('filename',path);}

app.configure(function(){
    app.set('views',__dirname + '/server/views');
    app.set('view engine','jade');
    app.use(express.logger('dev'))
    //app.use(express.urlencoded());
    //app.use(express.multipart());
    app.use(express.json());
    app.use(stylus.middleware({
           src:__dirname + '/public',
           compile: compile }));
    app.use(express.static(__dirname + '/public' ));
    });

/*
* MongoDB connection
*/
mongoose.connect(dbConnection);
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error...'));
db.once('open',function callback(){
    console.log('mongolab connection open');
});

app.get('/partials/:partialPath',function(req,res){
    res.render('partials/'+ req.params.partialPath);
    });

app.get('*',function(req,res){
    res.render('index'); });

var port = process.env.port || 3000;

app.listen(port);

console.log('Express server listening on: ' + port);