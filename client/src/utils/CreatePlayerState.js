import React, { useContext, useReducer, createContext } from "react";
import { ADJUST_PLAYER_TOP } from "./actions";

const CreatePlayerContext = createContext({});
const { Provider } = CreatePlayerContext;

const reducer = (state, action) => {
  switch (action.type) {
    case ADJUST_PLAYER_TOP:
      console.log({
        ...state,
        [action.target]: action.value,
      });
      return {
        ...state,
        [action.target]: action.value
      };
    default:
      return state;
  }
};

const CreatePlayerProvider = ({ ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    race: "",
    subrace: "",
    classType: "",
    subclass: "",
    level: 1
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useCreatePlayerContext = () => {
  return useContext(CreatePlayerContext);
};

export { CreatePlayerProvider, useCreatePlayerContext };
