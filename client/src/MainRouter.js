import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { useAuthContext } from "./utils/AuthState"
import Home from "./pages/Home"
import Login from "./pages/Login"
import NoMatch from "./pages/NoMatch"
import CreatePlayer from "./pages/CreatePlayer";
import EditPlayer from "./pages/EditPlayer"

function MainRouter() {
  // get current auth context
  const [state, dispatch] = useAuthContext();

  // Create routes map
  return (
    <Router>
      <div>
        <p className="bg-red-500">Logged In = {state.loggedIn + ""}</p>
      </div>
      <Switch>
        <Route exact path="/">
          {state.loggedIn ? <Home /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/create-player">
          {state.loggedIn ? <CreatePlayer /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/edit-player">
          {state.loggedIn ? <EditPlayer /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/login" component={Login} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default MainRouter;
