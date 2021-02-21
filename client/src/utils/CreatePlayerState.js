import React, { useContext, useReducer, createContext } from "react";
import { ADJUST_PLAYER_TOP } from "./actions";

const CreatePlayerContext = createContext({});
const { Provider } = CreatePlayerContext;

const reducer = (state, action) => {
  switch (action.type) {
    case ADJUST_PLAYER_TOP:
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
    race: null,
    subrace: null,
    classType: null,
    subclass: null,
    level: 1,
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useCreatePlayerContext = () => {
  return useContext(CreatePlayerContext);
};

export { CreatePlayerProvider, useCreatePlayerContext };
