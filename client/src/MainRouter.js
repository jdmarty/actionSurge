import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useAuthContext } from "./utils/AuthState";
import { CreateCharacterProvider } from "./utils/CreateCharacterState";

// Raw Components
import Nav from "./components/Nav.jsx";
// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import CreateCharacter from "./pages/CreateCharacter.jsx";
import EditCharacterDirectory from "./pages/EditCharacterDirectory";
import EditCharacter from "./pages/EditCharacter";
import Battle from "./pages/Battle";

function MainRouter() {
  // get current auth context
  const [authState] = useAuthContext();

  // Create routes map
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/create-character">
          <CreateCharacterProvider>
            {authState.loggedIn ? (
              <CreateCharacter />
            ) : (
              <Redirect to="/login" />
            )}
          </CreateCharacterProvider>
        </Route>
        <Route exact path="/edit-character">
          {authState.loggedIn ? (
            <EditCharacterDirectory />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route exact path="/edit-character/:id">
          <CreateCharacterProvider>
            {authState.loggedIn ? <EditCharacter /> : <Redirect to="/login" />}
          </CreateCharacterProvider>
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
