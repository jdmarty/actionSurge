import axios from "axios"

const API = {
    // create user from username, email, and password
    createUser: function(userData) {
        return axios.post("/api/user/create", userData);
    },

    // login user with email and password
    loginUser: function(userData) {
        return axios.post("/api/user/login", userData);
    },

    // logout user
    logoutUser: function() {
        return axios.post("/api/user/logout");
    },

    // check login status
    checkAuth: function(){
        return axios.get("/api/user/checkAuth");
    }
}

export default API
