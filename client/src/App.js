import React from "react";
import MyRouter from "./MyRouter"
import { AuthProvider } from "./utils/AuthState"
import './App.css';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <MyRouter />
      </div>
    </AuthProvider>
  );
}

export default App;
