import React from "react";
import MainRouter from "./MainRouter"
import { AuthProvider } from "./utils/AuthState"
import './App.css';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <MainRouter />
      </div>
    </AuthProvider>
  );
}

export default App;
