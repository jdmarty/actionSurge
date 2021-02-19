import React from "react";
import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"></img>
            </div>
            <div>
              <div className="ml-10 flex items-baseline space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <Link to="/">
                  <div className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Home</div>
                </Link>

                <Link to="/create-player">
                  <div className="text-gray-300 hover:bg-gray-700 hover:text-white">Create Player</div>
                </Link>

                <Link to="/battle">
                  <div className="text-gray-300 hover:bg-gray-700 hover:text-white">Run Battle</div>
                </Link>
              </div>
            </div>
          </div>

          <div class="ml-4 flex items-center md:ml-6">
            <button class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>

  );
}

export default Nav;
