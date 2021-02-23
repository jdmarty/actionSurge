import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { useAuthContext } from "../utils/AuthState";

function EditCharacterDirectory() {
  // Characters list and auth state for user id
  const [characters, setCharacters] = useState([]);
  const [authState] = useAuthContext();

  // Render a list of players on component mount
  useEffect(() => {
    API.getUserCharacters(authState.userId)
      .then(({ data }) => setCharacters(data))
      .catch((err) => console.log(err));
  });

  // component describing list item link
  const DirectoryLink = (props) => {
    return (
      <Link to={`edit-character/${props.id}`}>
        <li className="text-center text-2xl bg-yellow-900 border hover:bg-gray-300 hover:text-black p-2 m-4">
          {props.name}
        </li>
      </Link>
    );
  };

  // render a directory link for each character
  const renderLinks = (characters) => {
    return characters.map((character) => {
      return <DirectoryLink name={character.name} id={character._id} />;
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
            <li className="text-center text-2xl bg-green-900 border hover:bg-gray-300 hover:text-black p-2 m-4">
              + Create New Character
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default EditCharacterDirectory;
