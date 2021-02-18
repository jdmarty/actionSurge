// Modules
const express = require("express");
const session = require("express-session");
const logger = require("morgan");
const mongoose = require("mongoose");

// Routes
const routes = require("./routes");

// App variables
const app = express();
const PORT = process.env.PORT || 3001;

// Configure session
const sess = {
  secret: "Super secret secret",
  cookie: {
    // expire session after 30 minutes
    maxAge: 1800000,
  },
  rolling: true,
  resave: false,
  saveUninitialized: true,
};

// Set cookies to secure in production environment
if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1);
  sess.cookie.secure = true;
}

// Define middleware
app.use(session(sess));
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/actionsurge");

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
