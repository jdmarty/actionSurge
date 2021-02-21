import React, { useContext, useReducer, createContext } from "react";
import { ADJUST_PLAYER_TOP, ADJUST_SAVE_PROFS } from "./actions";

const CreatePlayerContext = createContext({});
const { Provider } = CreatePlayerContext;

const reducer = (state, action) => {
  switch (action.type) {
    case ADJUST_PLAYER_TOP:
      // Check if the level has changed and update proficiency
      const newProf = (action.target === "level") ? Math.floor(action.value / 5) +2 : state.proficiency
      return {
        ...state,
        [action.target]: action.value,
        proficiency: newProf,
      };
    case ADJUST_SAVE_PROFS:
      return {
        ...state,
        saveProficiencies: action.newProfs
      }
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
    proficiency: 2,
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
    saveProficiencies: []
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useCreatePlayerContext = () => {
  return useContext(CreatePlayerContext);
};

export { CreatePlayerProvider, useCreatePlayerContext };
