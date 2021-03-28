import React from "react";
import Modal from "react-modal";

function SpellModal(props) {
  if (!props.spell.name) return <></>;
  return (
    <Modal {...props}>
      <h1 className="text-3xl text-center mb-2 py-2">{props.spell.name}</h1>
      <div
        className="flex flex-col space-y-4"
        style={{ height: "75vh", overflow: "auto" }}
      >
        <div className="md:grid grid-cols-4 gap-2 text-lg">
          {/* Level */}
          <div className="text-center py-2">
            <h3 className="bg-red-900 text-white">Level</h3>
            <p className="bg-white">{props.spell.level}</p>
          </div>
          {/* Cast Time */}
          <div className="text-center p-2">
            <h3 className="bg-red-900 text-white">Casting Time</h3>
            <p className="bg-white">{props.spell.casting_time}</p>
          </div>
          {/* Range and Area */}
          <div className="text-center p-2">
            <h3 className="bg-red-900 text-white">Range / Area</h3>
            <p className="bg-white">
              {props.spell.range}
              {props.spell.area_of_effect &&
                ` / ${props.spell.area_of_effect.size}ft ${props.spell.area_of_effect.type}`}
            </p>
          </div>
          {/* Components */}
          <div className="text-center p-2">
            <h3 className="bg-red-900 text-white">Components</h3>
            <p className="bg-white">
              {props.spell.components.join(", ")}
              {props.spell.material && ` (${props.spell.material})`}
            </p>
          </div>
          {/* Duration */}
          <div className="text-center p-2">
            <h3 className="bg-red-900 text-white">Duration</h3>
            <p className="bg-white">{props.spell.duration}</p>
          </div>
          {/* School */}
          <div className="text-center p-2">
            <h3 className="bg-red-900 text-white">School</h3>
            <p className="bg-white">{props.spell.school.name}</p>
          </div>
          {/* Save Type */}
          <div className="text-center p-2">
            <h3 className="bg-red-900 text-white">Saving Throw</h3>
            <p className="bg-white">
              {props.spell.dc ? props.spell.dc.dc_type.name : "None"}
            </p>
          </div>
          {/* Damage Type */}
          <div className="text-center p-2">
            <h3 className="bg-red-900 text-white">Damage Type</h3>
            <p className="bg-white">
              {props.spell.damage
                ? props.spell.damage.damage_type.name
                : "None"}
            </p>
          </div>
          {/* Description */}
          <div className="border p-4 col-span-4 bg-white rounded shadow">
            <p>{props.spell.desc}</p>
            {props.spell.higher_level && <br></br>}
            <p>{props.spell.higher_level}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default SpellModal;
