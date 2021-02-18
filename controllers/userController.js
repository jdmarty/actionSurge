const { User } = require("../models");

//function to create a new user
function createUser(req, res) {
  User
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => {
        console.log(err);
        res.status(422).json(err)
    })
}

module.exports = {
    createUser
}
