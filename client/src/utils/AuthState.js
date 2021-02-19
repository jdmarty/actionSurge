import React, { useContext, useReducer, createContext } from "react";
import { LOGIN, CHECK_LOGIN, LOGOUT, CREATE_USER } from "./actions";
import API from "./API";

const AuthContext = createContext();

const { Provider } = AuthContext;

const reducer = async (state, action) => {
  switch (action.type) {
    case LOGIN:
      try {
        const loginResult = await API.loginUser(action.payload);
        return { ...state, ...loginResult };
      } catch (err) {
        console.log(err);
        return state;
      }
    case CHECK_LOGIN:
      try {
        const loginStatus = await API.checkAuth();
        if (loginStatus.auth === "true") return { ...state };
        return { userID: null, userName: "", logged_in: false };
      } catch (err) {
        console.log(err);
        return state;
      }
    case LOGOUT:
      try {
        await API.logoutUser();
        return { userID: null, userName: "", logged_in: false };
      } catch (err) {
        console.log(err);
        return state;
      }
    case CREATE_USER:
      try {
        const loginResult = await API.createUser(action.payload);
        return { ...state, ...loginResult };
      } catch (err) {
        console.log(err);
        return state;
      }
    default:
      return state;
  }
};

const AuthProvider = ({ ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
      userId: "",
      userName: "",
      loggedIn: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuthContext };
