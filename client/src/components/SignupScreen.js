import React, { useRef } from "react";
import { useAuthContext } from "../utils/AuthState";
import { LOGIN } from "../utils/actions";
import API from "../utils/API";

function LoginScreen() {
  // references for inputs
  const signupName = useRef();
  const signupEmail = useRef();
  const signupPassword = useRef();
  const signupConfirm = useRef();

  // reference to authorization context
  const [authState, authDispatch] = useAuthContext();

  // handle signup submit
  const handleSignup = (e) => {
    e.preventDefault();
    // check that the form is completely filled out
    if (
      !signupEmail.current.value ||
      !signupName.current.value ||
      !signupPassword.current.value ||
      !signupConfirm.current.value
    ) {
      alert("Signup Form not filled out");
      return;
    }
    // check if passwords match
    if (signupPassword.current.value !== signupConfirm.current.value) {
      alert("Passwords do not match");
      return;
    }
    // send details to the API
    API.createUser({
      username: signupName.current.value,
      password: signupPassword.current.value,
      email: signupEmail.current.value,
    }).then(({ data }) => {
      console.log(data);
      authDispatch({
        type: LOGIN,
        userId: data.user_id,
        userName: data.user_name,
        loggedIn: data.logged_in,
      });
    });
  };

  return (
    <div className="bg-gray-900 text-gray-300 rounded-md p-5">
      <h2 className="text-center text-3xl">Signup</h2>
      <form className="px-2">
        <div className="px-4 py-3 text-left sm:px-6">
          <label
            htmlFor="signup-name"
            className="block text-lg font-medium text-gray-300"
          >
            Name
          </label>
          <input
            type="text"
            name="signup-name"
            id="signup-name"
            className="p-1 mt-1 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md"
            placeholder="Name"
            ref={signupName}
          ></input>
        </div>

        <div className="px-4 py-3 text-left sm:px-6">
          <label
            htmlFor="signup-email"
            className="block text-lg font-medium text-gray-300"
          >
            Email
          </label>
          <input
            type="text"
            name="signup-email"
            id="signup-email"
            className="p-1 mt-1 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md"
            placeholder="Email"
            ref={signupEmail}
          ></input>
        </div>

        <div className="px-4 py-3 text-left sm:px-6">
          <label
            htmlFor="signup-password"
            className="block text-lg font-medium text-gray-300"
          >
            Password
          </label>
          <input
            type="text"
            name="signup-password"
            id="signup-password"
            className="p-1 mt-1 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md"
            placeholder="Password"
            ref={signupPassword}
          ></input>
        </div>

        <div className="px-4 py-3 text-left sm:px-6">
          <label
            htmlFor="signup-confirm-password"
            className="block text-lg font-medium text-gray-300"
          >
            Confirm Password
          </label>
          <input
            type="text"
            name="signup-confirm-password"
            id="signup-confirm-password"
            className="p-1 mt-1 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md"
            placeholder="Confirm Password"
            ref={signupConfirm}
          ></input>
        </div>

        <div className="px-4 py-3 text-left sm:px-6">
          <button
            type="submit"
            className="inline-flex py-2 px-4 text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            onClick={handleSignup}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginScreen;
