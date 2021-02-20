import React, { useRef } from "react";
import { Link } from "react-router-dom"
import { toast } from "react-toast"
import { useAuthContext } from "../utils/AuthState";
import { LOGIN } from "../utils/actions";
import API from "../utils/API"
import SubmitButton from "../components/SubmitButton"

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
        toast.error("Invalid username or password");
        // alert("Invalid username or password");
      });
  };

  return (
    <div className="bg-gray-900 text-gray-300 rounded-lg p-5 lg:w-2/3 md:w-3/4 w-full border">
      <h2 className="text-center text-3xl">Login</h2>
      <form className="md:px-24 sm:px-12 px-4">
        <div className="py-3 text-left sm:px-6">
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

        <div className="py-3 text-left sm:px-6">
          <label
            htmlFor="login-password"
            className="block text-lg font-medium text-gray-300"
          >
            Password
          </label>
          <input
            type="password"
            name="login-password"
            id="login-password"
            className="text-black p-1 mt-1 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md"
            placeholder="Password"
            ref={loginPassword}
          ></input>
        </div>

        <div className="py-3 text-left sm:px-6 flex">
          <SubmitButton text="Login" onClick={handleLogin} />
          <Link to="/signup">
            <p className="py-2 px-4 hover:underline">Sign Up</p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginScreen;
