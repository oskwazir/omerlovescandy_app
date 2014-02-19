var path = require('path')
var rootPath = path.normalize(__dirname + '/../../');
var db = process.env.DB_CONNECT || 'mongodb://localhost/candy';

module.exports = {
     development: {
        rootPath: rootPath,
        db: process.env.DB_CONNECT || 'mongodb://localhost/candy',
        port: process.env.port || 3000

     },
     production: {
        rootPath: rootPath,
        db: process.env.DB_CONNECT || 'mongodb://localhost/candy',
        port: process.env.port || 80
     }
}