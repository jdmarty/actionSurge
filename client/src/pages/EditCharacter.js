import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCreateCharacterContext } from "../utils/CreateCharacterState";
import { ADJUST_CHARACTER_ALL } from "../utils/actions";
import API from "../utils/API";
import CreateCharacter from "../pages/CreateCharacter";

function EditCharacter(props) {
  // set state and params
  const [characterState, characterDispatch] = useCreateCharacterContext();
  const [ready, setReady] = useState(false)
  let { id } = useParams();

  // on mount get a character from the id and update character state
  useEffect(() => {
    API.getCharacter(id).then(({data}) => {
      characterDispatch({
        type: ADJUST_CHARACTER_ALL,
        newState: data
      });
      setReady(true)
    })
  }, [])

  return <div>{ready ? <CreateCharacter type="edit"/> : "Loading"}</div>;
}

export default EditCharacter