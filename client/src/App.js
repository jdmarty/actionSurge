import React from "react";
import { ToastContainer } from "react-toast";
import MainRouter from "./MainRouter"
import { AuthProvider } from "./utils/AuthState"
import { CreateCharacterProvider } from "./utils/CreateCharacterState"
import './App.css';

function App() {
  return (
    <AuthProvider>
      <div className="bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 min-h-screen">
        <MainRouter />
        <ToastContainer position="top-center" delay={3000} />
      </div>
    </AuthProvider>
  );
}

export default App;
