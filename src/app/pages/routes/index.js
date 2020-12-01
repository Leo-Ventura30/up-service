import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../controllers/LoginController/";
import Home from "../controllers/HomeController";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={() => <Login />} />
        {/* <Route path="/dashboard" component={() => <Home />} /> */}
      </Switch>
    </Router>
  );
}
