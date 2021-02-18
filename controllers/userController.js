const { User } = require("../models");

// function to create a new user
async function createUser(req, res) {
  // create a new user and run the hash method
  const user = new User(req.body);
  await user.hashPassword();
  // create that user in the database and return it
  User.create(user)
    .then((dbModel) => res.json(dbModel))
    .catch((err) => {
      console.log(err);
      res.status(422).json(err);
    });
}

// function to log in a new user
async function loginUser(req, res) {
  //Look for a user with the requested email
  const user =  await User.findOne({
    email: req.body.email,
  }, (err) => {
      if (err) {
          res.send(error)
      }
  });
  // check password validity
  const validPassword = user.checkPassword(req.body.password)
  // if passwords do not match, send an error
  if (!validPassword) {
    res
      .status(400)
      .json({ message: "Incorrect email or password, please try again" });
    return;
  }
  // if passwords match send user message
  res.json({ message: "You are now logged in!"})
}

module.exports = {
  createUser,
  loginUser
};
