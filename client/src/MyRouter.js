import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuthContext } from "./utils/AuthState"
import Login from "./pages/Login"
import NoMatch from "./pages/NoMatch"

function MyRouter() {
  const [state, dispatch] = useAuthContext();
  console.log(state)
  return (
    <Router>
      <div>
        <p className="bg-red-500">Logged In = {state.loggedIn + ""}</p>
      </div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default MyRouter;
