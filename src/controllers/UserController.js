const userService = require('../services/UserService');

const getAllUsers = async(req, res, next) => {
    userService.findAll()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({error: err}));
}

module.exports = {
    getAllUsers
}