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
  const active = "bg-gray-900 text-white px-3 py-2 rounded-md font-medium";
  const inactive = "text-gray-300 px-3 py-2 rounded-md hover:bg-gray-700 hover:text-white";
  const logout = "border-red-500 text-red-500 border-2 px-3 py-2 rounded-md hover:text-white hover:bg-red-500";
  const login = "border-green-500 text-green-500 border-2 px-3 py-2 rounded-md hover:text-white hover:bg-green-500";
  let location = useLocation().pathname

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
        <Link to="/login">
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
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        {/* Alignment and padding */}
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <div className="hidden md:block">
              <img
                className="h-8 w-8 cursor-pointer"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
                onClick={() => (window.location.pathname = "/")}
              ></img>
            </div>
            {/* Links */}
            <div>
              <div className="md:ml-10 flex items-baseline md:space-x-2">
                <Link to="/">
                  <div className={location === "/" ? active : inactive}>
                    Home
                  </div>
                </Link>

                <Link to="/create-character">
                  <div
                    className={
                      location === "/create-character" ? active : inactive
                    }
                  >
                    Create
                  </div>
                </Link>

                <Link to="/edit-character">
                  <div
                    className={location === "/edit-character" ? active : inactive}
                  >
                    Edit
                  </div>
                </Link>

                <Link to="/battle">
                  <div className={location === "/battle" ? active : inactive}>
                    Battle
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* Login Button */}
          <div className="ml-4 flex items-center md:ml-6">{renderLogin()}</div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
