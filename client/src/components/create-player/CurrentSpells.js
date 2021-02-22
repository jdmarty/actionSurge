import React, { useRef, useState } from "react";
import { useCreatePlayerContext } from "../../utils/CreatePlayerState";
import CurrentSpellCard from "./CurrentSpellCard";
// function to parse index name back to standard name
import parseIndexName from "../../utils/parseIndexName";

function CurrentSpells() {
  const [playerState] = useCreatePlayerContext();
  const [search, setSearch] = useState("");
  const searchRef = useRef();

  const renderSpells = (spells) => {
    const filteredSpells = playerState.spells.filter((spell) => {
      return spell.match(new RegExp(search,"gi"));
    }).sort()
    return filteredSpells.map((spell, index) => {
      return (
        <CurrentSpellCard
          label={parseIndexName(spell)}
          name={spell}
          key={`spell${index}`}
        />
      );
    });
  };

  // handler for search changes
  const handleSearch = (e) => {
    setSearch(searchRef.current.value);
  };

  return (
    <div className="text-center">
      <input
        name="spellSearch"
        type="text"
        className="mt-2 p-1 rounded text-black w-3/4"
        placeholder="Search for a spell to remove"
        ref={searchRef}
        value={search}
        onChange={handleSearch}
      ></input>
      <ul>{renderSpells(playerState.spells)}</ul>
    </div>
  );
}

export default CurrentSpells;