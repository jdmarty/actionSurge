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
  createCharacter: function (playerData) {
    return axios.post("/api/character/create", playerData);
  },

  // get all players for a user
  getUserPlayers: function(userId) {
    return axios.get(`/api/character/user/${userId}`);
  }
};

export default API
