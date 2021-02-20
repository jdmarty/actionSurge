import React from "react";
import MainRouter from "./MainRouter"
import { AuthProvider } from "./utils/AuthState"
import './App.css';

function App() {
  return (
    <AuthProvider>
      <div className="App bg-gray-500 min-h-screen">
        <MainRouter />
      </div>
    </AuthProvider>
  );
}

export default App;
