import React, { useContext, useReducer, createContext } from "react";
import { ADJUST_CHARACTER_ARRAY, ADJUST_CHARACTER_TOP, ADJUST_CHARACTER_ALL } from "./actions";

const CreateCharacterContext = createContext({});
const { Provider } = CreateCharacterContext;

const reducer = (state, action) => {
  switch (action.type) {
    case ADJUST_CHARACTER_TOP:
      // Check if the level has changed and update proficiency
      const newProf = (action.target === "level") ? Math.floor(action.value / 4) +2 : state.proficiency
      return {
        ...state,
        [action.target]: action.value,
        proficiency: newProf,
      };
    case ADJUST_CHARACTER_ARRAY:
      return {
        ...state,
       [action.target]: action.newArray
      }
    case ADJUST_CHARACTER_ALL:
      return {
        ...state,
        ...action.newState
      }
    default:
      return state;
  }
};

const CreateCharacterProvider = ({ ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    hit_points: 1,
    armor_class: 10,
    speed: 30,
    race: "",
    subrace: "",
    classType: "",
    subclass: "",
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

const useCreateCharacterContext = () => {
  return useContext(CreateCharacterContext);
};

export { CreateCharacterProvider, useCreateCharacterContext };
