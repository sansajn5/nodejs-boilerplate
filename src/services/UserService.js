const User = require('../models/User');

const findAll = async () => {
    try {
        let users = await User.query();
        return Promise.resolve(users);
    } catch(error) {
        Promise.reject({error: error})
    }
}

module.exports = {
    findAll
}