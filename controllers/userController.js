const { User } = require("../models");

// function to create a new user
async function createUser(req, res) {
  try {
    // create a new user object
    const user = new User(req.body);
    await user.hashPassword();
    // create a new user
    const newUser = await User.create(user);
    // save session details
    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.user_name = newUser.name;
      req.session.logged_in = true;
      // send userId and username in response
      res.json({
        userId: req.session.user_id,
        userName: req.session.user_name,
        logged_in: true,
      });
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
    // save session details with user id and name
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.user_name = userData.username;
      req.session.logged_in = true;
      // send user id and username in the response
      res.json({
        userId: req.session.user_id,
        userName: req.session.user_name,
        logged_in: true,
      });
    });
  } catch (err) {
    console.log(err);
    res.status.json(err);
  }
}

// function to logout a user
function logoutUser(req, res) {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
}

// function to check login status
function checkAuth(req, res) {
  if (req.session.logged_in) {
    res.json({ auth: true});
  } else {
    res.json({ auth: false });
  }
}

module.exports = {
  createUser,
  loginUser,
  logoutUser,
  checkAuth
};
