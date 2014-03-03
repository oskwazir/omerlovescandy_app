var mongoose = require('mongoose'),
    encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({
        firstName: String,
        lastName: String,
        userName: String,
        salt: String,
        hashed_pwd: String,
        roles: [String]
});

userSchema.methods = {
    authenticate: function(passwordToMatch){
        return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    }
}


var User = mongoose.model('User', userSchema);

function createDefaultUsers(){
    User.find({}).exec(function(err,collection){
        if(collection.length === 0){
            var salt, hash;
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt,'leo')
            User.create({firstName:'Leo',lastName:'Tolstoy',userName:'leo', salt:salt, hashed_pwd:hash, roles:['admin']});
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt,'emily')
            User.create({firstName:'Emily',lastName:'Bronte',userName:'emily', salt:salt, hashed_pwd:hash, roles:[]});
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt,'cormac')
            User.create({firstName:'Cormac',lastName:'McCarthy',userName:'cormac', salt:salt, hashed_pwd:hash});
        }
    });
};

exports.createDefaultUsers = createDefaultUsers;

