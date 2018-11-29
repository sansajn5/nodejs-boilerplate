const Model = require('objection').Model;

class User extends Model {
    static getTableName() {
        return 'users';
    }
}

module.exports = User;