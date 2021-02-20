import React, { useRef } from "react";
import { useAuthContext } from "../utils/AuthState";
import { LOGIN } from "../utils/actions";
import API from "../utils/API";
// components
import LoginScreen from "../components/LoginScreen"
import SignupScreen from "../components/SignupScreen";

function Login() {
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
    <div className="p-9">
      <div className="border-2 border-black">
        Here
      </div>
      <div className="sm:grid grid-cols-2 gap-4 h-75">
        <LoginScreen />
        <SignupScreen />
      </div>
    </div>
  );
}

export default Login;
