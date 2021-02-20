import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch, Link } from "react-router-dom";
import { useAuthContext } from "./utils/AuthState"
// Raw Components
import Nav from "./components/Nav";
// Pages
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import NoMatch from "./pages/NoMatch"
import CreatePlayer from "./pages/CreatePlayer";
import EditPlayer from "./pages/EditPlayer"
import Battle from "./pages/Battle"


function MainRouter() {
  // get current auth context
  const [authState, authDispatch] = useAuthContext();

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
        <Route exact path="/create-player">
          {authState.loggedIn ? <CreatePlayer /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/edit-player">
          {authState.loggedIn ? <EditPlayer /> : <Redirect to="/login" />}
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
