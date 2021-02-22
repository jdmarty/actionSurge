import React, { useContext, useReducer, createContext } from "react";
import { ADJUST_PLAYER_TOP, ADJUST_PLAYER_ARRAY } from "./actions";

const CreatePlayerContext = createContext({});
const { Provider } = CreatePlayerContext;

const reducer = (state, action) => {
  switch (action.type) {
    case ADJUST_PLAYER_TOP:
      // Check if the level has changed and update proficiency
      const newProf = (action.target === "level") ? Math.floor(action.value / 4) +2 : state.proficiency
      return {
        ...state,
        [action.target]: action.value,
        proficiency: newProf,
      };
    case ADJUST_PLAYER_ARRAY:
      return {
        ...state,
       [action.target]: action.newArray
      }
    default:
      return state;
  }
};

const CreatePlayerProvider = ({ ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    hit_points: 0,
    armor_class: 10,
    speed: 30,
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
    save_proficiencies: [],
    damage_immunities: [],
    damage_resistances: [],
    damage_vulnerabilities: [],
    condition_immunities: [],
    skill_proficiencies: [],
    skill_expertise: [],
    spells: [],
    weapons: [],
    armor: [],
    potions: [],
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useCreatePlayerContext = () => {
  return useContext(CreatePlayerContext);
};

export { CreatePlayerProvider, useCreatePlayerContext };
