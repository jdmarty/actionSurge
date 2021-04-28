import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../utils/AuthState";
import API from "../utils/API";
import parseIndexName from "../utils/parseIndexName"

function EditCharacterDirectory() {
  // Characters list, auth state, and global context
  const [characters, setCharacters] = useState([]);
  const [authState] = useAuthContext();

  // Render a list of players on component mount
  useEffect(() => {
    API.getUserCharacters(authState.userId)
      .then(({ data }) => setCharacters(data))
      .catch((err) => console.log(err));
  }, [authState.userId]);
  
  // render a directory link for each character
  const renderLinks = (characters) => {
    return characters.map((character, index) => {
      return (
        <Link to={`edit-character/${character._id}`}>
          <li className="flex justify-between transition duration-250 text-2xl bg-gray-900 border hover:bg-green-700 transform md:hover:scale-110 py-2 px-4 m-4 rounded-md">
            <span>{character.name}</span>
            <span>Lvl {character.level} {parseIndexName(character.classType)}</span>
          </li>
        </Link>
      );
    });
  };

  return (
    <div className="py-9 md:px-9 sm:px-36 px-4 flex justify-center">
      <div className="col-span-10 px-2 py-2 text-white">
        <h1 className="text-center text-5xl mb-5 bg-gray-900 p-5 border">
          Select a Character to Edit:
        </h1>
        <ul>
          <Link to="/create-character">
            <li className="transition duration-250 text-center text-2xl bg-gray-500 border hover:bg-green-700 transform md:hover:scale-110 p-2 m-4 rounded-md">
              + Create New Character
            </li>
          </Link>
          {renderLinks(characters)}
        </ul>
      </div>
    </div>
  );
}

export default EditCharacterDirectory;
