import React, { useEffect } from "react";
import { useCreateCharacterContext } from "../utils/CreateCharacterState"

function EditCharacter() {
  const [characterState, characterDispatch] = useCreateCharacterContext()
  return <div>This is an Edit Player page</div>;
}

export default EditCharacter;
