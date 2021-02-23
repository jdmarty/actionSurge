import React from "react";
// Context
import { useCreateCharacterContext } from "../../utils/CreateCharacterState";
import { skills } from "./selectorOptions";

function SkillsList() {
  // Global State
  const [characterState] = useCreateCharacterContext();

  //Map the skills into a a list
  const renderSkills = (skills) => {
    // map the skills array
    return skills.map((skill, index) => {
      // calculate base bonus
      const baseStat = characterState[skill.base];
      const baseBonus = Math.floor((baseStat - 10) / 2);
      let bonus = baseBonus;

      // check if the player is proficient or expert
      const isProf = characterState.skill_proficiencies.includes(skill.value);
      const isExpert = characterState.skill_expertise.includes(skill.value);
      const marker = isExpert ? "x" : isProf ? "o" : "-";

      // add proficiency bonus
      if (isProf) {
        bonus = baseBonus + characterState.proficiency;
      }

      // add expert bonus
      if (isExpert) {
        bonus = baseBonus + characterState.proficiency * 2;
      }

      // return basic skills card
      return (
        <li className="flex justify-between text-lg" key={`skill${index}`}>
          <p>{marker}</p>
          <p>{skill.label}</p>
          <p>{bonus >= 0 ? "+" + bonus : bonus}</p>
        </li>
      );
    });
  };

  return <ul className="mt-1 px-2">{renderSkills(skills)}</ul>;
}

export default SkillsList;
