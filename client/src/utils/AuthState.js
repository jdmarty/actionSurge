import React, { useContext, useReducer, createContext } from "react";
import { LOGIN, CHECK_LOGIN, LOGOUT, CREATE_USER } from "./actions";
import API from "./API";

const AuthContext = createContext();

const { Provider } = AuthContext;

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userId: action.id,
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
    case CREATE_USER:
      return {
        ...state,
        userId: action.id,
        userName: action.userName,
        loggedIn: true,
      };
    default:
      return state;
  }
};

const AuthProvider = ({ ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    userId: "",
    userName: "",
    loggedIn: false,
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuthContext };
