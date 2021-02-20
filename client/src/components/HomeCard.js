import React from "react";
import { Link } from "react-router-dom";

function Battle({ title, icon, route }) {

  return (
    <Link to={route}>
      {/* Animation and Alignment */}
      <div className="transition duration-250 ease-in-out transform md:hover:scale-110 bg-gray-900 hover:bg-green-700 mt-2 border rounded-md">
        {/* Decoration */}
        <div className="border-b-2 flex justify-center items-center lg:py-24 py-12">
          <i class={`${icon} text-white text-9xl`}></i>
        </div>
        {/* Description */}
        <div className="py-6">
          <h1 className="text-center lg:text-5xl text-3xl text-gray-300">
            {title}
          </h1>
        </div>
      </div>
    </Link>
  );
}

export default Battle;
