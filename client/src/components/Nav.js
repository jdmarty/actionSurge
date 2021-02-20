import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuthContext } from "../utils/AuthState";
import { LOGOUT } from "../utils/actions";

function Nav() {
  // reference to authorization context
  const [authState, authDispatch] = useAuthContext();

  // handle logout click
  const handleLogout = (e) => {
    e.preventDefault();
    authDispatch({ type: LOGOUT });
    window.location.pathname = "/login"
  };

  // class strings for buttons
  const active = "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium";
  const inactive = "text-gray-300 px-3 py-2 rounded hover:bg-gray-700 hover:text-white";
  const logout = "border-red-500 text-red-500 border-2 px-3 py-2 rounded-full hover:text-white hover:bg-red-500";
  const login = "border-green-500 text-green-500 border-2 px-3 py-2 rounded-full hover:text-white hover:bg-green-500";
  let location = useLocation()

  // select login or logout button
  const renderLogin = () => {
    if (authState.loggedIn) {
      return (
        <button className={logout} onClick={handleLogout}>
          Logout
        </button>
      );
    } else {
      return (
        <Link to="/">
          <button className={login}>
            Login
          </button>
        </Link>
      );
    }
  }

  return (
    // Background
    <nav className="bg-gray-800">
      {/* margins and padding */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Alignment and padding */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="hidden md:flex">
              <img
                className="h-8 w-8 cursor-pointer"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
                onClick={() => window.location.pathname = "/"}
              ></img>
            </div>
            {/* Links */}
            <div>
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/">
                  <div className={location === "/" ? active : inactive}>
                    Home
                  </div>
                </Link>

                <Link to="/create-player">
                  <div className={location === "/create-player" ? active : inactive}>
                    Create Player
                  </div>
                </Link>

                <Link to="/battle">
                  <div className={location === "/battle" ? active : inactive}>
                    Run Battle
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* Login Button */}
          <div className="ml-4 flex items-center md:ml-6">
            {renderLogin()}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
