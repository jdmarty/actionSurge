import React from "react";
import { ToastContainer } from "react-toast";
import MainRouter from "./MainRouter"
import { AuthProvider } from "./utils/AuthState"
import {CreatePlayerProvider } from "./utils/CreatePlayerState"
import './App.css';

function App() {
  return (
    <AuthProvider>
      <CreatePlayerProvider>
        <div className="bg-gray-500 min-h-screen">
          <MainRouter />
          <ToastContainer position="top-center" delay={3000} />
        </div>
      </CreatePlayerProvider>
    </AuthProvider>
  );
}

export default App;
