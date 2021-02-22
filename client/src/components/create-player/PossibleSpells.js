import React, { useRef, useState } from "react";
import { allSpells } from "../../utils/allSpells";
import PossibleSpellCard from "./PossibleSpellCard";

function PossibleSpells() {
  const [search, setSearch] = useState("");
  const searchRef = useRef()

  // render spells from a filtered list baed on search term
  const renderSpells = (spells) => {
    const filteredSpells = allSpells.filter(spell => {
      return spell.name.match(new RegExp(search,"gi"))
    })
    return filteredSpells.map((spell, index) => {
      return (
        <PossibleSpellCard
          label={spell.name}
          name={spell.index}
          key={`spell${index}`}
        />
      );
    });
  };

  // handler for search changes
  const handleSearch = (e) => {
    setSearch(searchRef.current.value)
  }

  return (
    <div className="text-center">
      <input
        name="spellSearch"
        type="text"
        className="mt-2 p-1 rounded text-black w-3/4"
        placeholder="Search for a spell to add"
        ref={searchRef}
        value={search}
        onChange={handleSearch}
      ></input>
      <ul>{renderSpells(allSpells)}</ul>
    </div>
  );
}

export default PossibleSpells;
