import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
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
  const [valid, setValid] = useState({
    name: false,
    email: false,
    password: false,
    confirm: false
  })

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
      window.location.pathname = "/"
    }).catch(err => {
      console.log(err);
      alert("Account with this email address already exists")
    })
  };

  // validate name input
  const validateName = e => {
    if (signupName.current.value) {
      setValid({...valid, name: true})
    } else {
      setValid({...valid, name: false})
    }
  }

  // validate email input
  const validateEmail = e => {
    if (signupEmail.current.value.match(/.+@.+\..+/)) {
      setValid({ ...valid, email: true });
    } else {
      setValid({ ...valid, email: false });
    }
  }

  // validate password input
  const validatePassword = (e) => {
    if (signupPassword.current.value.length >= 8) {
      setValid({ ...valid, password: true });
    } else {
      setValid({ ...valid, password: false });
    }
  };

  // validate confirm password input
  const validateConfirm = (e) => {
    if (signupConfirm.current.value === signupPassword.current.value) {
      setValid({ ...valid, confirm: true });
    } else {
      setValid({ ...valid, confirm: false });
    }
  };

  // set icon on input
  const renderValidMark = (ok) => {
      return ok ? (
        <i className="mx-2 text-green-400 fas fa-check float-right"></i>
      ) : (
        <i className="mx-2 text-red-400 fas fa-times float-right"></i>
      );
  }

  // classes string for inputs
  const inputStyle = "text-black p-1 mt-1 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md"

  return (
    <div className="bg-gray-900 text-gray-300 rounded-lg p-5 lg:w-2/3 md:w-3/4 w-full">
      <h2 className="text-center text-3xl">Signup</h2>
      <form className="md:px-24 sm:px-12 px-4">
        <div className="py-3 text-left sm:px-6">
          <label
            htmlFor="signup-name"
            className="block text-lg font-medium text-gray-300"
          >
            Name
            {renderValidMark(valid.name)}
          </label>
          <input
            type="text"
            name="signup-name"
            id="signup-name"
            className={inputStyle}
            placeholder="Name"
            ref={signupName}
            onChange={validateName}
          ></input>
        </div>

        <div className="py-3 text-left sm:px-6">
          <label
            htmlFor="signup-email"
            className="block text-lg font-medium text-gray-300"
          >
            Email
            {renderValidMark(valid.email)}
          </label>
          <input
            type="text"
            name="signup-email"
            id="signup-email"
            className={inputStyle}
            placeholder="Email"
            ref={signupEmail}
            onChange={validateEmail}
          ></input>
        </div>

        <div className="py-3 text-left sm:px-6">
          <label
            htmlFor="signup-password"
            className="block text-lg font-medium text-gray-300"
          >
            Password
            {renderValidMark(valid.password)}
          </label>
          <input
            type="password"
            name="signup-password"
            id="signup-password"
            className={inputStyle}
            placeholder="Password"
            ref={signupPassword}
            onChange={validatePassword}
          ></input>
        </div>

        <div className="py-3 text-left sm:px-6">
          <label
            htmlFor="signup-confirm-password"
            className="block text-lg font-medium text-gray-300"
          >
            Confirm Password
            {renderValidMark(valid.confirm)}
          </label>
          <input
            type="password"
            name="signup-confirm-password"
            id="signup-confirm-password"
            className={inputStyle}
            placeholder="Confirm Password"
            ref={signupConfirm}
            onChange={validateConfirm}
          ></input>
        </div>

        <div className="py-3 text-left sm:px-6 flex">
          <button
            type="submit"
            className="disabled:opacity-50 py-2 px-4 text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            onClick={handleSignup}
            disabled={(valid.name && valid.email && valid.password && valid.confirm) ? false : true}
          >
            Sign Up
          </button>
          <Link to="/login">
            <p className="py-2 px-4 hover:underline">Login</p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginScreen;
