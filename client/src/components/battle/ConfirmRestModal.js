import React, { useState } from "react";
import Modal from "react-modal";

function ConfirmResetModal(props) {
  return (
    <Modal {...props}>
      <div className="text-3xl text-center">
        <h1 className="mb-4">Are you sure you want to reset this battle?</h1>
        <button
          className="bg-red-500 px-4 py-2 rounded-lg mx-6"
          onClick={() => {
            props.handleReset();
            props.closeModal();
          }}
        >
          Yes
        </button>
        <button
          className="bg-yellow-500 px-4 py-2 rounded-lg mx-6"
          onClick={props.closeModal}
        >
          No
        </button>
      </div>
    </Modal>
  );
}

export default ConfirmResetModal