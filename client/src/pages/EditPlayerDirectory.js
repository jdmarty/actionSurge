import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useAuthContext } from "../utils/AuthState";

function EditPlayerDirectory() {
  // Characters list and auth state for user id
  const [characters, setCharacters] = useState([]);
  const [authState] = useAuthContext();

  // Render a list of players on component mount
  useEffect(() => {
    API
      .getUserPlayers(authState.userId)
      .then(({data}) => setCharacters(data))
      .catch(err => console.log(err))
  })
  return (
    <div className="py-9 md:px-9 sm:px-36 px-4 text-center">
      <h1>Edit Player Directory</h1>
      <ul>
        {characters.map(character => {
          return <li>{character.name}</li>
        })}
      </ul>
    </div>
  );
}

export default EditPlayerDirectory;
