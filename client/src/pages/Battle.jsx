// modules
import React, { useEffect, useState } from "react";
import { toast } from "react-toast";
// Context and Utilities
import { useAuthContext } from "../utils/AuthState";
import API from "../utils/API";
import { rollDice, getBonusFromStat } from "../utils/battleFunctions";
import Monster from "../utils/monsterClass"
// components
import AddPlayerModal from "../components/battle/AddPlayerModal.jsx";
import AddMonsterModal from "../components/battle/AddMonsterModal.jsx";
import ConfirmResetModal from "../components/battle/ConfirmRestModal.jsx";
import SpellModal from "../components/battle/SpellModal.jsx"
import InitiativeCard from "../components/battle/InitiativeCard.jsx";
import DiceRoller from "../components/battle/DiceRoller.jsx";
import DisplayCharacter from "../components/battle/DisplayCharacter.jsx";
import DisplayMonster from "../components/battle/DisplayMonster.jsx";
// grid components
import Board from "../components/battle/grid/Board.jsx";

function Battle() {
  //state variables
  const [authState] = useAuthContext();
  const [allCharacters, setAllCharacters] = useState([]);
  const [allMonsters, setAllMonsters] = useState([]);
  // get combatants from local storage or set empty
  const [combatants, setCombatants] = useState(
    JSON.parse(localStorage.getItem("combat")) || []
  );
  const [viewCombatant, setViewCombatant] = useState({});
  const [viewSpell, setViewSpell] = useState({});
  const [squaresPerLine, setSquaresPerLine] = useState(20);
  const [mover, setMover] = useState({});
  const [diceRoll, setDiceRoll] = useState({
    number: 1,
    type: "20",
    mod: 0,
    rolls: ["20"],
    result: 0,
  });

  // Use effect to load user characters and monsters on mount
  useEffect(() => {
    const id = authState.userId;
    // get all characters for this user
    API.getUserCharacters(id)
      .then(({ data }) => {
        // set the all players state
        setAllCharacters(data);
      })
      .catch((err) => console.log(err));
    // get all monsters from external API
    API.getAllMonsters()
      .then(({ data }) => {
        // set the all monsters state
        setAllMonsters(data.results);
      })
      .catch((err) => console.log(err));
  }, [authState.userId]);

  // ADD OR REMOVE COMBATANTS===============================================
  // Add a character to the battle
  const handleAddCharacter = (id) => {
    const currentCombatants = [...combatants];
    const newCharacter = allCharacters.find(
      (character) => character._id === id
    );
    // check for duplicates
    const isDuplicate = currentCombatants.find(
      (character) => character._id === newCharacter._id
    );
    // if a duplicate is found, alert alert the user
    if (isDuplicate) {
      toast.error("Selected Player is already in battle");
      return;
    }
    // give the character a base initiative, health, and position
    newCharacter.initiative = 0;
    newCharacter.current_hit_points = newCharacter.hit_points;
    newCharacter.xPos = combatants.length % squaresPerLine;
    newCharacter.yPos = Math.floor(combatants.length / squaresPerLine);
    // push the new player to the current array and set state
    currentCombatants.push(newCharacter);
    setCombatants(currentCombatants);
    // set to view the current combatant
    setViewCombatant(currentCombatants[0]);
  };

  // Add a monster to the battle
  const handleAddMonster = (name) => {
    const currentCombatants = combatants;
    const targetMonster = allMonsters.find((monster) => monster.name === name);
    // call the api to populate the monster details
    API.getMonster(targetMonster.url).then(({ data }) => {
      // calculate monster spawn position
      const newXPos = currentCombatants.length % squaresPerLine;
      const newYPos = Math.floor(currentCombatants.length / squaresPerLine);
      const newMonster = new Monster(data, currentCombatants, newXPos, newYPos);
      currentCombatants.push(newMonster);
      setCombatants(currentCombatants);
      console.log(combatants)
      // set to view the current combatant
      setViewCombatant(currentCombatants[0]);
    });
  };

  // Remove a combatant
  const handleRemoveCombatant = (name, id) => {
    // if there is a character id, filter the characters list
    if (id) {
      // filter out combatants with matching ids
      const newCombatants = combatants.filter((character) => {
        return character._id !== id;
      });
      setCombatants(newCombatants);
      return newCombatants;
    } else {
      // filter out monsters with matching names
      const newCombatants = combatants.filter((monster) => {
        return monster.name !== name;
      });
      setCombatants(newCombatants);
      // set to view the current combatant or nothing
      setViewCombatant(newCombatants[0] || {});
      return newCombatants;
    }
  };

  // Remove all combatants and reset state
  const handleReset = () => {
    setCombatants([]);
    setViewCombatant({});
    setDiceRoll({
      number: 1,
      type: "20",
      mod: 0,
      rolls: ["20"],
      result: 0,
    });
    setViewCombatant({});
    setMover({});
    localStorage.removeItem("combat");
  };
  // ====================================================================

  // INITIATIVE TRACKING================================================
  // Roll initiative for all
  const rollInitiative = () => {
    // do not run if there are no combatants
    if (combatants.length < 1) return;
    // roll initiative for each combatant
    const newCombatants = combatants.map((combatant) => {
      return {
        ...combatant,
        initiative: rollDice(20) + getBonusFromStat(combatant.dexterity),
      };
    });
    // sort by combatants by initiative
    const sortedCombatants = newCombatants.sort(
      (a, b) => b.initiative - a.initiative
    );
    // set state to the updated combatant list
    setCombatants(sortedCombatants);
    setViewCombatant(sortedCombatants[0]);
    return sortedCombatants;
  };

  // Update a single initiative value
  const handleUpdateInitiative = (value, name, id) => {
    const currentCombatants = [...combatants];
    let newCombatants = [];
    // search by id if one is provided, otherwise use name
    if (id) {
      newCombatants = currentCombatants.map((combatant) => {
        if (combatant._id === id) return { ...combatant, initiative: value };
        else return combatant;
      });
    } else {
      newCombatants = currentCombatants.map((combatant) => {
        if (combatant.name === name) return { ...combatant, initiative: value };
        else return combatant;
      });
    }
    // sort by combatants by initiative
    const sortedCombatants = newCombatants.sort(
      (a, b) => b.initiative - a.initiative
    );
    // set the state to the update combatants list
    setCombatants(sortedCombatants);
    // set to view the current combatant
    setViewCombatant(sortedCombatants[0]);
    return sortedCombatants;
  };

  // Advance initiative count
  const advanceInitiative = () => {
    // do not run if there are no combatants
    if (combatants.length < 1) return;
    const currentCombatants = [...combatants];
    // shift the first combatant to the back
    const firstCombatant = currentCombatants.shift();
    currentCombatants.push(firstCombatant);
    setCombatants(currentCombatants);
    // set to view the current combatant
    setViewCombatant(currentCombatants[0]);
    return currentCombatants;
  };

  // Click to view combatant
  const handleViewClick = (name, id) => {
    // Search for target by id or name
    const target = id
      ? combatants.find((combatant) => combatant._id === id)
      : combatants.find((combatant) => combatant.name === name);
    // set viewCombatant to the target
    setViewCombatant(target);
  };
  // ===================================================================

  // HIT POINTS TRACKING================================================
  // Handle manual change of hit points
  const handleHPChange = (value, name, id) => {
    // clone the current combatants
    const currentCombatants = combatants
    // find the index that matches the target name
    const targetIndex = combatants.findIndex((combatant) => combatant.name === name)
    console.log(currentCombatants)
    setCombatants(currentCombatants)
  };
  // ===================================================================

  // MOVEMENT===========================================================
  // Set a token to be the active mover
  const handleSetMover = (name, id) => {
    // set the mover by id or name
    if (id) {
      const newMover = combatants.find((combatant) => combatant._id === id);
      setMover(newMover);
      setViewCombatant(newMover);
    } else {
      const newMover = combatants.find((combatant) => combatant.name === name);
      setMover(newMover);
      setViewCombatant(newMover);
    }
  };
  // move a token to a new position
  const handleMove = (x, y) => {
    // do nothing if no mover is set
    if (!mover.name) return;
    // remap combatants and change mover position
    const newCombatants = combatants.map((combatant) => {
      // match mover by id or name
      if (mover._id && combatant._id === mover._id) {
        return { ...combatant, xPos: x, yPos: y };
      } else if (combatant.name === mover.name) {
        return { ...combatant, xPos: x, yPos: y };
      } else {
        return combatant;
      }
    });
    // set combatants to the new array
    setCombatants(newCombatants);
    setMover({});
  };

  // handle grid size change
  const handleGridResize = (e) => {
    setSquaresPerLine(Number(e.target.value / 5));
  };
  //====================================================================

  // DICE ROLLER========================================================
  const handleDiceChange = (obj) => {
    setDiceRoll(obj);
  };
  //====================================================================

  // SAVE BATTLE========================================================
  const handleSave = () => {
    localStorage.setItem("combat", JSON.stringify(combatants));
    toast.success("Battle State Saved");
  };
  //====================================================================

  // VIEW SPELL=========================================================
  const handleViewSpell = (url) => {
    API.getSpell(url).then(({ data }) => {
      setViewSpell(data);
      openSpellModal();
    })
  }
  //====================================================================

  // MODALS=============================================================
  const [characterModalIsOpen, setCharacterModalIsOpen] = useState(false);
  const [monsterModalIsOpen, setMonsterModalIsOpen] = useState(false);
  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState(false);
  const [spellModalIsOpen, setSpellModalIsOpen] = useState(false);

  const modalStyles = {
    content: {
      top: "10%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%)",
      width: "75%",
      backgroundColor: "rgba(209, 213, 219",
    },
  };

  // Handlers for add player modal
  const openCharacterModal = () => {
    setCharacterModalIsOpen(true);
  };

  const closeCharacterModal = () => {
    setCharacterModalIsOpen(false);
  };

  // Handlers for add monster modal
  const openMonsterModal = () => {
    setMonsterModalIsOpen(true);
  };

  const closeMonsterModal = () => {
    setMonsterModalIsOpen(false);
  };

  // Handlers for confirm modal
  const openConfirmModal = () => {
    setConfirmModalIsOpen(true);
  };

  const closeConfirmModal = () => {
    setConfirmModalIsOpen(false);
  };

  // Handlers for spell modal
  const openSpellModal = () => {
    setSpellModalIsOpen(true);
  };

  const closeSpellModal = () => {
    setSpellModalIsOpen(false);
  };

  // ===============================================================

  // Render Functions===============================================
  const renderInitiativeCards = (combatants) => {
    return combatants.map((combatant, index) => {
      return (
        <InitiativeCard
          first={index === 0 ? true : false}
          {...combatant}
          onClick={handleRemoveCombatant}
          onViewClick={handleViewClick}
          onChange={handleUpdateInitiative}
          key={"initiative" + index}
        />
      );
    });
  };

  const renderGridSizeOptions = () => {
    let options = [];
    options.push(<option value={100} key={"default"}>{`Default`}</option>);
    for (let i = 25; i <= 200; i += 5) {
      options.push(<option value={i} key={"size" + i}>{`${i} ft`}</option>);
    }
    return options;
  };
  // ===============================================================

  return (
    <div
      className="grid grid-cols-12 bg-indigo-200 bg-opacity-70 m-4 border border-black"
      style={{ height: "88vh" }}
    >
      {/* Left Column */}
      <div className="lg:col-span-3 col-span-6 overflow-auto text-sm">
        {/* Display Character / Monster */}
        <div
          className="border border-black overflow-auto"
          style={{ height: "70%" }}
        >
          {viewCombatant.name &&
            (viewCombatant._id ? (
              <DisplayCharacter
                {...viewCombatant}
                onChange={handleHPChange}
                setDice={handleDiceChange}
              />
            ) : (
              <DisplayMonster
                {...viewCombatant}
                onChange={handleHPChange}
                setDice={handleDiceChange}
                viewSpell={handleViewSpell}
              />
            ))}
        </div>
        {/* Dice Roller */}
        <div
          className="border border-black bg-gray-800 bg-opacity-70 overflow-auto"
          style={{ height: "30%" }}
        >
          <DiceRoller {...diceRoll} />
        </div>
      </div>
      {/* Middle Column */}
      <div className="col-span-6 border-black border">
        {/* Header row with buttons */}
        <div className="border-b border-black p-4 flex flex-wrap justify-around">
          {/* Add Character */}
          <button
            className="bg-indigo-800 text-white p-2 rounded-lg mx-6 lg:my-0 my-2"
            onClick={openCharacterModal}
          >
            Add Character
          </button>
          {/* Add Monster */}
          <button
            className="bg-indigo-800 text-white p-2 rounded-lg mx-6 lg:my-0 my-2"
            onClick={openMonsterModal}
          >
            Add Monster
          </button>
          {/* Reset Battle */}
          <button
            className="bg-red-800 text-white p-2 rounded-lg mx-6 lg:my-0 my-2"
            onClick={openConfirmModal}
          >
            Reset Battle
          </button>
          {/* Grid Size */}
          <div className="bg-gray-500 text-white p-2 rounded-lg mx-6 lg:my-0 my-2 flex justify-around space-x-2">
            <label>Grid Size</label>
            <select
              className="w-24 text-black text-center"
              onChange={handleGridResize}
            >
              {renderGridSizeOptions()}
            </select>
          </div>
        </div>
        {/* Game Board*/}
        <Board
          spl={squaresPerLine}
          combatants={combatants}
          mover={mover}
          setMover={handleSetMover}
          move={handleMove}
          firstCombatant={combatants[0]}
        />
      </div>
      {/* Right Column */}
      <div className="lg:col-span-3 col-span-6 border-black border p-5 overflow-auto">
        {/* Header with buttons */}
        <div className="flex justify-around">
          <button
            className={`bg-gray-800 text-white p-2 rounded-lg ${
              combatants.length < 1 && "hidden"
            }`}
            onClick={rollInitiative}
          >
            Roll Initiative
          </button>
          <button
            className={`bg-gray-800 text-white p-2 rounded-lg ${
              combatants.length < 1 && "hidden"
            }`}
            onClick={advanceInitiative}
          >
            Next Turn
          </button>
          {/* Save Battle */}
          <div
            className={`bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-500 hover:text-green-500 cursor-pointer ${
              combatants.length < 1 && "hidden"
            }`}
            onClick={handleSave}
          >
            <i className="fas fa-save"></i>
          </div>
        </div>
        {/* Initiative tracker */}
        <ul className="overflow-auto px-2">
          {renderInitiativeCards(combatants)}
        </ul>
      </div>

      {/* Add Player Modal */}
      <AddPlayerModal
        isOpen={characterModalIsOpen}
        onRequestClose={closeCharacterModal}
        style={modalStyles}
        contentLabel="add player modal"
        closeModal={closeCharacterModal}
        allCharacters={allCharacters}
        handleAdd={handleAddCharacter}
        closeTimeoutMS={100}
      />
      {/* Add Monster Modal */}
      <AddMonsterModal
        isOpen={monsterModalIsOpen}
        onRequestClose={closeMonsterModal}
        style={modalStyles}
        contentLabel="add monster modal"
        closeModal={closeMonsterModal}
        allMonsters={allMonsters}
        handleAdd={handleAddMonster}
        closeTimeoutMS={100}
      />
      {/* Confirm Modal */}
      <ConfirmResetModal
        isOpen={confirmModalIsOpen}
        onRequestClose={closeConfirmModal}
        style={modalStyles}
        contentLabel="confirm reset modal"
        closeModal={closeConfirmModal}
        handleReset={handleReset}
        closeTimeoutMS={100}
      />
      {/* Spell Modal */}
      <SpellModal
        spell={viewSpell}
        isOpen={spellModalIsOpen}
        onRequestClose={closeSpellModal}
        style={modalStyles}
        contentLabel="spell information modal"
        closeModal={closeSpellModal}
        closeTimeoutMS={100}
      />
    </div>
  );
}

export default Battle;
