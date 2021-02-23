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

  // create character
  createCharacter: function (characterData) {
    return axios.post("/api/character/create", characterData);
  },

  // get all players for a user
  getUserCharacters: function(userId) {
    return axios.get(`/api/character/user/${userId}`);
  },

  // get a single character
  // make this more secure later
  getCharacter: function(characterId) {
    return axios.get(`/api/character/${characterId}`);
  },

  // update a single character
  updateCharacter: function(characterId) {
    return axios.put(`/api/character/${characterId}`)
  }
};

export default API
