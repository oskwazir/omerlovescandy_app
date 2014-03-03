var mongoose = require('mongoose'),
    userModel = require('../models/User');

module.exports = function(config){
    /*
    * MongoDB connection
    */
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error',console.error.bind(console,'connection error...'));
    db.once('open',function callback(){
        console.log('mongolab connection open');
    });

    userModel.createDefaultUsers();
}
