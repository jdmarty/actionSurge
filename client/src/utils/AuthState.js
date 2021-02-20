import React, { useContext, useReducer, createContext } from "react";
import { LOGIN, LOGOUT, CHECK_LOGIN } from "./actions";
import API from "./API";

const AuthContext = createContext({});
const { Provider } = AuthContext;

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("userId", action.userId);
      localStorage.setItem("userName", action.userName);
      localStorage.setItem("loggedIn", "true");
      return {
        ...state,
        userId: action.userId,
        userName: action.userName,
        loggedIn: action.loggedIn,
      };
    case LOGOUT:
      return {
        ...state,
        userId: "",
        userName: "",
        loggedIn: false,
      };
    case CHECK_LOGIN:
      return {
        ...state,
        loggedIn: action.loggedIn,
      };
    default:
      return state;
  }
};

const AuthProvider = ({ ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    userId: localStorage.getItem("userId") || "",
    userName: localStorage.getItem("userName") || "",
    loggedIn: Boolean(localStorage.getItem("loggedIn")) || false,
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuthContext };
