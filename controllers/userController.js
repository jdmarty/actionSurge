const { User } = require("../models");

// function to create a new user
async function createUser(req, res) {
  try {
    // create a new user object
    const user = new User(req.body);
    await user.hashPassword();
    // create a new user
    const newUser = await User.create(user);
    // send user details in response
    res.json({
      user_id: newUser.id,
      user_name: newUser.username,
      logged_in: true,
    });
  } catch (err) {
    res.status(400).json(err);
  }
}

// function to log in a new user
async function loginUser(req, res) {
  try {
    // Look for a user with the requested email
    const userData = await User.findOne({ email: req.body.email }, (err) => {
      console.log(err);
      if (err) res.send(error);
    });
    // if one is not found, send an error
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }
    // check password validity
    const validPassword = userData.checkPassword(req.body.password);
    // if passwords do not match, send an error
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }
    // send user details in response
    res.json({
      user_id: userData.id,
      user_name: userData.username,
      logged_in: true,
    });
  } catch (err) {
    console.log(err);
    res.status.json(err);
  }
}

// function to logout a user
function logoutUser(req, res) {
  res.json({
    user_id: "",
    user_name: "",
    logged_in: false,
  });
}

module.exports = {
  createUser,
  loginUser,
  logoutUser,
};
