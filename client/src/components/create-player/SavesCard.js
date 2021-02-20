import React, { useState, useRef } from "react";

function SavesCard(props) {


  return (
    <div className="bg-white px-2 rounded-full">
      <div>
        <input type="checkbox" name="save"></input>
        <label htmlFor="save" className="mx-2">
          {props.display}
        </label>
        <span>+2</span>
      </div>
    </div>
  );
}

export default SavesCard;
