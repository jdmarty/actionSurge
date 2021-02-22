import React, { useState, useRef, useEffect } from "react";
// Context
import { useCreatePlayerContext } from "../../utils/CreatePlayerState";
import { skills } from "./selectorOptions";

function SkillsList(props) {
  // Gobal State
  const [playerState, playerDispatch] = useCreatePlayerContext();

  //Map the skills into a a list
  const renderSkills = (skills) => {
    // map the skills array
    return skills.map((skill, index) => {
      // calculate base bonus
      const baseStat = playerState[skill.base];
      const baseBonus = Math.floor((baseStat - 10) / 2);
      let bonus = baseBonus;

      // check if the player is proficient or expert
      const isProf = playerState.skill_proficiencies.includes(skill.value);
      const isExpert = playerState.skill_expertise.includes(skill.value);
      const marker = isExpert ? "x" : isProf ? "o" : "-";

      // add proficiency bonus
      if (isProf) {
        bonus = baseBonus + playerState.proficiency;
      }

      // add expert bonus
      if (isExpert) {
        console.log("here");
        bonus = baseBonus + playerState.proficiency * 2;
      }

      // return basic skills card
      return (
        <div className="flex justify-between text-lg" key={`skill${index}`}>
          <p>{marker}</p>
          <p>{skill.label}</p>
          <p>{bonus >= 0 ? "+" + bonus : bonus}</p>
        </div>
      );
    });
  };

  return <div className="mt-1 px-2">{renderSkills(skills)}</div>;
}

export default SkillsList;
