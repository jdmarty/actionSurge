import React from "react";

function SubmitButton(props) {
  console.log(props)
  return (
    <button
      type="submit"
      className="inline-flex py-2 px-4 text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

export default SubmitButton;
