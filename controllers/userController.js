const { User } = require("../models");

//function to create a new user
async function createUser(req, res) {
  // create a new user and run the hash method
  const user = new User(req.body);
  await user.hashPassword();
  // create that user in the database and return it
  User
    .create(user)
    .then(dbModel => res.json(dbModel))
    .catch(err => {
        console.log(err);
        res.status(422).json(err)
    })
}

// test function
function test(req, res) {
    res.json({ msg: "Hello!"})
}

module.exports = {
    createUser,
    test
}
