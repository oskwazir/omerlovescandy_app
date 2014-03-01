var express = require('express'),
    stylus = require('stylus'),
    passport = require('passport');


module.exports = function(app, config){
    function compile(str, path){
        return stylus(str).set('filename',path);
    }

    app.configure(function(){
        app.set('views',config.rootPath + '/server/views');
        app.set('view engine','jade');
        app.use(express.logger('dev'))
        app.use(express.cookieParser());
        //app.use(express.urlencoded());
        //app.use(express.multipart());
        //the secret is no good since it's on github
        //so change it to something secret in production
        app.use(express.session({ secret: 'colorful unicorn candy' }));
        app.use(passport.initialize());
        app.use(passport.session());
        app.use(express.json());
        app.use(stylus.middleware({
               src:config.rootPath + '/public',
               compile: compile }));
        app.use(express.static(config.rootPath + '/public' ));
    });    
}
