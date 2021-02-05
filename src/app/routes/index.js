import React, { Fragment } from "react";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import { isAuthenticated } from "../services/auth";
import Footer from "../components/Footer";
import Login from "../screens/Login";
import Home from "../screens/Home";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={() => <Login />} />
        <PrivateRoute path="/dashboard" component={() => <Home />} />
        {/* <Route path="/dashboard" component={() => <Home />} /> */}
        <Route path="/criar/conta" component={() => <Login />} />
        <Route
          path="*"
          component={() => (
            <h1>
              <a href="/">Voltar para o inicio</a> <br />
              Page not found
            </h1>
          )}
        />
      </Switch>
    </Fragment>
    <Fragment>
      <Footer />
    </Fragment>
  </BrowserRouter>
);

export default Routes;
