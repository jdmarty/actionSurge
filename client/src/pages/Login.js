import React from "react";
// components
import LoginScreen from "../components/LoginScreen"
import SignupScreen from "../components/SignupScreen";

function Login() {
  return (
    <div className="p-9">
      <div className="sm:grid grid-cols-2 gap-4 h-75">
        <LoginScreen />
        <SignupScreen />
      </div>
    </div>
  );
}

export default Login;
