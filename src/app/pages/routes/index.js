import React from "react";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import { isAuthenticated } from "../../services/auth";

import Login from "../controllers/LoginController/";
import Home from "../controllers/HomeController/";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <Login />} />

      <PrivateRoute path="/dashboard" component={() => <Home />} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
