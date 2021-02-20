import React, { useRef } from "react";
import { Link } from "react-router-dom"
import { useAuthContext } from "../utils/AuthState";
import { LOGIN } from "../utils/actions";
import API from "../utils/API"

function LoginScreen() {
  // references for inputs
  const loginEmail = useRef();
  const loginPassword = useRef();

  // reference to authorization context
  const [authState, authDispatch] = useAuthContext();

  // handle login submit
  const handleLogin = (e) => {
    e.preventDefault();
    API.loginUser({
      email: loginEmail.current.value,
      password: loginPassword.current.value,
    })
      .then(({ data }) => {
        authDispatch({
          type: LOGIN,
          userId: data.user_id,
          userName: data.user_name,
          loggedIn: data.logged_in,
        });
        window.location.pathname = "/";
      })
      .catch((err, data) => {
        console.log(err, data);
        alert("Invalid username or password");
      });
  };

  return (
    <div className="bg-gray-900 text-gray-300 rounded-md p-5">
      <h2 className="text-center text-3xl">Login</h2>
      <form className="px-2">
        <div className="px-4 py-3 text-left sm:px-6">
          <label
            htmlFor="login-email"
            className="block text-lg font-medium text-gray-300"
          >
            Email
          </label>
          <input
            type="text"
            name="login-email"
            id="login-email"
            className="text-black p-1 mt-1 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md"
            placeholder="Email"
            required
            ref={loginEmail}
          ></input>
        </div>

        <div className="px-4 py-3 text-left sm:px-6">
          <label
            htmlFor="login-password"
            className="block text-lg font-medium text-gray-300"
          >
            Password
          </label>
          <input
            type="text"
            name="login-password"
            id="login-password"
            className="text-black p-1 mt-1 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md"
            placeholder="Password"
            ref={loginPassword}
          ></input>
        </div>

        <div className="px-4 py-3 text-left sm:px-6 flex">
          <button
            type="submit"
            className="inline-flex py-2 px-4 text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            onClick={handleLogin}
          >
            Login
          </button>
          <Link to="/signup">
            <p className="py-2 px-4">Sign Up</p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginScreen;
