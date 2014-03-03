describe('candyUser', function(){
    beforeEach(module('app'));

    describe('isAdmin', function(){
        it('should return false if the roles array does not have an admin entry', function(candyUser){
            var user = new candyUser(); 
            user.roles = ['not admin'];
            expect(user.isAdmin()).to.be.falsey;

        });

        it('should return true if the roles array has an admin entry', function(candyUser){
            var user = new candyUser(); 
            user.roles = ['admin'];
            expect(user.isAdmin()).to.be.true;

        });

    });
})