import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch, Link } from "react-router-dom";
import { useAuthContext } from "./utils/AuthState"

// Raw Components
import Nav from "./components/Nav";
// Pages
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import NoMatch from "./pages/NoMatch"
import CreateCharacter from "./pages/CreateCharacter";
import EditCharacterDirectory from "./pages/EditCharacterDirectory"
import EditCharacter from "./pages/EditCharacter"
import Battle from "./pages/Battle";


function MainRouter() {
  // get current auth context
  const [authState] = useAuthContext();

  // Create routes map
  return (
    <Router>
      {/* <div className="bg-red-500 p-2">
        <span className="border-black border-2 mx-2">
          Logged In = {authState.loggedIn + ""}
        </span>
        <span className="border-black border-2 mx-2">
          User Name = {authState.userName}
        </span>
        <span className="border-black border-2 mx-2">
          User ID = {authState.userId}
        </span>
      </div> */}
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/create-character">
          {authState.loggedIn ? <CreateCharacter /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/edit-character">
          {authState.loggedIn ? <EditCharacterDirectory /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/edit-character/:id">
          {authState.loggedIn ? <EditCharacter /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/battle">
          {authState.loggedIn ? <Battle /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default MainRouter;
