import React from "react";
import { ToastContainer } from "react-toast";
import MainRouter from "./MainRouter"
import { AuthProvider } from "./utils/AuthState"
import { CreateCharacterProvider } from "./utils/CreateCharacterState"
import './App.css';

function App() {
  return (
    <AuthProvider>
      <CreateCharacterProvider>
        <div className="bg-gray-500 min-h-screen">
          <MainRouter />
          <ToastContainer position="top-center" delay={3000} />
        </div>
      </CreateCharacterProvider>
    </AuthProvider>
  );
}

export default App;
