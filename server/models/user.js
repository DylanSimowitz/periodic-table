var bookshelf = require('../bookshelf');

class User extends bookshelf.Model {
    get tableName() {
        return 'users';
    }

    get hasTimestamps() {
        return true;
    }

    verifyPassword(password) {
        return this.get('password') === password;
    }

    static byEmail(email) {
        return this.forge().query({where:{ email: email }}).fetch();
    }
}
