import React, { useRef } from "react";
import { useAuthContext } from "../utils/AuthState";
import { LOGIN } from "../utils/actions";
import API from "../utils/API";

function Login() {
  // references for inputs
  const loginEmail = useRef();
  const loginPassword = useRef();
  const signupName = useRef();
  const signupEmail = useRef();
  const signupPassword = useRef();
  const signupConfirm = useRef();

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
        window.location.pathname = "/"
      })
      .catch((err, data) => {
        console.log(err, data);
        alert("Invalid username or password");
      });
  };

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
    })
    .then(({ data }) => {
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
    <div className="bg-gray-500 h-screen p-9">
      <div className="sm:grid grid-cols-2 gap-4">
        <div className="mt-2 bg-green-500 rounded-md">
          <h2 className="text-center text-lg">Login</h2>
          <form className="px-2">
            <div className="px-4 py-3 text-left sm:px-6">
              <label
                htmlFor="login-email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="text"
                name="login-email"
                id="login-email"
                className="p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md"
                placeholder="Email"
                required
                ref={loginEmail}
              ></input>
            </div>

            <div className="px-4 py-3 text-left sm:px-6">
              <label
                htmlFor="login-password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="text"
                name="login-password"
                id="login-password"
                className="p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md"
                placeholder="Password"
                ref={loginPassword}
              ></input>
            </div>

            <div className="px-4 py-3 text-left sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="mt-2 bg-green-500 rounded-md">
          <h2 className="text-center text-lg">Signup</h2>
          <form className="px-2">
            <div className="px-4 py-3 text-left sm:px-6">
              <label
                htmlFor="signup-name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="signup-name"
                id="signup-name"
                className="p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md"
                placeholder="Name"
                ref={signupName}
              ></input>
            </div>

            <div className="px-4 py-3 text-left sm:px-6">
              <label
                htmlFor="signup-email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="text"
                name="signup-email"
                id="signup-email"
                className="p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md"
                placeholder="Email"
                ref={signupEmail}
              ></input>
            </div>

            <div className="px-4 py-3 text-left sm:px-6">
              <label
                htmlFor="signup-password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="text"
                name="signup-password"
                id="signup-password"
                className="p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md"
                placeholder="Password"
                ref={signupPassword}
              ></input>
            </div>

            <div className="px-4 py-3 text-left sm:px-6">
              <label
                htmlFor="signup-confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="text"
                name="signup-confirm-password"
                id="signup-confirm-password"
                className="p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md"
                placeholder="Confirm Password"
                ref={signupConfirm}
              ></input>
            </div>

            <div className="px-4 py-3 text-left sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleSignup}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
