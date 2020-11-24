import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../controllers/LoginController/";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}
