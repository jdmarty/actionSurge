import axios from "axios"

const API = {
  // create user from username, email, and password
  createUser: function (userData) {
    return axios.post("/api/user/create", userData);
  },

  // login user with email and password
  loginUser: function (userData) {
    return axios.post("/api/user/login", userData);
  },

  // logout user
  logoutUser: function () {
    return axios.post("/api/user/logout");
  },

  // create player
  createPlayer: function (playerData) {
    return axios.post("/api/player/create", playerData);
  },
};

export default API
