import React from "react";
import Modal from "react-modal";

function SpellModal(props) {
  return (
    <Modal {...props}>
      <h1 className="text-3xl text-center mb-2 border-b border-gray-800 py-2">
        {props.spell && props.spell.name}
      </h1>
      <div
        className="flex flex-col space-y-4"
        style={{ height: "75vh", overflow: "auto" }}
      >
        This is a spell modal
      </div>
    </Modal>
  );
}

export default SpellModal;
