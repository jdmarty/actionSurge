import React, { useContext, useReducer, createContext } from "react";
import { LOGIN, LOGOUT } from "./actions";

const AuthContext = createContext({});
const { Provider } = AuthContext;

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      // set local storage to maintain login
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
      // clear local storage
      localStorage.clear();
      return {
        ...state,
        userId: "",
        userName: "",
        loggedIn: false,
      };
    default:
      return state;
  }
};

const AuthProvider = ({ ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    // pull logged in status from local storage or set to empty
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
