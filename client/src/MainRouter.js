import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch, Link } from "react-router-dom";
import { useAuthContext } from "./utils/AuthState"
import Home from "./pages/Home"
import Login from "./pages/Login"
import NoMatch from "./pages/NoMatch"
import CreatePlayer from "./pages/CreatePlayer";
import EditPlayer from "./pages/EditPlayer"

function MainRouter() {
  // get current auth context
  const [authState, authDispatch] = useAuthContext();
  const [authorized, setAuthorized] = useState(false);

  // use effect to monitor login status
  useEffect(() => {
    setAuthorized(authState.loggedIn)
    console.log(authorized)
  }, [authState, authorized]) 

  // Create routes map
  return (
    <Router>
      <div className="bg-red-500 p-2">
        <span className="border-black border-2">Logged In = {authState.loggedIn + ""}</span>
        <span className="border-black border-2">User Name = {authState.userName}</span>
        <span className="border-black border-2">User ID = {authState.userId}</span>
        <Link to="/">Go Home</Link>
      </div>
      <Switch>
        <Route exact path="/">
          {authorized ? <Home /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/create-player">
          {authorized ? <CreatePlayer /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/edit-player">
          {authorized ? <EditPlayer /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/login" component={Login} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default MainRouter;
