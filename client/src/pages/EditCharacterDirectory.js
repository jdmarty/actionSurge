import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../utils/AuthState";
import API from "../utils/API";

function EditCharacterDirectory() {
  // Characters list, auth state, and global context
  const [characters, setCharacters] = useState([]);
  const [authState] = useAuthContext();

  // Render a list of players on component mount
  useEffect(() => {
    API.getUserCharacters(authState.userId)
      .then(({ data }) => setCharacters(data))
      .catch((err) => console.log(err));
  }, []);
  
  // render a directory link for each character
  const renderLinks = (characters) => {
    return characters.map((character, index) => {
      return (
        <Link to={`edit-character/${character._id}`}>
          <li className="text-center text-2xl bg-yellow-900 border hover:bg-gray-300 hover:text-black p-2 m-4">
            {character.name}
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
          {renderLinks(characters)}
          <Link to="/create-character">
            <li className="text-center text-2xl bg-gray-900 border hover:bg-gray-300 hover:text-black p-2 m-4">
              + Create New Character
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default EditCharacterDirectory;
