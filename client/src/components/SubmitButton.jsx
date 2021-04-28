import React from "react";

function SubmitButton(props) {
  return (
    <button
      type="submit"
      className="disabled:opacity-50 inline-flex py-2 px-4 text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
      onClick={props.onClick}
      disabled={props.checkValid ? !props.checkValid() : false}
    >
      {props.text}
    </button>
  );
}

export default SubmitButton;
