const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Username is required",
  },

  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      ({ length }) => length >= 8,
      "Password should be longer than 8 characters.",
    ],
  },

  email: {
    type: String,
    trim: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },

  userCreated: {
    type: Date,
    default: Date.now,
  },
});

// Method to hash password
UserSchema.methods.hashPassword = async function () {
  try {
    this.password = await bcrypt.hash(this.password, 10);
    return this.password;
  } catch (err) {
    console.log(err);
  }
};

// Method to compare passwords
UserSchema.methods.checkPassword = function (loginPw) {
  return bcrypt.compareSync(loginPw, this.password);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
